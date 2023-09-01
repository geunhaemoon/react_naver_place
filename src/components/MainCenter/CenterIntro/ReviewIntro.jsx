import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./CenterIntroStyle"




function ReviewIntro(props) {
    return (
        <div css={[S.IntroContainer, S.ReviewContainer]}>
            <div css={S.IntroBox}>
                <div>🚩</div>
                <div css={S.IntroText1}>
                    <h1>정성스레 작성한 <span css={S.PointText}>리뷰</span></h1>
                    <h1>내 리뷰를 모아 만든 <span css={S.PointText}>테마리스트</span></h1>
                </div>
                <h2  css={S.IntroText2}>나의 발자취를 소중한 기록으로 남겨보세요.</h2>
                <div>
                    <img css={S.TimeLineImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png"></img>
                </div>
                <button css={S.ReviewBtn}><span css={S.BtnText}>리뷰 참여하기</span></button>
            </div>
        </div>
    );
}

export default ReviewIntro;