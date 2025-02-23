import { Link } from 'react-router-dom';


import furniture_banner1 from "../images/furniture_banner1.jpg"
import furniture_banner2 from "../images/furniture_banner2.jpg"
import React, { useState, useEffect } from "react"


function Home() {
    const [fake, setFake] = useState([]);
    useEffect(() => {
        fakestore();
    }, [])

    const fakestore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        //.console.log(jsonData);
        setFake(jsonData);
    }


    return (


        <div>

            <div className="banner_section slide_wrap shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active background_bg" >
                            <div className="banner_slide_content banner_content_inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div className="banner_content2">
                                                <h6 className="mb-2 mb-sm-3 staggered-animation text-uppercase"
                                                    data-animation="fadeInDown" data-animation-delay="0.2s">New Tranding</h6>
                                                <h2 className="staggered-animation" data-animation="fadeInDown"
                                                    data-animation-delay="0.3s">Sofa Collection</h2>
                                                <p className="staggered-animation" data-animation="fadeInUp"
                                                    data-animation-delay="0.4s">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id
                                                    varius nunc.</p>
                                                <a className="btn btn-line-fill btn-radius staggered-animation text-uppercase"
                                                    href="shop-left-sidebar.html" data-animation="fadeInUp"
                                                    data-animation-delay="0.5s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" >
                            <div className="banner_slide_content banner_content_inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div className="banner_content2">
                                                <h5 className="mb-2 mb-sm-3 staggered-animation font-weight-light"
                                                    data-animation="fadeInDown" data-animation-delay="0.2s">Get up to 50% off
                                                    Today Only!</h5>
                                                <h2 className="staggered-animation" data-animation="fadeInDown"
                                                    data-animation-delay="0.3s">Wooden Chair Collection</h2>
                                                <a className="btn btn-border-fill btn-radius staggered-animation text-uppercase"
                                                    href="shop-left-sidebar.html" data-animation="fadeInUp"
                                                    data-animation-delay="0.4s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" >
                            <div className="banner_slide_content banner_content_inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-8 col-sm-9 col-10">
                                            <div className="banner_content2">
                                                <h5 className="mb-2 mb-sm-3 staggered-animation font-weight-light"
                                                    data-animation="fadeInDown" data-animation-delay="0.2s">Taking your Viewing
                                                    Experience to Next Level</h5>
                                                <h2 className="staggered-animation" data-animation="fadeInDown"
                                                    data-animation-delay="0.3s">Living Room Collection</h2>
                                                <a className="btn btn-border-fill btn-radius staggered-animation text-uppercase"
                                                    href="shop-left-sidebar.html" data-animation="fadeInUp"
                                                    data-animation-delay="0.4s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators indicators_style2">
                        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </div>

            <div className="main_content">
                <div className="section small_pb">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-3 col-sm-6">
                                <div className="icon_box icon_box_style3">
                                    <div className="icon">
                                        <i className="flaticon-shipped"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h6>Free Delivery</h6>
                                        <p>Worldwide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="icon_box icon_box_style3">
                                    <div className="icon">
                                        <i className="flaticon-money-back"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h6>Money Returns</h6>
                                        <p>30 Days money return</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="icon_box icon_box_style3">
                                    <div className="icon">
                                        <i className="flaticon-support"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h6>27/4 Online Support</h6>
                                        <p>Customer Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="icon_box icon_box_style3">
                                    <div className="icon">
                                        <i className="flaticon-lock"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h6>Payment Security</h6>
                                        <p>Safe Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="section small_pt pb_20">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s3 text-center">
                                    <h2>Exclusive Products</h2>
                                </div>
                                <div className="small_divider clearfix"></div>
                            </div>
                        </div>

                        <div className="row shop_container">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    fake.map(element => {

                                        return (
                                            <div class="col">
                                                <div class="card">
                                                    <Link to={`Product/${element.id}`}>
                                                        <img src={element.image} class="card-img-top" alt="..." />
                                                    </Link>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{element.title}</h5>
                                                        <p class="card-text">{element.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section pb_20 small_pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="single_banner">
                                    <img src={furniture_banner1} alt="furniture_banner1" />
                                    <div className="fb_info">
                                        <h5 className="single_bn_title1">Super Sale</h5>
                                        <h3 className="single_bn_title">New Collection</h3>
                                        <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="single_banner">
                                    <img src={furniture_banner2} alt="furniture_banner2" />
                                    <div className="fb_info2">
                                        <h3 className="single_bn_title">New Season</h3>
                                        <h4 className="single_bn_title1">Sale 40% Off</h4>
                                        <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Home;
