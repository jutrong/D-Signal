import KakaoMap from '@_components/KakaoMap';
import * as S from './Home.styles';
import PostList from '@_components/PostList';
import useToilet from '@_hooks/Map/useToilet';
import { usePositionStore } from '@_store/currentPosition';




const Home = () => {
  const { currentPosition } = usePositionStore()
  const { toiletData } = useToilet(currentPosition.address)


  return (
    <S.Wrap>
      <KakaoMap toiletData={toiletData} />
      <PostList toiletData={toiletData} />
    </S.Wrap>
  )
}

export default Home;
