import React from 'react';

//Components...
import NumberCounter from '../components/NumberCounter';

//React slickk...
import Slider from "react-slick";
// src/index.tsx or src/App.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//React observer...
import { useInView } from 'react-intersection-observer';


//Styles... 
import '../styles/Home.scss'
import ContactForm from '../components/Contact';


const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

    };


    const { ref, inView } = useInView({threshold: 0.1, triggerOnce: true});

    return (
        <div className='home-page'>

            <section className="main-section">

                <Slider {...settings} className='slider-thing'>
                    <div className="slide">
                        <img src="https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_1000%2Cq_80%2Cw_1920/znpmn174qnwmxaetjgti/HowtoBuyaBike_kids_banner1920x1000.jpg" alt="Slide 1" />
                    </div>
                    <div className="slide">
                        <img src="https://images.squarespace-cdn.com/content/v1/595ea7d6e58c62dce01d1625/1589845652981-A4R1L51B2VMJRDTT6M7P/Youth%2Bbike%2Briders%2BMS.jpg" alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src="https://forthbikes.com/wp-content/uploads/2023/10/banner-002-1-scaled.jpg" alt="Slide 3" />
                    </div>     
                </Slider>
                <div className='overlay'>
                    <div className='main-text'>
                        <h1>Helping Children Get Rides</h1>
                        <p>Our misson is to find bikes</p>
                    </div>
                </div>
                
            </section>

            <div className='main-subinfo'>
                    <span>
                        <div>
                            <NumberCounter targetNumber={1000} duration={1} number={'number'}  />
                        </div>
                        <p>Funds Raised</p>
                    </span>
                    <span>
                        <div>
                            <NumberCounter targetNumber={3}duration={400} number={'number'} />
                        </div>
                        <p>Dedicated Volunteers</p>
                    </span>
                    <span>
                        <div>
                            <NumberCounter targetNumber={100}duration={400} number={'number'} />%
                        </div>
                        <p>Delivered Donations</p>
                    </span>
                    <span>
                        <div>
                            <NumberCounter targetNumber={3} duration={400} number={'number'} />+
                        </div>
                        <p>Media Mention</p>
                    </span>
            </div>

            
            <section className="our-mission-section">
                <div className='mission-left'>
                    <h1>Who We Are?</h1>
                    <p>
                        We are a father and daughter team that was inspired to start this project by seeing kids riding bikes in our neighborhood. While many  kids have bikes already, there are many more that still do not, and do not have a way to get one. We decided to try to change that!
                    </p>
                    <br/>
                    <p>
                        Dad (a bicycle mechanic) and daughter (Lucero, 11 years old) fix, tune, wash, and test ride every single bike that we give away.  We are trying to get 100 (or more!) bikes to kids by the end of the summer, totally for free.
                    </p>
                </div>
                <img src="https://vivabikesaustin.org/About%20_%20100BikesForKids_files/IMG_20201009_125438772_HDR.jpg" alt="" />
            </section>
            

            <section className="about-us-section">
                <div className='about-us-container'>
                    
                    <div className="about-us-left">
                        <div className="grid-item image-large">
                            <img 
                                src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" 
                                alt="Large Image" 
                            />
                        </div>
                        <div className="grid-item"> 
                            <h2>20</h2>
                            <p>Single column content</p>
                        </div>
                        <div className="grid-item image-small">
                            <img 
                                src="https://images.squarespace-cdn.com/content/v1/57f4717846c3c46d4a4bf475/1668120993782-30TW7O8IRN1QSD6LQT88/IMG_7700.JPG" 
                                alt="Small Image"
                            />
                        </div>
                    </div>

                    
                    <div className='about-us-right'>
                            <h2>Donations for the better of our future world</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi est quo, tempore maiores ex voluptates blanditiis hic, cumque assumenda soluta facilis modi maxime ipsam autem, quis minus adipisci? Eius, praesentium.</p>
                    </div>

                </div>
            </section>


            <section className="process-section">
                <h2>The Process</h2>
                <div>
                    <div className="process-card">
                        <span>Step 1</span>
                        <img src="/broken-bike.png" alt="" />
                        <h2>Find Broken Bike</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad quidem nihil perspiciatis repudiandae dolor tempora voluptatibus aperiam amet explicabo! Accusantium quae maiores eaque ab cupiditate. Facilis aliquam quisquam illo.</p>
                    </div>
                    <div className="process-card">
                        <span>Step 2</span>
                        <img className='fix-image' src="/fix-broken-bike.png" alt="" />
                        <h2>Fix it!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, numquam corrupti incidunt harum modi voluptatum. Debitis, corrupti possimus ex fuga dolor sequi quod laudantium aliquam inventore aut tenetur adipisci nesciunt!</p>
                    </div>
                    <div className="process-card">
                        <span>Step 3</span>
                        <img src="https://images.vexels.com/content/143399/preview/gift-cartoon-icons-c6eff9.png" alt="" />
                        <h2>Give Away</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est soluta, accusamus adipisci, voluptate laudantium incidunt at exercitationem corrupti numquam sed temporibus repudiandae odit. Recusandae quis ex placeat eligendi nisi!</p>
                    </div>
                </div>
            </section>



            <ContactForm/>


            
        </div>
    );
};

export default Home;