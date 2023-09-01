import React from 'react';
import MainTop from '../../components/MainTop/MainTop';
import MainCenter from '../../components/MainCenter/MainCenter';
import MainBottom from '../../components/MainBottom/MainBottom';
import ReviewIntro from '../../components/MainCenter/CenterIntro/ReviewIntro';

function Review(props) {
    return (
        <>
            <MainTop />
            <MainCenter>
                <ReviewIntro/>
            </MainCenter>
            <MainBottom /> 
        </>
    );
}

export default Review;