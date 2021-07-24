// @ts-check
const { post } = require('httpie');

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 * GET /posts
 * GET /posts/:id
 * POST /posts
 *
 */

/** @type {Post[]} */

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property { 'GET' | 'POST'} method
 * @property {(matches : string[] , body : Object | undefined) => Promise<APIResponse> }  callback
 */

const fs = require('fs');
const DB_JSON_FILE_NAME = 'database.json';

/** @returns {Promise<Post[]> }*/
async function getPosts() {
  const json = fs.promises.readFile(DB_JSON_FILE_NAME, 'utf-8');
  return JSON.parse(json).posts;
}

/**
 * @Param {Post[]} posts
 */

async function savePosts(posts) {
  const content = {
    posts,
  };
  await fs.promises.writeFile(
    DB_JSON_FILE_NAME,
    JSON.stringify(content),
    'utf-8'
  );
}

/**
 * @type {Route[]}
 */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => {
      return {
        statusCode: 200,
        body: await getPosts(),
      };
    },
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/, // TODO : ReqExp 로 고쳐야함.
    method: 'GET',
    callback: async (matches) => {
      const postId = matches[1];
      if (!postId) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      const posts = await getPosts();
      const post = posts.find((_post) => _post.id === postId);

      if (!post) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }
      return {
        statusCode: 200,
        body: post,
      };
    },
  },

  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: 'Ill-formed request',
        };
      }
      /** @type {string} */
      /* eslint-disabled-next-line prefer-destructuring */
      const title = body.title;
      const newPost = {
        id: title.replace(/\s/g, '_'),
        title,
        content: body.content,
      };

      const posts = await getPosts();
      posts.push(newPost);
      savePosts(posts);

      return {
        statusCode: 200,
        body: newPost,
      };
    },
  },
];

module.exports = {
  routes,
};
