// @ts-check

// Github의 레포지토리 관리 CLI를 만들어본다.
// 이슈 , 풀 리퀘스트 등의 라벨 관리
// git Token : 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
require('dotenv').config();

const { GITHUB_ACCESS_TOKEN } = process.env;
console.log('TOKEN : ', GITHUB_ACCESS_TOKEN);

const fs = require('fs');
const { program } = require('commander');
const { Octokit } = require('octokit');

program.version('0.0.1');

const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });
program
  .command('me')
  .description('Check my profile')
  .action(async () => {
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();

    console.log('Hello , %s', login);
  });

program
  .command('list-bugs')
  .description('List issus wuth bug label')
  .action(async () => {
    const result = await octokit.rest.issues.listForRepo({
      owner: 'nan-yb',
      repo: 'learn-node',
      lavels: 'bug',
    });
    // result.data.forEach((issue) => {
    // console.log(issue.number, issue.labels);
    // });

    const issuesWithBugLabel = result.data.filter(
      (issue) =>
        issue.labels.find((label) => label.name === 'bug') !== undefined
    );

    const output = issuesWithBugLabel.map((issue) => ({
      title: issue.title,
      number: issue.number,
    }));

    console.log(output);

    // console.log(result);
  });

// 풀 리퀘스트를 모두 검사해서 , 만약 너무 diff가 큰 풀 리퀘스트가 있으면 ' too-big ' 이라는 레이블을 붙인다.

program
  .command('check-prs')
  .description('Check pull request status')
  .action(async () => {
    console.log('Check PRs!');
  });

program.parse(process.argv);
