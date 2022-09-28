import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogsingle() {
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

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Category</h2>
                                <div className="panel-group category-products" id="accordian">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <Link data-toggle="collapse" data-parent="#accordian" to="#sportswear">
                                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                    Sportswear
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="sportswear" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul>
                                                    <li><Link to="">Nike </Link></li>
                                                    <li><Link to="">Under Armour </Link></li>
                                                    <li><Link to="">Adidas </Link></li>
                                                    <li><Link to="">Puma</Link></li>
                                                    <li><Link to="">ASICS </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <Link data-toggle="collapse" data-parent="#accordian" to="#mens">
                                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                    Mens
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="mens" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul>
                                                    <li><Link to="">Fendi</Link></li>
                                                    <li><Link to="">Guess</Link></li>
                                                    <li><Link to="">Valentino</Link></li>
                                                    <li><Link to="">Dior</Link></li>
                                                    <li><Link to="">Versace</Link></li>
                                                    <li><Link to="">Armani</Link></li>
                                                    <li><Link to="">Prada</Link></li>
                                                    <li><Link to="">Dolce and Gabbana</Link></li>
                                                    <li><Link to="">Chanel</Link></li>
                                                    <li><Link to="">Gucci</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <Link data-toggle="collapse" data-parent="#accordian" to="#womens">
                                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                    Womens
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="womens" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul>
                                                    <li><Link to="">Fendi</Link></li>
                                                    <li><Link to="">Guess</Link></li>
                                                    <li><Link to="">Valentino</Link></li>
                                                    <li><Link to="">Dior</Link></li>
                                                    <li><Link to="">Versace</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Kids</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Fashion</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Households</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Interiors</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Clothing</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Bags</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Shoes</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="brands_products">
                                    <h2>Brands</h2>
                                    <div className="brands-name">
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><Link to=""> <span className="pull-right">(50)</span>Acne</Link></li>
                                            <li><Link to=""> <span className="pull-right">(56)</span>Grüne Erde</Link></li>
                                            <li><Link to=""> <span className="pull-right">(27)</span>Albiro</Link></li>
                                            <li><Link to=""> <span className="pull-right">(32)</span>Ronhill</Link></li>
                                            <li><Link to=""> <span className="pull-right">(5)</span>Oddmolly</Link></li>
                                            <li><Link to=""> <span className="pull-right">(9)</span>Boudestijn</Link></li>
                                            <li><Link to=""> <span className="pull-right">(4)</span>Rösch creative culture</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price-range">
                                    <h2>Price Range</h2>
                                    <div className="well">
                                        <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                                        <b>$ 0</b> <b className="pull-right">$ 600</b>
                                    </div>
                                </div>

                                <div className="shipping text-center">
                                    <img src="assets/images/home/shipping.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">Latest From our Blog</h2>
                                <div className="single-blog-post">
                                    <h3>Girls Pink T Shirt arrived in store</h3>
                                    <div className="post-meta">
                                        <ul>
                                            <li><i className="fa fa-user"></i> Mac Doe</li>
                                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                        </ul>
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </span>
                                    </div>
                                    <Link to="">
                                        <img src="assets/images/blog/blog-one.jpg" alt="" />
                                    </Link>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p> <br />

                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p> <br />

                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    </p> <br />

                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                    <div className="pager-area">
                                        <ul className="pager pull-right">
                                            <li><Link to="#">Pre</Link></li>
                                            <li><Link to="#">Next</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="rating-area">
                                <ul className="ratings">
                                    <li className="rate-this">Rate this item:</li>
                                    <li>
                                        <i className="fa fa-star color"></i>
                                        <i className="fa fa-star color"></i>
                                        <i className="fa fa-star color"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="color">(6 votes)</li>
                                </ul>
                                <ul className="tag">
                                    <li>TAG:</li>
                                    <li><Link className="color" to="">Pink <span>/</span></Link></li>
                                    <li><Link className="color" to="">T-Shirt <span>/</span></Link></li>
                                    <li><Link className="color" to="">Girls</Link></li>
                                </ul>
                            </div>

                            <div className="socials-share">
                                <Link to=""><img src="assets/images/blog/socials.png" alt="" /></Link>
                            </div>

                            <div className="media commnets">
                                <Link className="pull-left" to="#">
                                    <img className="media-object" src="assets/images/blog/man-one.jpg" alt="" />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Annie Davis</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="blog-socials">
                                        <ul>
                                            <li><Link to=""><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to=""><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to=""><i className="fa fa-dribbble"></i></Link></li>
                                            <li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
                                        </ul>
                                        <Link className="btn btn-primary" to="">Other Posts</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="response-area">
                                <h2>3 RESPONSES</h2>
                                <ul className="media-list">
                                    <li className="media">

                                        <Link className="pull-left" to="#">
                                            <img className="media-object" src="assets/images/blog/man-two.jpg" alt="" />
                                        </Link>
                                        <div className="media-body">
                                            <ul className="sinlge-post-meta">
                                                <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <Link className="btn btn-primary" to=""><i className="fa fa-reply"></i>Replay</Link>
                                        </div>
                                    </li>
                                    <li className="media second-media">
                                        <Link className="pull-left" to="#">
                                            <img className="media-object" src="assets/images/blog/man-three.jpg" alt="" />
                                        </Link>
                                        <div className="media-body">
                                            <ul className="sinlge-post-meta">
                                                <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <Link className="btn btn-primary" to=""><i className="fa fa-reply"></i>Replay</Link>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <Link className="pull-left" to="#">
                                            <img className="media-object" src="assets/images/blog/man-four.jpg" alt="" />
                                        </Link>
                                        <div className="media-body">
                                            <ul className="sinlge-post-meta">
                                                <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <Link className="btn btn-primary" to=""><i className="fa fa-reply"></i>Replay</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="replay-box">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h2>Leave a replay</h2>
                                        {/* <form> */}
                                        <div className="blank-arrow">
                                            <label>Your Name</label>
                                        </div>
                                        <span>*</span>
                                        <input type="text" placeholder="write your name..." />
                                        <div className="blank-arrow">
                                            <label>Email Address</label>
                                        </div>
                                        <span>*</span>
                                        <input type="email" placeholder="your email address..." />
                                        <div className="blank-arrow">
                                            <label>Web Site</label>
                                        </div>
                                        <input type="email" placeholder="current city..." />
                                        {/* </form> */}
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="text-area">
                                            <div className="blank-arrow">
                                                <label>Your Name</label>
                                            </div>
                                            <span>*</span>
                                            <textarea name="message" rows="11"></textarea>
                                            <Link className="btn btn-primary" to="">post comment</Link>
                                        </div>
                                    </div>
                                </div>
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
