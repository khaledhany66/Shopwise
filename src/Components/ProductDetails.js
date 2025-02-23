import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react"
function ProductDetails() {

    const { id } = useParams();
    const [fake, setFake] = useState();
    console.log(fake);
    useEffect(() => {
        fakestore();
    }, [])

    const fakestore = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setFake(jsonData);
    }
    return (
        <div>
            <hr />

            <div class="mfp-content"><div class="ajax_quick_view">
                <div class="row" style={{ width: "100%" }}>
                    <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <div class="product-image">
                            <div class="product_img_box">
                                <img id="product_img" src={fake?.image} alt="product_img1" />
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="pr_detail">
                            <div class="product_description">
                                <h4 class="product_title"><a href="#aa">{fake?.title}</a></h4>
                                <div class="product_price">
                                    <span class="price">{fake?.price}</span>
                                </div>
                                <div class="rating_wrap">
                                    <div class="rating">
                                        <div class="product_rate" style={{ width: "80%" }}></div>
                                    </div>
                                    <span class="rating_num">(21)</span>
                                </div>
                                <div class="pr_desc">
                                    <p>{fake?.description}</p>
                                </div>
                                <div class="product_sort_info">
                                    <ul>
                                        <li><i class="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
                                        <li><i class="linearicons-sync"></i> 30 Day Return Policy</li>
                                        <li><i class="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                                    </ul>
                                </div>
                                <div class="pr_switch_wrap">
                                    <span class="switch_lable">Color</span>
                                </div>
                                <div class="pr_switch_wrap">
                                    <span class="switch_lable">Size</span>
                                    <div class="product_size_switch">
                                        <span>xs</span>
                                        <span>s</span>
                                        <span>m</span>
                                        <span>l</span>
                                        <span>xl</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="cart_extra">
                                <div class="cart-product-quantity">
                                    <div class="quantity">
                                        <input type="button" value="-" class="minus" fdprocessedid="jpjqtu" />
                                        <input type="text" name="quantity" value="1" title="Qty" class="qty" size="4" fdprocessedid="pr60jr" />
                                        <input type="button" value="+" class="plus" fdprocessedid="ccbysu" />
                                    </div>
                                </div>
                                <div class="cart_btn">
                                    <button class="btn btn-fill-out btn-addtocart" type="button" fdprocessedid="t4o59v"><i class="icon-basket-loaded"></i> Add to cart</button>
                                    <a class="add_compare" href="#aa"><i class="icon-shuffle"></i></a>
                                    <a class="add_wishlist" href="#aa"><i class="icon-heart"></i></a>
                                </div>
                            </div>
                            <hr />
                            <ul class="product-meta">
                                <li>Category: <a href="#aa">{fake?.category}</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div >
    )

}
export default ProductDetails