// import React from 'react'
import "./Slider.css";
import pic1 from '../assests/chole bhature.jpg'
import pic2 from '../assests/Rajma chawal.jpg'
import pic3 from '../assests/haka noodles.jpg'
import pic4 from '../assests/manchurian.jpg'
import pic5 from '../assests/aloo paratha.jpg'


const Slider = () => {
  return (
    <div>
        <section id = "trending"></section>
        <div>
            <h1 class="text-center section-heading">Trending Food</h1>
        </div>

        <div className="container">
            <div className="swiper trending-slider">
                <div className="swiper-wrapper">
                    {/* Slide start */}
                    <div className="swiper-slide trending-slide">
                        <div className="trending-slide-img">
                            <img src= {pic1} alt="Trending"/>
                        </div>
                        <div className="trending-slide-content">
                            <h1 className="food-price">₹50</h1>
                            <div className="trending-slide-content-bottom">
                                <h2 className="food-name">
                                    Chole Bhature
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5 ⭐</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Slide-end */}

                    {/* Slide-start */}
                    <div className="swiper-slide trending-slide">
                        <div className="trending-slide-img">
                            <img src={pic2} alt="Trending"/>
                        </div>
                        <div className="trending-slide-content">
                            <h1 className="food-price">₹60</h1>
                            <div className="trending-slide-content-bottom">
                                <h2 className="food-name">
                                    Rajma chawal
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5 ⭐</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Slide-end */}
                    {/* Slide-start */}
                    <div className="swiper-slide trending-slide">
                        <div className="trending-slide-img">
                            <img src={pic3} alt="Trending"/>
                        </div>
                        <div className="trending-slide-content">
                            <h1 className="food-price">₹80</h1>
                            <div className="trending-slide-content-bottom">
                                <h2 className="food-name">
                                    Hakka Noodles
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5 ⭐</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Slide-end */}

                    {/* Slide-start */}
                    <div className="swiper-slide trending-slide">
                        <div className="trending-slide-img">
                            <img src={pic4} alt="Trending"/>
                        </div>
                        <div className="trending-slide-content">
                            <h1 className="food-price">₹90</h1>
                            <div className="trending-slide-content-bottom">
                                <h2 className="food-name">
                                    Manchurian
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5 ⭐</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Slide-end */}

                    {/* Slide-start */}
                    <div className="swiper-slide trending-slide">
                        <div className="trending-slide-img">
                            <img src={pic5} alt="Trending"/>
                        </div>
                        <div className="trending-slide-content">
                            <h1 className="food-price">₹40</h1>
                            <div className="trending-slide-content-bottom">
                                <h2 className="food-name">
                                    Aloo Paratha
                                </h2>
                                <h3 className="food-rating">
                                    <span>4.5 ⭐</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Slide-end */}
            
                </div>
            </div>
        </div>

        <div class="trending-slider-control">
            <div class="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
              <div class="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <section/>
    </div>
  )
}

export default Slider
