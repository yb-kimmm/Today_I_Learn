import { useParams  } from "react-router-dom";
import axios from "../api";

async function getArticle(articleId){
  const data = await axios({
    url: `/article/1`,
    method: "get",
  });

  console.log(data)
}

const Article = () => {

  let params = useParams();

  getArticle(params.articleId);

  
  return (
    <div>
      params : {params.article}
    </div>
  )
}

export default Article;
