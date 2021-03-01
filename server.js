'use strict';

const { throws } = require('assert');
const express = require('express');
const http = require('http');
const static = require('serve-static');
const cookieParser = require('cookie-parser');

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stopping = false;
  }

  async start() {
    this.app.use((req, res, next) => {
      this.busy.add(req.socket);
      res.on('finish', () => {
        if (this.stopping) req.socket.end();
        this.busy.delete(req.socket);
      });
      next();
    });

    this.app.use(cookieParser);
    this.app.get('/_health', (req, res) => {
      res.sendStatus(200);
    });

    this.app.use((err, req, res, next) => {
      res.status(500).send(generateApiError('Api::Error'));
    });

    this.on('connection', (c) => {
      this.currentConns.add(c);
      c.on('close', () => this.currentConns.delete(c));
    });
  }

  shutdown() {
    if (this.stopping) return;
    this.stopping = true;
    this.close(() => {
      process.exit(0);
    });

    setTimeout(() => {
      console.error('비정상적인 종료과정으로서 , 강제종료합니다.');
      process.exit(1);
    }, this.config.shutdownTimeout).unref();

    if (this.currentConns.size > 0) {
      console.log(
        `현재 동시접속중인 연결 ${this.currentConns.size} 가 대기중입니다.`
      );
      for (const con of this.currentConns) {
        if (!this.busy.has(con)) {
          con.end();
        }
      }
    }
  }
}

const init = async (config = {}) => {
  const server = new ApiSErver(config);
  return await server.start();
};

module.export = {
  init,
};
