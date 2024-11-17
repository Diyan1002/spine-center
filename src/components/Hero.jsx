// src/components/Hero.js
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Custom CSS for styling

// Replace with the correct image paths
import back1 from "../assets/back1.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";

// Import card icons
import icon1 from "../assets/box1.png";
import icon2 from "../assets/box2.png";
import icon3 from "../assets/box3.png";
import icon4 from "../assets/box4.png";

import Harley from "../assets/Harley.jpg"

import trustpilotLogo from "../assets/trustpilot.png"
import googleLogo from "../assets/google.jpg"
import doctifyLogo from "../assets/doctify.jpg"

import userIcon1 from "../assets/User1.png"
import userIcon from "../assets/User.png"
import userIcon2 from "../assets/User 2.png"

import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import pic4 from '../assets/4.jpg';
import pic5 from '../assets/5.jpg';
import pic6 from '../assets/6.jpg';

import image1 from '../assets/entry.jpg'
import image2 from '../assets/video.jpg'
import image3 from '../assets/eos.png'

import hospitalLogo from '../assets/small.jpg'; // Add actual path to the hospital logo
// import phoneIcon from '../assets/icons8-phone-30.png';       
import websiteIcon from '../assets/icons8-link-50.png';   // Add actual path to the website icon
// import addressIcon from '../assets/icons8-location-24.png';   
import twitterIcon from '../assets/icons8-twitter-24.png';   // Add actual path to social media icons
import facebookIcon from '../assets/icons8-facebook-30.png';
import linkedinIcon from '../assets/icons8-linkedin-30.png';
import instagramIcon from '../assets/icons8-instagram-30.png';
import pinterestIcon from '../assets/icons8-pinterest-30.png';
import emailIcon from '../assets/icons8-email-30.png';
import youtubeIcon from '../assets/icons8-youtube-30.png';
// import newsImage1 from './images/news1.png';           
// import newsImage2 from './images/news2.png';
// import newsImage3 from './images/news3.png';

import backgroundImage from '../assets/doctor.jpg'; // Replace with your actual image path


const Hero = () => {
  const images = [back1, back2, back3];
  const [activeTab, setActiveTab] = useState('Laser Spine Surgery');


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };  
    const treatments = {
    'Laser Spine Surgery': {
      description: `Laser Spine Surgery is an advanced method of treating disc prolapse causing sciatica. We are the only UK centre routinely offering this procedure. It has a high success rate and is performed as a day case operation.
      Patients with sciatica, spinal stenosis, disc protrusion, nerve pain and other disc conditions may benefit.
      There are no cuts, no inpatient stay and no general anaesthetic. Walk in and Walk out. There is little downtime with most patients returning to normal activity in a matter of days.`,
      imageUrl: pic1
    },
    'Dynamic Stabilisation': {
      description: `Dynamic Stabilisation is a technique used to support and stabilize the spine while allowing a range of motion. This procedure helps patients with spinal instability.`,
      imageUrl: pic2
    },
    'Disc Replacement': {
      description: `Disc Replacement surgery involves replacing a damaged or degenerated disc in the spine with an artificial one, helping to relieve pain and restore movement.`,
      imageUrl: pic3
    },
    'Spinal Ozone': {
      description: `Spinal Ozone treatment is a minimally invasive procedure that involves injecting ozone gas into the spine to reduce inflammation and pain caused by disc problems.`,
      imageUrl: pic4
    },
    'Balloon Kyphoplasty': {
      description: `Balloon Kyphoplasty is a minimally invasive procedure used to treat spinal fractures. It involves inflating a small balloon in the fractured vertebra to restore height and relieve pain.`,
      imageUrl: pic5
    },
    'Endoscopic Keyhole': {
      description: `Endoscopic Keyhole Surgery is a minimally invasive spinal surgery technique where a small incision is made to access and treat spinal conditions with the help of an endoscope.`,
      imageUrl: pic6
    }
  };
  function DepartmentCard({ title, imageSrc }) {
    return (
        <div className="department-card">
            <img src={imageSrc} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
            </div>
            <div className="more-button">More</div>
        </div>
    );
}
const videos = [
  { id: 1, title: "Video 1", duration: "02:14", thumbnail: "https://i.ytimg.com/vi/nmZqPjeMW6s/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/nmZqPjeMW6s?si=7EvCZxxzdBh0HUFk" },
  { id: 2, title: "Video 2", duration: "05:33", thumbnail: "https://i.ytimg.com/vi/T6cEw1dSyVM/hqdefault.jpg", videoUrl: "video2-url" },
  { id: 3, title: "Video 3", duration: "02:26", thumbnail: "https://i.ytimg.com/vi/Il1EJe7Zwvs/hqdefault.jpg", videoUrl: "video3-url" },
  // Add more videos as needed
];

