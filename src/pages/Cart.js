import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
	return (
		<React.Fragment>
			<header id="header">
				<div className="header_top">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="contactinfo">
									<ul className="nav nav-pills">
										<li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
										<li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="social-icons pull-right">
									<ul className="nav navbar-nav">
										<li><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
										<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="header-middle">
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="logo pull-left">
									<Link to='/'><img src="assets/images/home/logo.png" alt="" /></Link>
								</div>
								<div className="btn-group pull-right">
									<div className="btn-group">
										<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
											USA
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><a href="#">Canada</a></li>
											<li><a href="#">UK</a></li>
										</ul>
									</div>

									<div className="btn-group">
										<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
											DOLLAR
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><a href="#">Canadian Dollar</a></li>
											<li><a href="#">Pound</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm-8">
								<div className="shop-menu pull-right">
									<ul className="nav navbar-nav">
										<li>
											<Link to='/'>Account</Link>
										</li>
										<li>
											<Link to='/'>Wishlist</Link>
										</li>
										<li>
											<Link to='/Checkout'>Checkout</Link>
										</li>
										<li>
											<Link to='/Cart'>Cart</Link>
										</li>
										<li>
											<Link to='/Login'>Login</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="header-bottom">
					<div className="container">
						<div className="row">
							<div className="col-sm-9">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								<div className="mainmenu pull-left">
									<ul className="nav navbar-nav collapse navbar-collapse">
										<li><Link to='/Home'>Home</Link></li>
										<li className="dropdown">
											<Link to='/'>Shop<i className="fa fa-angle-down"></i></Link>
											<ul role="menu" className="sub-menu">
												<li>
													<Link to='/Shop'>Products</Link>
												</li>
												<li>
													<Link to='/Productdetails'>Product Details</Link>
												</li>
												<li>
													<Link to='/Checkout'>Checkout</Link>
												</li>
												<li>
													<Link to='/Cart'>Cart</Link>
												</li>
												<li>
													<Link to='/Login'>Login</Link>
												</li>
											</ul>
										</li>
										<li className="dropdown">
											<a href="#">Blog<i className="fa fa-angle-down"></i></a>
											<ul role="menu" className="sub-menu">
												<li>
													<Link to='/Blog'>Blog List</Link>
												</li>
												<li>
													<Link to='/Blogsingle'>Blog Single</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to='/Error'>404</Link>
										</li>
										<li><Link to='/Contactus'>Contact US</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="search_box pull-right">
									<input type="text" placeholder="Search" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section id="cart_items">
				<div class="container">
					<div class="breadcrumbs">
						<ol class="breadcrumb">
							<li><Link to="/Home">Home</Link></li>
							<li class="active">Shopping Cart</li>
						</ol>
					</div>
					<div class="table-responsive cart_info">
						<table class="table table-condensed">
							<thead>
								<tr class="cart_menu">
									<td class="image">Item</td>
									<td class="description"></td>
									<td class="price">Price</td>
									<td class="quantity">Quantity</td>
									<td class="total">Total</td>
									<td></td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="cart_product">
										<Link to=""><img src="assets/images/cart/one.png" alt="" /></Link>
									</td>
									<td class="cart_description">
										<h4><Link to="">Colorblock Scuba</Link></h4>
										<p>Web ID: 1089772</p>
									</td>
									<td class="cart_price">
										<p>$59</p>
									</td>
									<td class="cart_quantity">
										<div class="cart_quantity_button">
											<a class="cart_quantity_up" href=""> + </a>
											<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
											<a class="cart_quantity_down" href=""> - </a>
										</div>
									</td>
									<td class="cart_total">
										<p class="cart_total_price">$59</p>
									</td>
									<td class="cart_delete">
										<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
									</td>
								</tr>

								<tr>
									<td class="cart_product">
										<Link to=""><img src="assets/images/cart/two.png" alt="" /></Link>
									</td>
									<td class="cart_description">
										<h4><Link to="">Colorblock Scuba</Link></h4>
										<p>Web ID: 1089772</p>
									</td>
									<td class="cart_price">
										<p>$59</p>
									</td>
									<td class="cart_quantity">
										<div class="cart_quantity_button">
											<a class="cart_quantity_up" href=""> + </a>
											<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
											<a class="cart_quantity_down" href=""> - </a>
										</div>
									</td>
									<td class="cart_total">
										<p class="cart_total_price">$59</p>
									</td>
									<td class="cart_delete">
										<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
									</td>
								</tr>
								<tr>
									<td class="cart_product">
										<Link to=""><img src="assets/images/cart/three.png" alt="" /></Link>
									</td>
									<td class="cart_description">
										<h4><Link to="">Colorblock Scuba</Link></h4>
										<p>Web ID: 1089772</p>
									</td>
									<td class="cart_price">
										<p>$59</p>
									</td>
									<td class="cart_quantity">
										<div class="cart_quantity_button">
											<a class="cart_quantity_up" href=""> + </a>
											<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
											<a class="cart_quantity_down" href=""> - </a>
										</div>
									</td>
									<td class="cart_total">
										<p class="cart_total_price">$59</p>
									</td>
									<td class="cart_delete">
										<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<section id="do_action">
				<div class="container">
					<div class="heading">
						<h3>What would you like to do next?</h3>
						<p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="chose_area">
								<ul class="user_option">
									<li>
										<input type="checkbox" />
										<label>Use Coupon Code</label>
									</li>
									<li>
										<input type="checkbox" />
										<label>Use Gift Voucher</label>
									</li>
									<li>
										<input type="checkbox" />
										<label>Estimate Shipping & Taxes</label>
									</li>
								</ul>
								<ul class="user_info">
									<li class="single_field">
										<label>Country:</label>
										<select>
											<option>United States</option>
											<option>Bangladesh</option>
											<option>UK</option>
											<option>India</option>
											<option>Pakistan</option>
											<option>Ucrane</option>
											<option>Canada</option>
											<option>Dubai</option>
										</select>

									</li>
									<li class="single_field">
										<label>Region / State:</label>
										<select>
											<option>Select</option>
											<option>Dhaka</option>
											<option>London</option>
											<option>Dillih</option>
											<option>Lahore</option>
											<option>Alaska</option>
											<option>Canada</option>
											<option>Dubai</option>
										</select>

									</li>
									<li class="single_field zip-field">
										<label>Zip Code:</label>
										<input type="text" />
									</li>
								</ul>
								<a class="btn btn-default update" href="">Get Quotes</a>
								<a class="btn btn-default check_out" href="">Continue</a>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="total_area">
								<ul>
									<li>Cart Sub Total <span>$59</span></li>
									<li>Eco Tax <span>$2</span></li>
									<li>Shipping Cost <span>Free</span></li>
									<li>Total <span>$61</span></li>
								</ul>
								<a class="btn btn-default update" href="">Update</a>
								<a class="btn btn-default check_out" href="">Check Out</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="companyinfo">
                                    <h2><span>e</span>-shopper</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link To="#">
                                            <div className="iframe-img">
                                                <img src="assets/images//home/iframe1.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link To="#">
                                            <div className="iframe-img">
                                                <img src="assets/images//home/iframe2.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link To="#">
                                            <div className="iframe-img">
                                                <img src="assets/images//home/iframe3.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link To="#">
                                            <div className="iframe-img">
                                                <img src="assets/images//home/iframe4.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="address">
                                    <img src="assets/images//home/map.png" alt="" />
                                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Service</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link To="">Online Help</Link></li>
                                        <li><Link To="">Contact Us</Link></li>
                                        <li><Link To="">Order Status</Link></li>
                                        <li><Link To="">Change Location</Link></li>
                                        <li><Link To="">FAQ’s</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link To="">T-Shirt</Link></li>
                                        <li><Link To="">Mens</Link></li>
                                        <li><Link To="">Womens</Link></li>
                                        <li><Link To="">Gift Cards</Link></li>
                                        <li><Link To="">Shoes</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Policies</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link To="">Terms of Use</Link></li>
                                        <li><Link To="">Privecy Policy</Link></li>
                                        <li><Link To="">Refund Policy</Link></li>
                                        <li><Link To="">Billing System</Link></li>
                                        <li><Link To="">Ticket System</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>About Shopper</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link To="">Company Information</Link></li>
                                        <li><Link To="">Careers</Link></li>
                                        <li><Link To="">Store Location</Link></li>
                                        <li><Link To="">Affillate Program</Link></li>
                                        <li><Link To="">Copyright</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-offset-1">
                                <div className="single-widget">
                                    <h2>About Shopper</h2>
                                    <form action="#" className="searchform">
                                        <input type="text" placeholder="Your email address" />
                                        <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                                        <p>Get the most recent updates from <br />our site and be updated your self...</p>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Copyright © 2013 E-Shopper. All rights reserved.</p>
                            <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
                        </div>
                    </div>
                </div>

            </footer>
		</React.Fragment>
	)
}
