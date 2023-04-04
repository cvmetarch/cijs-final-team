import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Camnangkienthuc from './pages/camnangkienthuc';
import Saleoff from './pages/saleoff';
import Bosuutap from './pages/bosuutap';
import Sanphammoi from './pages/sanphammoi';
import Trangsuc from './pages/trangsuc';
import Quatang from './pages/quatang';
import SignUp from './pages/signup';

function App() {
  document.title = 'Cyber Silver - ' + 'Bạc và Vàng phong thủy';
  
  return (
  <div className="App">


      <div classname="app-layout">
        <div classname="head-bar">
          <header classname="upper-bar">                
            <div classname="logo-img">
              <a href="./home.html">                        
                <img src="./images/logoweb-1024x269.png" style={{alignSelf: 'center', display: 'block', width: '100%', height: '100%', objectFit: 'cover'}} />                            
              </a>
            </div>   
            <div classname="search-box">
              <div classname="sb">
                <input type="text" placeholder="Tìm kiếm..." />
                <a href="./home.html"><i classname="bi bi-search" /></a>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', width: '35%', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <h5 classname="top-men" style={{flexShrink: 0}}>VỀ CHÚNG TÔI</h5>
                <h5 classname="top-men" style={{flexShrink: 0}}>098.63.63131</h5>
              </div>     
              <a href="./cart.html">
                <div classname="cart">
                  <i classname="bi bi-cart2" />
                  <div id="cartAmount" classname="cartAmount">0</div>
                </div>
              </a>
            </div>
          </header>
          
          <nav classname="lower-bar">
            <div classname="dropdown">
              <button classname="dropbtn">
                <a href="./home.html">
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>                                                                                            
                    <h5 classname="top-men">CẨM NANG KIẾN THỨC</h5>
                    <img width="30px" src="./images/shui-icon.gif" />
                  </div>
                </a>
              </button>
              <div classname="dropdown-content">
                <a href="./home.html">KIẾN THỨC PHONG THỦY</a>
                <a href="./home.html">KIẾN THỨC PHẬT GIÁO</a>
                <a href="./home.html">KIẾN THỨC VỀ TRANG SỨC</a>
                <a href="./home.html">TIN TỨC</a>
              </div>
            </div>
            <a href="./product.html">
              <div><h5 classname="top-men">SALE OFF</h5></div>
            </a>
            <a href="./product.html"><div><h5 classname="top-men">BỘ SƯU TẬP</h5></div></a>
            <a href="./product.html"><div><h5 classname="top-men">SẢN PHẨM MỚI</h5></div></a>
            <div classname="dropdown">
              <button classname="dropbtn">
                <a href="./product.html">
                  <div>
                    <h5 classname="top-men">TRANG SỨC</h5>
                  </div>
                </a>
              </button>
              <div classname="dropdown-content">
                <a href="./product.html">TRANG SỨC BẠC THÁI NAM</a>
                <a href="./product.html">TRANG SỨC BẠC THÁI NỮ</a>
                <a href="./product.html">TRANG SỨC ĐÁ QUÝ</a>
                <a href="./product.html">TRANG SỨC BẠC TA</a>
              </div>
            </div>
            <div classname="dropdown">
              <button classname="dropbtn">
                <a href="./product.html">
                  <div>
                    <h5 classname="top-men">QUÀ TẶNG</h5>
                  </div>
                </a>
              </button>
              <div classname="dropdown-content">
                <a href="./product.html">QUÀ TẶNG DOANH NHÂN </a>
                <a href="./product.html">QUÀ TẶNG LỄ TẾT</a>
                <a href="./product.html">QUÀ TẶNG TÌNH YÊU</a>
              </div>
            </div>
          </nav>
        </div>
        <Router>
            <Navbar/>
            <Routes>
              <Route exact path="/" exact element={<Home />} />
              <Route path="/camnangkienthuc" element={<Camnangkienthuc/>}/>
              <Route path="/saleoff" element={<Saleoff/>}/>
              <Route path="/bosuutap" element={<Bosuutap/>}/>
              <Route path="/sanphammoi" element={<Sanphammoi/>}/>
              <Route path="/trangsuc" element={<Trangsuc/>}/>
              <Route path="/quatang" element={<Quatang/>}/>
              <Route path='/sign-up' element={<SignUp/>} />
            </Routes>
          </Router>
        <div classname="head-spacing" />
       
        <section classname="bottom-container">
          <div classname="prefooter">
            <nav>
              <h6>FANPAGE</h6>
              <div classname="ban-3">
                <div classname="fb-page" data-href="https://www.facebook.com/nguyenhuuhongky" data-tabs="timeline" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                  <blockquote cite="https://www.facebook.com/nguyenhuuhongky" classname="fb-xfbml-parse-ignore">
                    <a>Cyber Silver - Bạc thái, Vàng phong thuỷ</a>
                  </blockquote>
                </div>
              </div>
            </nav>
            <nav>
              <h6>YOUTUBE</h6>
              <div classname="ban-3">
                <a href="./home.html">
                  <img width="100%" height="100%" src="./images/VCB-OUTRO-FN.00_00_00_00.Still001-1024x576.png" alt="" sizes="(max-width: 1020px) 100vw, 1020px" />
                </a>
              </div>
            </nav>
            <nav>
              <h6>SHOPEE</h6>
              <div classname="ban-3">
                <a href="./home.html">
                  <img width="100%" height="100%" src="./images/banner-shopep-vcb-1024x528.png" alt="" sizes="(max-width: 1020px) 100vw, 1020px" />
                </a>
              </div>
            </nav>
          </div>
          <header classname="footer">
            <ul style={{listStyleType: 'none'}}>
              <li>
                <a href="./home.html">
                  <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>
                </a>
              </li>
              <li>
                <a href="./home.html" style={{color: 'red'}}>
                  Hotline mua hàng 1: <strong>098 43 20841</strong>
                </a>
              </li>
              <li>
                <a href="./home.html" style={{color: 'red'}}>
                  Hotline mua hàng 2: <strong>098 63 63131</strong>
                </a>
              </li>
              <li>
                <a>
                  (Tư vẫn miễn phí từ 8h30-22h các ngày trong tuần)
                </a>
              </li>
              <li>
                <a href="./home.html">HỖ TRỢ KHÁCH HÀNG</a>
              </li>
              <li>
                <a href="./home.html">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="./home.html">
                  Chính sách đổi và bảo hành
                </a>
              </li>
              <li>
                <a href="./home.html">
                  Chính sách vận chuyển &amp; thanh toán
                </a>
              </li>
              <li>
                <a href="./home.html">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
            <ul style={{listStyleType: 'none'}}>
              <li>
                <a href="./home.html">
                  <strong>© CÔNG TY TNHH TRANG SỨC CYBER SILVER</strong>
                </a>
              </li>
              <li>
                <a href="./home.html">
                  Showroom:
                  <br />12A Nhiêu Tứ - Phường 7 - Phú Nhuận - TP HCM
                </a>
              </li>
              <li>
                <a href="./home.html">
                  Tel: 098.63.63131
                </a>
              </li>
              <li>
                <a href="./home.html"> <span classname="elementor-icon-list-text">Email: chanhvokts@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="./home.html">
                  <span>Đã chứng nhận đăng ký kinh doanh: 0107994675</span>
                </a>
              </li>
            </ul>
            <ul style={{listStyleType: 'none'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img width={170} height src="./images/logoSaleNoti.png" alt="" sizes="(max-width: 600px) 100vw, 600px" />
                </div>
              </li>
            </ul>
          </header>
        </section>
      </div>     
    </div>
  );
}

export default App;
