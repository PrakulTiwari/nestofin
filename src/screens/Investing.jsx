import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from '../helpers/auth';
import { isAuth } from '../helpers/auth';
import { useState } from 'react';
import Footer from '../assests/Footer';
import '../assests/styles.css';
import '../assests/getstarted.css';
import '../assests/investing.css';
import { ToastContainer, toast } from 'react-toastify';
import img from '../assests/images/yolk.png';

function Investing({ history }) {

    const [navStyle, setNav] = useState({
    });
    //when burger is clciked
    const burger = () => {
      setNav({
        display:'flex',
        position:'fixed',
        transform:'translateX(-100vw)'
      });
    };
    //when cross is clicked
    const cross = () => {
      setNav({
        display:'none',
        position:'unset',
        transform:'translateX(0vw)'
      });
    };
    const resizedHandler = ()=>{
      if(window.innerWidth>780){
        setNav({
          display:'block',
          position:'initial',
          transform:'translateX(0vw)'
        }); 
      }
    }
    window.addEventListener('resize', resizedHandler);

  return (
            <div className="getstarted-page" id='top'>
                <div className="gnav">
                    <Link to='/'><h1>NESTO/Fin.</h1></Link>
                    <ul style={navStyle}>
                        <li className="others"><a href="#">Help Center</a></li>
                        {!isAuth() && <li className="others"><a href="/login">Login</a></li>}
                        {!isAuth() && <li className="others"><a href="/register">Sign Up</a></li>}
                        {isAuth() && <li onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                    //   history.push('/login');
                    });
                  }} className="others"><a href="#">Sign Out</a></li>}
                        <div className="cross" onClick={cross}>X</div>
                    </ul>
                    <div className="hamburger" onClick={burger}>
                        <div className="bun"></div>
                        <div className="bun"></div>
                        <div className="bun"></div>
                    </div>
                </div>
                <ToastContainer />
                <div className="content">
                  <div className="yolklabel">
                    <div className="yolk">
                      <img src={img} alt=""/>
                      <h1>10</h1>
                    </div>
                    <span>Yolk Count</span>
                  </div>

                  <div className='userdetail'>
                    <div className="customer_details">
                      <div className="detail">
                        <div className="label">Name :</div>
                        <div className="value" id="name">Aditya Chhabra</div>
                      </div>
                      <div className="detail">
                        <div className="label">Email :</div>
                        <div className="value" id="email">adichhabra@gmail.com</div>
                      </div>
                      <div className="detail">
                        <div className="label">Contact Number :</div>
                        <div className="value" id="number">9654723472</div>
                      </div>
                    </div>
                    <div className="totalmoney">
                      <span id="money">2,000</span> Rs.
                    </div>
                  </div>

                </div>
                <div className="graphcontent">
                  <div className="title">
                    PROFIT ANALYSIS
                  </div>
                  <div className="profitlossdetail">
                      <div className="graph"></div>
                      <div className="durationleft">
                        <i className="fa fa-clock-o" aria-hidden="true"></i> 3 MONTHS
                      </div>
                    </div>
                </div>
                <Footer />
            </div>
  );
}

export default Investing;