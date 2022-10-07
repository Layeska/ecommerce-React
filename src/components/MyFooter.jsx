import React from 'react'

const MyFooter = () => {
    return (
        <footer id='footer' className='footer-1'>
            <div className='main-footer widgets-dark typo-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget subscribe no-box'>
                                <h5 className='widget-title'>Shoppad Store<span></span></h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa nam incidunt aliquam optio.</p>
                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget no-box'>
                                <h5 className='widget-title'>Information<span></span></h5>
                                <ul className='thumbnail-widget'>
                                    <li> <div  className='thumb-content'><a href="#.">Home</a></div> </li>
                                    <li> <div  className='thumb-content'><a href="#.">Products</a></div> </li>
                                    <li> <div  className='thumb-content'><a href="#.">Favorities</a></div> </li>
                                    <li> <div  className='thumb-content'><a href="#.">Buy</a></div> </li>
                                    <li> <div  className='thumb-content'><a href="#.">About As</a></div> </li>
                                    <li> <div  className='thumb-content'><a href="#.">Secure Payment</a></div> </li>
                                    <li> <div  className='thumb-content'><a href="#.">contact Us</a></div> </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget no-box'>
                                <h5 className='widget-title'>Get Started<span></span></h5>
                                <p>Get access to your full Training and Marketing Suite.</p>
                                <a className='btn' href='https://bit.ly/3m9avif' target='_blank'>Log In</a>
                            </div>
                        </div>

                        <div className='col-xs-12 col-sm-6 col-md-3'>
                            <div className='widget no-box'>
                                <h5 className='widget-title'>Contact Us<span></span></h5>
                                <p> <b>Head Office:</b> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD</p>
                                <p> <b>Telephone: </b> +017 4323 234500</p>
                                <p><a href='#' title='emailShoppad'>info@shoppad.com.ni</a></p>
                                <ul className='social-footer2'>
                                    <li className=''><a title='Youtube' target='_blank' href='https://bit.ly/3m9avif'><i className='fa-brands fa-youtube'></i></a></li>
                                    <li className=''><a href='https://www.facebook.com/' target='_blank' title='Facebook'><i className='fa-brands fa-square-facebook'></i></a></li>
                                    <li className=''><a href='https://twitter.com' target='_blank' title='Twitter'><i className='fa-brands fa-twitter'></i></a></li>
                                    <li className=''><a title='Instagram' target='_blank' href='https://www.instagram.com/'><i className='fa-brands fa-instagram'></i></a></li>
                                    <li className=''><a title='Linkeln' target='_blank' href='https://www.linkeln.com/'><i className="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <img src="/src/assets/payment.png" alt=""/>
                </center>
            </div>

            <div className='footer-copyright'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <p>Copyright Shoppad © 2022. All rights reserved Ana Juarez</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default MyFooter