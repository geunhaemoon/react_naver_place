import React from 'react';
import MainTop from '../../components/MainTop/MainTop';
import MainCenter from '../../components/MainCenter/MainCenter';
import MainBottom from '../../components/MainBottom/MainBottom';
import TimeLineIntro from '../../components/MainCenter/CenterIntro/TimeLineIntro';

function TimeLine(props) {
    return (
        <>
            <MainTop/>
            <MainCenter>
                <TimeLineIntro />
            </MainCenter>
            <MainBottom/> 
        </>
    );
}

export default TimeLine;