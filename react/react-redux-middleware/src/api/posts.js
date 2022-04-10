const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id , title ,body}

const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어",
    body: "리덕스 미들웨어 바디",
  },
  {
    id: 2,
    title: "리덕스 미들웨어2",
    body: "리덕스 미들웨어 바디2",
  },
  {
    id: 3,
    title: "리덕스 미들웨어2131",
    body: "리덕스 미들웨어 바12312디",
  },
  {
    id: 4,
    title: "리덕123123123스 미들웨어",
    body: "213123리덕스 미들웨어 바디",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
