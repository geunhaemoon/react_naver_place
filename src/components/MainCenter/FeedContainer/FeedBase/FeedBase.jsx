import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./FeedBaseStyle"
import img02 from "./img/img02.jpg"
import img03 from "./img/img03.jpg"
import { BsThreeDotsVertical, BsEmojiSmile, BsStar } from "react-icons/bs";



function FeedBase(props) {
    return (
        <div css={S.FeedBase}>
            <div css={S.FeedBox} >
                {/* 피드 프로필 */}
                <div css={S.FeedTextHeader}>
                    <div css={S.SubProfile}>
                        <div css={S.SubProfileImgBox}>
                            <img css={S.SubProfileImgBox2} src="https://littledeep.com/wp-content/uploads/2020/09/people-icon-style.png" />                                           
                        </div>
                        <div css={S.ProfileTextBox}>
                            <div css={S.ProfileName}>문근해</div>
                            <div css={S.ProfileSubText}>
                                <span>사진리뷰 00</span>
                                <span>팔로워 00</span>
                            </div>
                        </div>
                    </div>
                    <div css={S.FollowBox}>
                        <button css={S.FollowBtn}>팔로우</button>
                        <BsThreeDotsVertical css={S.FollowBtnSub} />                        
                    </div>
                </div>
                {/* 피드 이미지 */}
                <div css={S.FeedImgBox}>
                    <img  css={S.FeedImg} src={img02} alt="img02" />
                    <img css={S.FeedImg} src={img03} alt="img03" />
                </div>
                {/* 피드 글 */}
                <div css={S.FeedTextBox}>
                    <div css={S.FeedText}>
                        벅차고 힘든 세상... 아자 아자 화이팅... <br/>
                        힘들어도... 슬퍼도... 나는... 안 울어...

                    </div>
                    <div css={S.FeedTagBtnBox}>
                        <button  css={S.FeedTagBtn}>😂울지말자</button>
                        <button  css={S.FeedTagBtn}>😢이겨내자</button>
                        <button  css={S.FeedTagBtn}>😭아자아자화이팅</button>
                    </div>
                    <div css={S.SubTextBox}>
                        <div css={S.EmojiBox}>
                            <BsEmojiSmile css={S.Emoji} />
                            <span css={S.EmojiText}>반응 남기기</span>
                        </div>
                        <div css={S.DateText}>
                            0801 방문
                        </div>
                    </div>
                </div>
                {/* 피드위치 */}
                <div css={S.LocationBox}>
                    <div css={S.LocationL}>
                        <h1>대한민국</h1>
                        <h2>삶, 그것에 대하여</h2>
                    </div>
                    <div css={S.LocationR}>
                        <span><BsStar /></span> 
                        <div>저장</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedBase;