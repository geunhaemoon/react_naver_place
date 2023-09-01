import React from 'react';
import MainTop from '../../components/MainTop/MainTop';
import MainCenter from '../../components/MainCenter/MainCenter';
import MainBottom from '../../components/MainBottom/MainBottom';
import FeedBase from '../../components/MainCenter/FeedContainer/FeedBase/FeedBase';
import FeedHeader from '../../components/MainCenter/FeedContainer/FeedHeader/FeedHeader';

function Feed(props) {
    return (
        <>
            <MainTop/>
            <MainCenter>
                <FeedHeader />
                <FeedBase />
            </MainCenter>
            <MainBottom /> 
        </>
    );
}

export default Feed;