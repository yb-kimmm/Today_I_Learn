import axios from "axios";

export const registerBoard = (title : string , content:string , writer : string) =>
 axios.post('/boards/create' , { title , content , writer}) ;
export const fetchBoardApi = (boardNo : string) => axios.get(`/boards/${boardNo}`);
export const fetchBoardListApi = () => axios.get("/boards");
export const removeBoardApi =  (boardNo : string) => axios.delete(`/boards/${boardNo}`);
export const modifyBoardApi = (boardNo : string , title : string , content : string) => 
axios.put(`/boards/${boardNo}` , { title , content});