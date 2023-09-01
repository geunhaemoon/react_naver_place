import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./CenterIntroStyle"




function TimeLineIntro(props) {
    return (
        <div css={S.IntroContainer}>
            <div css={S.IntroBox}>
                <div>🚩</div>
                <div css={S.IntroText1}>
                    <h1><span css={S.PointText}>영수증/카드내역 인증, 예약, 주문</span>한</h1>
                    <h1>장소가 나의 기록이 됩니다.</h1>
                </div>
                <h2  css={S.IntroText2}>방문했던 곳을 한눈에 모아보세요</h2>
                <div>
                    <img css={S.TimeLineImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png"></img>
                </div>
                <button css={S.ReviewBtn}><span css={S.BtnText}>리뷰 참여하기</span></button>
            </div>
        </div>
    );
}

export default TimeLineIntro;