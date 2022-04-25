import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, printState } from "../modules/posts";
import Post from "../components/Post";
import { reducerUtils } from "../lib/asyncUtils";

function PostContainer({ postId }) {
  const { data, loading, error } =
    useSelector((state) => state.posts.post[postId]) || reducerUtils.initial(); // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이고 데이터 없을때만
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(printState())}>상태 출력</button>
      <Post post={data} />{" "}
    </>
  );
}

export default PostContainer;
