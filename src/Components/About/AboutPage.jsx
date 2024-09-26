import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../Assets/Brands/brand1.png";
import brand2 from "../../Assets/Brands/brand2.png";
import brand3 from "../../Assets/Brands/brand3.png";
import brand4 from "../../Assets/Brands/brand4.png";
import brand5 from "../../Assets/Brands/brand5.png";
import brand6 from "../../Assets/Brands/brand6.png";
import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About US</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h6>
            ShopToyor Marketplace is an evolution of our core services, built to transform and enhance the e-commerce experience. Our mission is to create a seamless, customer-centric platform where buyers and sellers connect effortlessly. By fostering innovation and trust, ShopToyor aims to reshape the way people shop online, making it more accessible and efficient for everyone
          </h6>

          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                Our mission at ShopToyor is to create a seamless, customer-centric platform where buyers and sellers connect effortlessly. We aim to streamline the online shopping experience by providing intuitive tools, a secure environment, and personalized services that cater to the unique needs of each user. By simplifying transactions and fostering transparent communication, we empower both buyers and sellers to engage confidently. Through continuous innovation and a commitment to customer satisfaction, we strive to make e-commerce not only efficient but also enjoyable for everyone involved
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                Our vision is to become a leading force in the e-commerce landscape, known for driving innovation and fostering meaningful connections between buyers and sellers worldwide. We aim to create a marketplace that transcends boundaries, offering a trusted, inclusive platform where businesses of all sizes can thrive. By setting new standards in customer experience, technology, and sustainability, ShopToyor envisions shaping the future of online commerce, making it more accessible, equitable, and efficient for all
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
              At ShopToyor, we are committed to delivering an exceptional e-commerce experience that empowers businesses and customers alike. Founded with a vision to simplify and enhance online shopping, our company is built on values of innovation, trust, and customer satisfaction. We strive to create a marketplace where convenience meets quality, allowing buyers and sellers to connect and thrive in a seamless, user-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;
