import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from '../helpers/auth';
import { isAuth } from '../helpers/auth';
import { useState } from 'react';
import Footer from '../assests/Footer';
import '../assests/styles.css';
import '../assests/getstarted.css';
import { ToastContainer, toast } from 'react-toastify';
import img from '../assests/images/learnmore.png';

function Learnmore({ history }) {


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
                <div className="main-win">
                    <div className="sub-win">
                        <div className="img">
                          <img src={img} alt="image" />
                        </div>
                        <div className="text-part">
                            <h1>Learn More</h1>
                            <p className="main-win-sub-win-para1">Share personal info so we can verify your identity and tailor your advice.</p>
                            <p className="main-win-sub-win-para2">Choose your first account to grow your cash or automate your investments.</p>
                            <p className="main-win-sub-win-para3">Fund with ease. Get started with $1 for cash and $500 for investment accounts.</p>
                            <a href="#" className="nest-btn">Open a Nest Account</a>
                            <a href="#" className="planning-btn">Explore our free planning website</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
  );
}

export default Learnmore;