import { useParams  } from "react-router-dom";
import axios from "../api";
import { Viewer } from "@toast-ui/react-editor";
import { useRef , useEffect , useState} from "react";

const Article = () => {
  const params = useParams();
  
  const [title, setTitle] = useState();

  const editorRef = useRef();
  const fetchArticles = async () => {
    try {
      // 요청 처음에 초기화
      var url = `/article/${params.article}`;

      const data = await axios({
        url: url,
        method: "get",
      });

      setTitle(data.article.board.title)

      if(data.article){
        editorRef.current.getInstance().setMarkdown(`${data.article.content}`)
      }
      
    } catch (e) {}
  };

  useEffect(() => {
    fetchArticles();
    
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-6xl py-10 h-full">
        <div className="py-4">
          <button className="flex">
            <span></span>
          </button>

          <div className="md:flex md:items-center mb-6">
            <div className="">
              <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                제목
              </label>
            </div>
            <div className="md:w-2/3">
              <span className="p-4 w-80 h-10 rounded text-lg text-gray-500 font-bold ">
                {title}
              </span>
            </div>
          </div>
        </div>

        <Viewer 
          ref={editorRef}
        />        
      </div>
    </div>
  )
}

export default Article;
