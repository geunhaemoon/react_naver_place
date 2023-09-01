/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const FeedBase = css`
    width: 100%;
    margin-bottom: 10px;
    background-color: #fff;
`;

export const FeedBox = css`
    margin: 0px auto;
    width: 680px;
    padding: 20px;
`;

export const FeedTextHeader = css`
    display: flex;
    align-items: center;                                                                                                                                                                                                      
    justify-content: space-between;

`;

export const SubProfile = css`
    display: flex;
    height: 65px;
    `;

export const SubProfileImgBox = css`
    cursor: pointer;
    height: 63px;
    width: 63px;
    overflow: hidden;
    border: 1px solid #999;
    border-radius: 50%;
    `;

export const SubProfileImgBox2 = css`
    cursor: pointer;
    height: 63px;
    width: 63px;
`;

export const ProfileTextBox = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 10px;
`;

export const ProfileName = css`
    font-size: 18px;
    font-weight: 700;
    margin: 5px 0px;
    color: #242424;
`;

export const ProfileSubText = css`
    font-size: 12px;
    color: #8f8f8f;
    margin: 5px 0px;
        display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px auto;
    & > span {
        display: flex;
        align-items: center;
        &:not(:nth-last-child(1))::after {
            content: "";
            display: block;
            margin: 0px 10px;
            height: 13px;
            border-left: 1px dotted #dbdbdb;
            cursor: default;
        }
    }

`;


export const FollowBox = css`

    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const FollowBtn = css`
    cursor: pointer;
    background-color: #eff6fe;
    color: #287cff;
    border: none;
    border-radius: 5px;
    width: 70px;
    height: 30px;
    margin: 0px 5px;
    font-weight: bolder;
`;

export const FollowBtnSub = css`
    cursor: pointer;
    background: none;
    border: none;
    color: #ddd;

`;

export const FeedImgBox = css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    margin: 10px 0px;


`;

export const FeedImg = css`
    box-sizing: border-box;
    width: 52%;
    height: 100%;
    padding: 0px 2px;
    
`;

export const FeedTextBox = css`
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
`;

export const FeedText = css`
    margin: 5px 0px;
`;

export const FeedTagBtnBox = css`
    margin: 5px 0px;
`;

export const FeedTagBtn = css`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 3px;
`;

export const SubTextBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const EmojiBox = css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Emoji = css`
    margin: 10px 5px;
    font-size: 23px;
`;

export const EmojiText = css`
    font-size: 13px;
`;

export const DateText = css`
    font-size: 10px;
    color: #aaa;
`;

export const LocationBox = css`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 20px;
`;

export const LocationL = css`

    & > h1 {
        cursor: pointer;
        font-size: 17px;
        font-weight: 700;
        margin: 5px 0px;
    }
    & > h2 {
    cursor: pointer;
        font-size: 13px;
        margin: 5px 0px;
        color: #aaa;
    }
`;

export const LocationR = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #aaa;
    margin-right: 8px;

    & > span {
        cursor: pointer;
        font-size: 20px;
    }

    & > div {
        margin-top: 8px;
        font-size: 13px;
    }
`;