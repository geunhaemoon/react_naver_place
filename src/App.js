import logo from './logo.svg';
import './App.css';
/** @jsxImportSource @emotion/react */
import { GSCommon } from "./styles/common";
import { Global, css } from "@emotion/react";
import { Reset } from 'styled-reset';
import { Route, Routes, Navigate } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import TimeLine from './pages/TimeLine/TimeLine';
import Review from './pages/Review/Review';
import MainTop from './components/MainTop/MainTop';
import MainCenter from './components/MainCenter/MainCenter';
import MainBottom from './components/MainBottom/MainBottom';

function App() {
  return (
    <>
      <Reset />

      <Global styles={GSCommon} />
      <div>
        <Routes >
          <Route path="/" element={<Navigate to="/feed" />} />

          <Route  path="/feed" element={<Feed/>} />
          <Route  path="/timeline" element={<TimeLine />} />
          <Route  path="/review" element={<Review/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
