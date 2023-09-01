/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const IntroContainer = css`
    width: 720px;
    height: 440px;
    background-color: #0aadaa;
    margin: 30px auto;
    border-radius: 15px;
    padding-top: 30px;
`;

export const ReviewContainer = css`
    background-color: #717cea;
`;

export const IntroBox = css`
    width: 650px;
    height: 380px;
    margin: auto;
    background:none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

export const IntroText1 = css`
    font-size: 20px;
    font-weight:300;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px 0px;
    & > h1 {
        margin-top: 7px;
    }
`;

export const PointText = css`
    font-weight: 700;
`;

export const IntroText2 = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3px 0px 10px 0px;
    color: #bbedee;
    font-size: 15px;

    `;

export const TimeLineImg = css`
    width: 250px;
    height: 170px;
    margin: 10px;
`;

export const ReviewBtn = css`
    cursor: pointer;
    width: 145px;
    height: 50px;
    margin-top: 20px;
    background: none;
    border-radius: 25px;
    border: 0.5px solid #fff;
    color: #fff;
`;

export const BtnText = css`
    font-size: 17px;
`;