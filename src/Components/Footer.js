import visa from "../images/visa.png"
import discover from "../images/discover.png"
import master_card from "../images/master_card.png"
import paypal from "../images/paypal.png"
import amarican_express from "../images/amarican_express.png"



function Footer() {
    return (
        <div>
            <footer className="footer_dark">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget">
                                    <h6 className="widget_title">Contact info</h6>
                                    <ul className="contact_info contact_info_light">
                                        <li>
                                            <i class="fa-solid fa-location-dot"></i>
                                            <p>123 Street, Old Trafford, NewYork, USA</p>
                                        </li>
                                        <li>
                                            <i class="fa-regular fa-envelope"></i>
                                            <a href="mailto:info@sitename.com">info@sitename.com</a>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-mobile-screen-button"></i>
                                            <p>+ 457 789 789 65</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <ul className="social_icons rounded_social">
                                        <li><a href="#aa" className="sc_facebook"><i className="ion-social-facebook"></i></a></li>
                                        <li><a href="#aa" className="sc_twitter"><i className="ion-social-twitter"></i></a></li>
                                        <li><a href="#aa" className="sc_google"><i className="ion-social-googleplus"></i></a></li>
                                        <li><a href="#aa" className="sc_youtube"><i className="ion-social-youtube-outline"></i></a></li>
                                        <li><a href="#aa" className="sc_instagram"><i className="ion-social-instagram-outline"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="widget">
                                    <h6 className="widget_title">Useful Links</h6>
                                    <ul className="widget_links">
                                        <li><a href="#aa">About Us</a></li>
                                        <li><a href="#aa">FAQ</a></li>
                                        <li><a href="#aa">Location</a></li>
                                        <li><a href="#aa">Affiliates</a></li>
                                        <li><a href="#aa">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="widget">
                                    <h6 className="widget_title">My Account</h6>
                                    <ul className="widget_links">
                                        <li><a href="#aa">My Account</a></li>
                                        <li><a href="#aa">Discount</a></li>
                                        <li><a href="#aa">Returns</a></li>
                                        <li><a href="#aa">Orders History</a></li>
                                        <li><a href="#aa">Order Tracking</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="widget">
                                    <h6 className="widget_title">Subscribe Our Newsletter</h6>
                                    <p>If you want to get an email from us every time we have a new special offer, then sign up
                                        here!</p>
                                    <div className="newsletter_form rounded_input">
                                        <form>
                                            <input type="text" required="" className="form-control"
                                                placeholder="Enter Email Address" />
                                            <button type="submit" className="btn-send" name="submit" value="Submit"><i
                                                className="icon-envelope-letter"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_footer border-top-tran">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb-md-0 text-center text-md-start">© 2020 All Rights Reserved by Bestwebcreator</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="footer_payment text-center text-md-end">
                                    <li><a href="#aa"><img src={visa} alt="visa" /></a></li>
                                    <li><a href="#aa"><img src={discover} alt="discover" /></a></li>
                                    <li><a href="#aa"><img src={master_card} alt="master_card" /></a></li>
                                    <li><a href="#aa"><img src={paypal} alt="paypal" /></a></li>
                                    <li><a href="#aa"><img src={amarican_express} alt="amarican_express" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
