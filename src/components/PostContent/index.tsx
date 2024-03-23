import React from "react";
import { Toilet } from "@_types/toilet";
import * as S from './PostContent.styles'

type PostContentProps = {
  post: Toilet;
};

const PostContent = ({ post }: PostContentProps) => {
  return (
    <S.PostContentWrap>
      <S.Right>
        <div>
          <p>구분</p>
          <p>{post.구분}</p>
        </div>
        <div>
          <p>개방시간</p>
          <p>{post.개방시간}</p>
        </div>
        <div>
          <p>관리기관</p>
          <p>{post.관리기관명}</p>
        </div>
        <div>
          <p>설치연월</p>
          <p>{post.설치연월}</p>
        </div>
      </S.Right>
      <S.Left>
        <div>
          <p>전화번호</p>
          <p>{post.전화번호}</p>
        </div>
        <div>
          <p>방식</p>
          <p>{post.오물처리방식}</p>
        </div>
        <div>
          <p>비상벨</p>
          <p>{post.비상벨설치여부}</p>
        </div>
        <div>
          <p>입구CCTV</p>
          <p>{post.화장실입구CCTV설치유무}</p>
        </div>
      </S.Left>
    </S.PostContentWrap>
  );
};

export default PostContent;