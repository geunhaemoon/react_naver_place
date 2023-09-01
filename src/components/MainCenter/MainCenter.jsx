import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./MainCenterStyle"


function MainCenter({children}) {
    return (
        <div css={S.CenterContainer}>
            <div>
                {children}   
            </div>
        </div>
    );
}   

export default MainCenter;