import { Toilet } from '@_types/toilet';
import * as S from './Post.styles'
import { SortMarker } from '@_components/PostList';

type PostProps = {
  data: SortMarker;
}

const Post = ({ data }: PostProps) => {


  return (
    <S.Wrap>
      <div>
        <p>구분</p>
        <p>{data.divisiton}</p>
      </div>
      <div>
        <p>화장실명</p>
        <p>{data.toiletName}</p>
      </div>
      <div>
        <p>개방시간</p>
        {data.openTime ? <p>{data.openTime}</p> : <p>상시 개방</p>}
      </div>
    </S.Wrap>
  )
}

export default Post;