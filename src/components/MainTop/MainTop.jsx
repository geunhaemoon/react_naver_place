import React from 'react';
import { useLocation,useNavigate  } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SiNaver } from "react-icons/si";
import { BsList, BsTicket,BsChevronCompactRight,BsPencilFill, BsCheck2Circle } from "react-icons/bs";


const TopContainer = css`
    width: 100%;
    height: 260px;
    background-color: #06b495;
`;

/* 배너 */
const TopBanner = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 49px;
    border-bottom: 1px solid #219f7d;
    padding: 4px 15px;
`;

const BannerBtn = css`
    cursor: pointer;
    background: none;
    border: none;
    height: 40px;
    color: #fff;
    font-size: 18px;
    justify-content: center;
    align-items: center;
`;

const BannerBox = css`
    display: flex;
`;

const BannerIconBox = css`
    width: 21px;
    height: 21px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    margin-right: 10px;
`;

const BannerIcon = css`
    font-size: 11px;
    background-color: #fff;
    color: #06b495 ;
`;

const BannerText = css`
    font-size: 15px;
    font-weight: 500;

`;

const IconBtn = css`
    font-size: 38px;
`;

const IconBtnContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CuponText = css`
    position: absolute;
    font-size: 11px;
    font-weight: 100;

`;

/*프로필*/
const TopProfile = css`
    height: 170px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const ProfileContainer = css`
    height: 100%;
    width: 400px;
    padding: 5px 20px 0px 20px;
    margin: 0px auto;
`;

const ProfileBox = css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    padding-left: 25px;

`;

const ProfileImg = css`
    cursor: pointer;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #fff;
`;

const ProfileName = css`
    cursor: pointer;
    align-items: center;
    background: none;
    border: none;
    color:#fff;
    margin: 30px;
    font-size: 17px;
    font-weight: 500;

`;

const ProfileNameIcon = css`
    font-size: 15px;
    margin-left: 5px;
`;


const ProfileBtnBox = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding-top: 8px;
`;

const ProfileBtn = css` 
    cursor: pointer;
    border: none;
    border-radius: 8px;
    margin: 4px;
    height: 39px;
    width: 102px;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background-color: #0cc5a4;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ReviewBtn = css`
    width: 210px;
`;

const ProfileBtnIcon = css`
    font-size: 19px;
    font-weight: bolder;
`;

const ProfileBtnText = css`
    margin: 0px 3px;
`;



/*메뉴*/
const TopMenu = css`
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const MenuList = css`
    margin: 0px auto;
    height: 100%;
`;

const MenuBtn = css`   
    cursor: pointer;
    height: 100%;
    background: none;
    font-size: 17px;
    font-weight: 400;
    color: #ffffffb3;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 5px solid #06b495;
    
    margin: 0px 6px;
    &.selected {
        color: #fff;
        font-weight: 600;
        padding-bottom: 4px;
        border-bottom: 5px solid #fff;
    }
    &:active{
        color:#fff;
        font-weight:600;
        padding-bottom: 4px;
        border-bottom: 5px solid #fff;
    }
`;




function MainTop(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const isCurrentPage = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <>
            <div css={TopContainer}> 
                
                {/* 배너 */}
                <div css={TopBanner}>
                    <button css={BannerBtn}>
                        <div css={BannerBox}>
                            <div css={BannerIconBox}>
                                <SiNaver css={BannerIcon} /> 
                            </div>
                            <span css={BannerText}>MY 플레이스</span>
                        </div>
                    </button>
                    <div>
                        <button css={BannerBtn}>
                            <div css={IconBtnContainer}>
                                <BsTicket css={IconBtn} /><div css={CuponText}>쿠폰</div>
                            </div>
                        </button>
                        <button css={BannerBtn}><BsList css={IconBtn}/> </button>
                    </div>
                </div>

                {/* 프로필 */}
                <div css={TopProfile}>
                    <div css={ProfileContainer}>
                        <div css={ProfileBox}>
                            <div css={ProfileImg}> </div>
                            <button css={ProfileName}>
                                로그인하기
                                <BsChevronCompactRight css={ProfileNameIcon} />
                            </button>
                        </div>
                        <div css={ProfileBtnBox}>
                            <button css={[ProfileBtn, ReviewBtn]}>
                                <BsPencilFill css={ProfileBtnIcon} />
                                <span css={ProfileBtnText}>리뷰쓰기</span>                                
                            </button>
                            <button css={ProfileBtn}>
                                <BsCheck2Circle css={ProfileBtnIcon}/> 
                                <span css={ProfileBtnText}>미션</span>                                
                            </button>
                        </div>
                    </div>

                </div>

                {/* 메뉴 */}
                <div css={TopMenu}>
                    <div css={MenuList}>
                        <button css={[MenuBtn, isCurrentPage('/feed') ? 'selected' : '']}
                            onClick={() => navigate('/feed')}>피드</button>
                        <button css={[MenuBtn, isCurrentPage('/timeline') ? 'selected' : '']}
                            onClick={() => navigate('/timeline')}>타임라인</button>
                        <button css={[MenuBtn, isCurrentPage('/review') ? 'selected' : '']}
                            onClick={() => navigate('/review')}>리뷰</button>
                        <button css={MenuBtn}>예약·주문</button>
                        <button css={MenuBtn}>저장</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MainTop;