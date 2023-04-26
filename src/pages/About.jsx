import React from 'react';

const About = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className='container__about'>
        <h2>關於此網站</h2>
        <div className='content'>
          <h3>Home</h3>
          <ul className='about__list'>
            <li className='about__item'>
              <strong>Search bar</strong>
              <br />
              輸入要找尋的照片種類並按下搜尋按鈕「Search」後，會加載出部分搜尋結果於畫面上（最多15張）
            </li>
            <li className='about__item'>
              <strong>Load More</strong>
              <br />
              按下後，當搜尋結果有更多圖片時，會再加載出一部分結果（最多15張）於畫面上
            </li>
            <li className='about__item'>
              <strong>Image</strong>
              <br />
              每張圖片的左上角文字為該圖的拍攝者名字
              <br />
              而按下Download處的連結時，會被帶到新的頁面去下載圖片
            </li>
          </ul>
          <hr />
          <h3>About</h3>
          <ul className='about__list'>
            <li className='about__item'>
              圖片、API來源為
              <a
                className='about__link'
                href='https://www.pexels.com/zh-tw/'
                target='blank'
              >
                Pexels
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
