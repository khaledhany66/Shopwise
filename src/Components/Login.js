function Login() {
    return (
        <div>

            <div class="breadcrumb_section bg_gray page-title-mini">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="page-title">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ol class="breadcrumb justify-content-md-end">
                                <li class="breadcrumb-item"><a href="a">Home</a></li><i class="fa-solid fa-arrow-right" style={{ margin: "5px", bottom: "-3px" }}></i>
                                <li class="breadcrumb-item"><a href="a">Pages</a></li><i class="fa-solid fa-arrow-right" style={{ margin: "5px", bottom: "-3px" }}></i>
                                <li class="breadcrumb-item active">Login</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>



            <div class="main_content">


                <div class="login_register_wrap section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-md-10">
                                <div class="login_wrap">
                                    <div class="padding_eight_all bg-white">
                                        <div class="heading_s1">
                                            <h3>Login</h3>
                                        </div>
                                        <form method="post">
                                            <div class="form-group mb-3">
                                                <input type="text" required="" class="form-control" name="email"
                                                    placeholder="Your Email" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input class="form-control" required="" type="password" name="password"
                                                    placeholder="Password" />
                                            </div>
                                            <div class="login_footer form-group mb-3">
                                                <div class="chek-form">
                                                    <div class="custome-checkbox">
                                                        <input class="form-check-input" type="checkbox" name="checkbox"
                                                            id="exampleCheckbox1" value="" />
                                                        <label class="form-check-label" for="exampleCheckbox1"><span>Remember
                                                            me</span></label>
                                                    </div>
                                                </div>
                                                <a href="#">Forgot password?</a>
                                            </div>
                                            <div class="form-group mb-3">
                                                <button type="submit" class="btn btn-fill-out btn-block" name="login">Log
                                                    in</button>
                                            </div>
                                        </form>
                                        <div class="different_login">
                                            <span> or</span>
                                        </div>
                                        <ul class="btn-login list_none text-center">
                                            <li><a href="#aa" class="btn btn-facebook"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                                            <li><a href="#aa" class="btn btn-google"><i class="fa-brands fa-google"></i>Google</a></li>
                                        </ul>
                                        <div class="form-note text-center">Don't Have an Account? <a href="signup.html">Sign up
                                            now</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="section bg_default small_pt small_pb">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="heading_s1 mb-md-0 heading_light">
                                    <h3>Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="newsletter_form">
                                    <form>
                                        <input type="text" required="" class="form-control rounded-0"
                                            placeholder="Enter Email Address" />
                                        <button type="submit" class="btn btn-dark rounded-0" name="submit"
                                            value="Submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login;
