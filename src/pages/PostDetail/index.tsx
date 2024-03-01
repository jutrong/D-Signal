import { db } from "@_firebase";
import { Toilet } from "@_types/toilet";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from './Post.styles'
import KakaoStaticMap from "@_components/KakaoMap/KakaoStaticMap";



const PostDetail = () => {
  const [post, setPost] = useState<Toilet>()
  let params = useParams()
  const navigate = useNavigate()


  const getPostDetail = async (postId: string) => {
    if (postId) {
      const docRef = doc(db, "toilet", postId);
      const docSnap = await getDoc(docRef);
      setPost({ id: docSnap.id, ...(docSnap.data() as Toilet) })
    }
  }
  const onClickPrevBtn = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (params?.id) getPostDetail(params?.id)
  }, [params?.id])

  return (
    <S.Wrap>
      <S.PrevBtnWrap>
        <S.PrevBtn size={30} onClick={onClickPrevBtn} />
        <S.ToiletName>
          {post?.화장실명}
        </S.ToiletName>
      </S.PrevBtnWrap>
      <S.DataType>
        <span>공공 데이터</span>
      </S.DataType>
      <S.PostContentWrap>
        <S.Right>
          <div>
            <p>구분</p>
            <p>{post?.구분}</p>
          </div>
          <div>
            <p>개방시간</p>
            <p>{post?.개방시간}</p>
          </div>
          <div>
            <p>관리기관</p>
            <p>{post?.관리기관명}</p>
          </div>
          <div>
            <p>설치연월</p>
            <p>{post?.설치연월}</p>
          </div>
        </S.Right>
        <S.Left>
          <div>
            <p>전화번호</p>
            <p>{post?.전화번호}</p>
          </div>
          <div>
            <p>방식</p>
            <p>{post?.오물처리방식}</p>
          </div>
          <div>
            <p>비상벨</p>
            <p>{post?.비상벨설치여부}</p>
          </div>
          <div>
            <p>입구CCTV</p>
            <p>{post?.화장실입구CCTV설치유무}</p>
          </div>

        </S.Left>
      </S.PostContentWrap>
      <S.Line />
      <KakaoStaticMap lat={post?.WGS84위도 || 0} lng={post?.WGS84경도 || 0} toiletName={post?.화장실명} />
    </S.Wrap >
  )

}

export default PostDetail;