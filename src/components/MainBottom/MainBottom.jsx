import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./MainBottomStyle"


function MainBottom(props) {
    return (
        <div css={S.BottomContainer}>
            <div css={S.BottomBigBox}> 
                <div css={S.BottomBox}>
                    <span><button css={S.BottomBtn}>로그인</button></span>
                    <span><button css={S.BottomBtn}>전체서비스</button></span>
                </div>
                <div css={S.BottomBox}>
                    <span><button css={S.BottomBtn}>이용정책</button></span>
                    <span><button css={S.BottomBtn}>MY플레이스 고객센터</button></span>
                    <span><button css={S.BottomBtn}>신고센터</button></span>
                    <span><button css={S.BottomBtn}>공지사항</button></span>

                </div>
                <div css={S.BottomBox}>
                    <button css={S.BottomBtn}>@ NAVER Corp.</button>

                </div>
            </div>
        </div>
    );
}

export default MainBottom;