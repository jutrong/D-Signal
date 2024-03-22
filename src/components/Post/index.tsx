import * as S from './Post.styles'
import { SortMarker } from '@_components/PostList';
import { useNavigate } from 'react-router-dom';

type PostProps = {
  data: SortMarker;
}

const Post = ({ data }: PostProps) => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate(`/postdetail/${data.id}`);
  };

  return (
    <S.Wrap onClick={onClickPost}>
      <S.Tag>
        공공 데이터
      </S.Tag>
      <div>
        <p>🗂️ 구분</p>
        <p>{data.divisiton}</p>
      </div>
      <div>
        <p>🚾 화장실명</p>
        <p>{data.toiletName}</p>
      </div>
      <div>
        <p>⏰ 개방시간</p>
        {data.openTime ? <p>{data.openTime}</p> : <p>상시 개방</p>}
      </div>
    </S.Wrap>
  )
}

export default Post;