const [selectedVideo, setSelectedVideo] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const videosPerPage = 3; // Number of videos per page
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
};
 // Calculate the videos to display based on current page
 const indexOfLastVideo = currentPage * videosPerPage;
 const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
 const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
 // Function to open the modal with selected video
 const openModal = (videoUrl) => {
  setSelectedVideo(videoUrl);
};

// Function to close the modal
const closeModal = () => {
  setSelectedVideo(null);
};

// Function to handle page change
const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="hero">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Slide ${index + 1}`} className="slider-img" />
            {/* <div className="overlay">
              <h1 className="title animate">BEST SPINE CLINIC</h1>
              <h3 className="subtitle animate">Top Spine Specialists</h3>
              <p className="description animate">DAY CASE SPINAL SURGERY</p>
              <p className="info animate">Our Revolutionary Techniques allow Fastest Recovery</p>
              <button className="learn-more">LEARN MORE</button>
            </div> */}
          </div>
        ))}
      </Slider>
      {/* Card Container */}
      <div className="card-container">
        <div className="card1">
          <img src={icon1} alt="Icon 1" className="card-icon" />
          <h3>OPEN AS USUAL</h3>
          <p>Our Safety COVID Measures</p>
          <a href="#">All Patients and Staff Tested</a>
        </div>
        <div className="card2">
          <img src={icon2} alt="Icon 2" className="card-icon" />
          <h3>SPINE DAY SURGERY</h3>
          <p>Same Day Discharge</p>
          <a href="#">Our Revolutionary Technique</a>
        </div>
        <div className="card3">
          <img src={icon3} alt="Icon 3" className="card-icon" />
          <h3>SAME DAY DIAGNOSIS</h3>
          <p>Fixed Package Prices</p>
          <a href="#">Latest Technology On-Site</a>
        </div>
        <div className="card4">
          <img src={icon4} alt="Icon 4" className="card-icon" />
          <h3>ESTABLISHED 2005</h3>
          <p>Centre of Excellence</p>
          <a href="#">Highest UK Rated Clinic</a>
        </div>
        
      </div>
      <div className="container">
        <div className="text-container">
          <h1 className="heading">WE ARE THE HIGHEST RATED SPINE CLINIC IN THE UK</h1>
          <p className="paragraph">
            We are based in the heart of <strong>Harley Street</strong>, the most prestigious medical district in the UK. 
            The London Spine Unit was established in 2005 and has a longstanding Reputation for High Quality and Trust.
          </p>
          <p className="paragraph">
            You can expect to receive world class care. Our highly <strong>Innovative</strong> and <strong>Revolutionary</strong> 
            treatments set us apart from the rest. Our team of top spinal specialists offer the best spine treatments that 
            can be found anywhere in the world and are all approved by International authorities.
          </p>
          <p className="paragraph">
            Our medical director and chief spinal surgeon <strong>Dr Mo Akmal MD</strong> is a leading UK Spine Consultant based at 
            Imperial College London. He has over 20 years of experience in Spinal Surgery and Pain management.
          </p>
        </div>
        <div className="image-container">
          <img 
            src={Harley} // Replace with actual image URL
            alt="Harley Street sign"
            className="image"
          />
          <div className="guide-text">
            <strong>PATIENT & VISITOR GUIDE</strong>
            <br />
            Plan your visit to our Clinic
          </div>
        </div>
      </div>
      <div className="testimonial-section">
      <div className="testimonial-video">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/Il1EJe7Zwvs?si=fNBt4AUoz1h-dnKW" // Replace "your-video-id" with the actual YouTube video ID
          title="Patient Testimonial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="testimonial-content">
        <h2>WHAT DO OUR PATIENTS SAY ...</h2>
        <p>
          We are the most highly rated Spine Centre in the UK with consistently top ratings on Trustpilot, Google, Doctify, and other review platforms.
        </p>
        <p>
          Our focus is on providing the latest, safest, most effective, and affordable care for all patients suffering from any spinal condition. Patients travel to us from all over the UK and the World because they value the experience and aftercare they receive from our expert team.
        </p>
      </div>
    </div>

    <div className="platforms-section">
        <div className="platform">
          <div className="platform-header">
            <img src={trustpilotLogo} alt="Trustpilot" className="platform-logo" />
          </div>
          <button className="platform-button">RATED 4.9 ON TRUSTPILOT</button>
        </div>

        <div className="platform">
          <img src={googleLogo} alt="Google" className="platform-logo" />
          <button className="platform-button">RATED 4.8 ON GOOGLE</button>
        </div>

        <div className="platform">
          <img src={doctifyLogo} alt="Doctify" className="platform-logo" />
          <button className="platform-button">RATED 4.9 ON DOCTIFY</button>
        </div>       
      </div>
      <div className="user-reviews">
        <div className="review">
          <div className="review-header">
            <img src={userIcon1} alt="User" className="user-icon" />
            <div className="para">
              <p><strong>Devan B</strong></p>
              <p>29/12/2020</p>
            </div>
          </div>
          <div className="review-stars">{Array(5).fill().map((_, i) => <span key={i}>⭐</span>)}</div>
          <p className="review-text">
          I was seen by Mr Akmal for a L4/L5 discectomy. One of the biggest hurdles with any medical treatment is being comfortable and surrendering to the process. Mr Akmal and his team are consummate professionals with a very human bed side manner and give you the reassurance you need. I initially reached out to Mr Akmal via email and within a few hours he responded and an initial consultation was booked. The team is welcoming from front desk through to admin, theatre staff and all support doctors. This is a reflection of Mr Akmal himself. Everyone had plenty of time and no question was too trivial. I never felt rushed in my pre operation appointments when Mr Akmal discussed all options and we jointly agreed on my discectomy. Given my pain level surgery was planned and I was booked within days of my initial consultation. I very quickly came to realise that I was not just a number as in no time everyone knew my name. The day of the procedure I had a full briefing by the theatre staff who kept me updated on the time that I would be taken to theatre, with a pre op visit by Mr Akmal. The patient pods were very comfortable and clean. I walked to theatre and again the staff alleviated any anxiety I felt. Mr Akmal was already in theatre. Post op the recovery team were wonderful ensuring that I was comfortable and provided a light refreshment. Mr Akmal came to see me two hours post op and I walked with him - pain free! The discharge was seamless and for the first few days the team called to check on me. Mr Akmal reviewed me in clinic two weeks post op and again had plenty of time for all my questions. I am now 5 weeks post op and healing well. The London Spine Unit delivered on all my expectations. A very seamless team and service. A big thanks to Mr Akmal, Dr Lok, Rola and the whole team for looking after me.
          Juan C H
          Juan C H
          02/12/2020
          Verified
          I was checking for recommendations on the best spine clinics in London, and the London Spine Unit came up. Without a doubt it is one of the best or I would say the best Spine Unit in London or even in the UK. I had the luck to be in the care of Dr Mo Akmal, which tried to find the best solution for my back issues and he did, I had surgery 2 weeks ago and it totally fixed my spine issue. I am pain free now and I can finally have a normal life with no pain at all, of course the care of the nurses and staff of the clinic very professional and very warm. Thank you for everything, I can't thank you enough for all the help given by the whole personal in the clinic.
          Krissie Nicolson
          Krissie Nicolson
          25/11/2020
          Verified
          Before treatment from Mo Akmal my quality of life was severely impacted by a herniated disc. Normally very active, I was bent double and could not walk, sit or stand for more than 15 minutes without chronic pain. I tried physiotherapy, a chiropractor and injections. The surgery Mr Akmal performed was miraculous. I walked out of theatre upright for the first time in 6 months and have not had any problems since. It has felt unbelievably good to finally have my life back. A simple walk down the street has become such a joy. This surgery was worth every single penny.
          </p>
        </div>

        <div className="review">
          <div className="review-header">
            <img src={userIcon} alt="User" className="user-icon" />
            <div>
              <p><strong>Juan C H</strong></p>
              <p>02/12/2020</p>
            </div>
          </div>
          <div className="review-stars">{Array(5).fill().map((_, i) => <span key={i}>⭐</span>)}</div>
          <p className="review-text">
          I was checking for recommendations on the best spine clinics in London, and the London Spine Unit came up. Without a doubt it is one of the best places to get treatment for spinal issues. The staff are professional, and the level of care is top-notch. They have the latest technology and skilled specialists who truly care about patient recovery.
      Highly recommend this clinic to anyone suffering from back pain or related issues!
    </p>        
        </div>

        <div className="review">
          <div className="review-header">
            <img src={userIcon2} alt="User" className="user-icon" />
            <div>
              <p><strong>Krissie Nicolson</strong></p>
              <p>25/11/2020</p>
            </div>
          </div>
          <div className="review-stars">{Array(5).fill().map((_, i) => <span key={i}>⭐</span>)}</div>
          <p className="review-text">
          Before treatment from Mo Akmal my quality of life was severely impacted by a herniated disc. Normally very active, I was bent double and could not walk, sit or stand for more than 15 minutes without chronic pain. I tried physiotherapy, a chiropractor and injections. The surgery Mr Akmal performed was miraculous. I walked out of theatre upright for the first time in 6 months and have not had any problems since. It has felt unbelievably good to finally have my life back. A simple walk down the street has become such a joy. This surgery was worth every single penny.          </p>
        </div>
      </div>

      {/* Trustpilot Rating Summary */}
      <p className="rating-summary"><strong>Trustpilot</strong> rating score: <strong>4.9</strong> of 5, based on <strong>123</strong> reviews.</p>
    
      <div className="container1">
      <div className="text-container">
        <h1 className="heading1">SAME DAY DISCHARGE</h1>
        <p className="subtitle">
          We are the only UK spine Surgery Centre performing day case spine surgery.
        </p>
        <p className="description">
          Our Revolutionary techniques allow patients to be up and walking immediately after surgery and appreciate going home on the same day.
          <br />
          Avoid inpatient stay. Avoid pain after Surgery. Avoid General Anaesthetic.
          <br />
          The videos below speak for themselves and show patients shortly after surgery.
        </p>
        <button className="button">SEE OUR POST OP VIDEOS</button>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q8tkesLo_Fw?si=0en2GhxVZ_N89eHw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="featured-treatments-container">
      <h1 className="heading2">FEATURED TREATMENTS</h1>
      <p className="description">
        Our specialists are some of the best and world-leading spinal consultants. We offer treatments that are rarely performed elsewhere. Our facility is dedicated to spinal treatments. Having treated tens of thousands of patients, our doctors will be able to offer you some of the most advanced treatments available in the world.
      </p>
      <div className="tabs">
        {Object.keys(treatments).map((treatment) => (
          <button
            key={treatment}
            className={`tab-button ${activeTab === treatment ? 'active' : ''}`}
            onClick={() => setActiveTab(treatment)}
          >
            {treatment}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div className="tab-image">
          <img src={treatments[activeTab].imageUrl} alt={activeTab} />
        </div>
        <div className="tab-text">
          <p>{treatments[activeTab].description}</p>
        </div>
      </div>
      <button className="more-info-button">MORE ABOUT OUR SPECIALIST TREATMENTS</button>
    </div>

    <div className="app">
            <h2>OUR DEPARTMENTS</h2>
            <p>The Backbone of our Clinic</p>
            <div className="departments">
                <DepartmentCard title="OPERATING THEATRES" imageSrc={image1} />
                <DepartmentCard title="OUTPATIENT CLINIC" imageSrc={image2} />
                <DepartmentCard title="ADVANCED IMAGING" imageSrc={image3} />
            </div>
            <div className="modern-equipment">
              <h3>MODERN EQUIPMENT</h3>
              <div className="divider"></div>
                <p>We have some of the most advanced technology to diagnose and treat all spinal disorders.</p>
                <p>We are able to arrange same day MRI scans, XRAYS, and CT Scans to help diagnose all spinal conditions accurately.</p>
                <button className="all-departments-button">CHECKOUT ALL DEPARTMENTS</button>
            </div>
        </div>
        <div className="video-testimonials">
            <h2>VIDEO TESTIMONIALS</h2>
            <p>
                Our specialists are some of the best and world-leading spinal consultants. 
                We offer treatments that are rarely performed elsewhere. Our facility is 
                dedicated to spinal treatments. Having treated tens of thousands of patients, 
                our doctors will be able to offer you some of the most advanced treatments 
                available in the world.
            </p>
            <Slider {...settings}>
                {videos.map(video => (
                    <div key={video.id} className="video-card" onClick={() => openModal(video.videoUrl)}>
                        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                        <div className="duration">{video.duration}</div>
                        <div className="play-icon">▶</div>
                    </div>
                ))}
            </Slider>
            <div className="pagination">
                <button
                    onClick={() => paginate(1)}
                    className={`page-button ${currentPage === 1 ? 'active' : ''}`}
                >
                    1
                </button>
                <button
                    onClick={() => paginate(2)}
                    className={`page-button ${currentPage === 2 ? 'active' : ''}`}
                >
                    2
                </button>
            </div>
            {/* Video Modal */}
            {selectedVideo && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>✖</button>
                        <video src={selectedVideo} controls autoPlay />
                    </div>
                </div>
            )}
        </div>
        <div className="fixed-price-package" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                {/* Left Section */}
                <div className="text-section">
                    <h2>NEED A FIXED PRICE PACKAGE?</h2>
                    <p>Call Now 0203 973 8810 and receive Top Quality Spine Care</p>
                    <button className="info-button">REQUEST AN INFORMATION SHEET</button>
                </div>

                {/* Center Section */}
                <div className="working-hours">
                    <h3>WORKING HOURS</h3>
                    <ul>
                        <li><span>MONDAY</span><span>09:00-20:00</span></li>
                        <li><span>TUESDAY</span><span>09:00-21:00</span></li>
                        <li><span>WEDNESDAY</span><span>09:00-20:00</span></li>
                        <li><span>THURSDAY</span><span>24-HOUR SHIFT</span></li>
                        <li><span>FRIDAY</span><span>09:00-21:00</span></li>
                        <li><span>SATURDAY</span><span>09:00-18:00</span></li>
                        <li><span>SUNDAY</span><span>11:00-19:00</span></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="fees-insurance">
                    <h3>FEES & INSURANCE</h3>
                    <p>For the convenience of our patients, the <strong>Harley Street Spine Centre</strong> and Harley Street Hospital provides direct insurance billing with all major international insurance providers and assistance companies.</p>
                </div>
            </div>
        </div>
        <div className="footer-container">
      <div className="contact-section">
        <img src={hospitalLogo} alt="Hospital Logo" className="hospital-logo" />
        <p>
          The Harley Street Spine Centre is based at The prestigious Harley Street Hospital
        </p>
        <div className="contact-info">
          <div className="contact-item">
            {/* <img src={phoneIcon} alt="Phone Icon" /> */}
            {/* <span>(+44) 203 973 8810</span> */}
          </div>
          <div className="contact-item">
            <img src={websiteIcon} alt="Website Icon" />
            <a href="https://spinecentre.uk">https://spinecentre.uk</a>
          </div>
          <div className="contact-item">
            {/* <img src={addressIcon} alt="Address Icon" /> */}
            {/* <span>19 Harley Street, London, W1G 9QJ</span> */}
          </div>
        </div>
      </div>

      <div className="social-media-section">
        <img src={twitterIcon} alt="Twitter" className="social-icon" />
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
        <img src={emailIcon} alt="Email" className="social-icon" />
        <img src={youtubeIcon} alt="YouTube" className="social-icon" />
        <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
      </div>

      {/* <div className="latest-news-section">
        <h3>Latest News</h3>
        <div className="news-item">
          <img src={newsImage1} alt="News 1" className="news-image" />
          <div>
            <p className="news-date">Nov 23</p>
            <a href="#" className="news-title">DAILY EXERCISE IS ESSENTIAL</a>
            <p className="news-description">When was the last time you went out for a...</p>
          </div>
        </div>
        <div className="news-item">
          <img src={newsImage2} alt="News 2" className="news-image" />
          <div>
            <p className="news-date">Sep 30</p>
            <a href="#" className="news-title">MEDICAL ADVICE FOR ALL AGES AND SEXES</a>
            <p className="news-description">How often does a post start with all these...</p>
          </div>
        </div>
        <div className="news-item">
          <img src={newsImage3} alt="News 3" className="news-image" />
          <div>
            <p className="news-date">Sep 20</p>
            <a href="#" className="news-title">DIABETES DIET AND HEALTHY FOOD TIPS</a>
            <p className="news-description">Let's talk about what is health and how can...</p>
          </div>
        </div>
      </div> */}
    </div>
    <div className="footer-copyright">
      <p>
        Copyright &copy;2021{' '}
        <a href="https://londonspineunit.com" target="_blank" rel="noopener noreferrer">
          London Spine Unit
        </a>
      </p>
    </div>
    </div>
    
    
   
    
  );
};

export default Hero;
