import { useParams } from "react-router-dom";


const PostDetail = () => {
  let { id } = useParams()

  return (<div>PostDetail : <p>{id}</p> </div>)

}

export default PostDetail;