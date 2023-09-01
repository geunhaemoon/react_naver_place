/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const BottomContainer = css`
    width: 100%;
    height: 120px;
    background-color: #f9f9f9;  
`;

export const BottomBigBox = css`
    width: 500px;
    margin: 0px auto;
    padding: 20px 0px;    
`;

export const BottomBox = css`
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
            border-left: 1px solid #dbdbdb;
            cursor: default;

        }
    }
`;


export const BottomBtn = css`
    background:none;
    border: none;
    color: #666;
    cursor: pointer;
`;