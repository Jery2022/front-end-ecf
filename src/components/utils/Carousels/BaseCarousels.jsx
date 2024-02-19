import Carousel from 'react-bootstrap/Carousel';
import ImgUrl1 from '../../../assets/images/carousel/img_carousel_1.jpg';
import ImgUrl2 from '../../../assets/images/carousel/img_carousel_2.jpg';
import ImgUrl3 from '../../../assets/images/carousel/img_carousel_3.jpg';

function BaseCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={ImgUrl1} alt="First slide" />
        <Carousel.Caption>
          <h4>Un service de qualité</h4>
          <p>Une équipe de professionnels à votre écoute</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ImgUrl2} alt="Second slide" />
        <Carousel.Caption>
          <h4>Garanties 100%</h4>
          <p>Vos préoccupations sont les nôtres</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ImgUrl3} alt="Third slide" />
        <Carousel.Caption>
          <h4>Des professionnels disponibles 24h/24h</h4>
          <p>Nous vous apportons une assistance personnalisée.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BaseCarousel;
