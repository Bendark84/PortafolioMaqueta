import React from 'react';
import "./Footer.css"



const Footer = () => {



    return (
        <footer className='footer'>
            <div className="footer-info">

                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, maxime!</p>
            </div>
            <div className="footer-contact">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, est.</p>
            </div>
            <div className="footer-sns">
                        <div className="desin-by">
                                <h2>Lorem ipsum dolor sit amet.</h2>
                        </div>
                        <div className="sns-links">
                            <a href="https://linkedin.com" target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-linkedin linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-twitter-square twitter"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-facebook facebook"></i>
                            </a>
                        </div>


            </div>
            
        </footer>
    );
};

export default Footer;