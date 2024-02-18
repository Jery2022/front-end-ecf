import React, { useEffect, useState } from 'react';
import './css/SlideShow.css';
import img1 from '../../assets/images/carousel/img_carousel_1.jpg';
import img2 from '../../assets/images/carousel/img_carousel_2.jpg';
import img3 from '../../assets/images/carousel/img_carousel_3.jpg';

const SlideShow = () => {
  // State to keep track of the current slide index
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to handle the slideshow
  const showSlides = () => {
    // Get all the slide elements and dot elements
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    // Hide all the slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Increment the slide index
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);

    // Remove the 'active' class from all the dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // Display the current slide and add the 'active' class to the corresponding dot
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
  };

  // Start the slideshow when the component mounts
  useEffect(() => {
    const interval = setInterval(showSlides, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  });

  // JSX for the slideshow component
  return (
    <div>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={img1} alt="Slide 1" style={{ width: '100%' }} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={img2} alt="Slide 2" style={{ width: '100%' }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={img3} alt="Slide 3" style={{ width: '100%' }} />
          <div className="text">Caption Three</div>
        </div>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default SlideShow;
