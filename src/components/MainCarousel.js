import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Colors from '../styles/Colors';

const CarouselBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .carousel {
    max-width: 1088px;
    max-height: 300px;
    .control-arrow {
      width: 32px;
      &:hover {
        background-color: transparent;
      }
    }
    & .control-next.control-arrow:before {
      border-left: 8px solid ${Colors.onSurfaceMedium};
    }
    & .control-prev.control-arrow:before {
      border-right: 8px solid ${Colors.onSurfaceMedium};
    }
    .slide {
      background-color: transparent;
    }
    img {
      max-width: 1024px;
      max-height: 300px;
    }
  }
`;

const MainCarousel = () => {
  return (
    <CarouselBlock>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://via.placeholder.com/1024x300/FFFAFA/000000?text=1024x300+Carousel+1"
            alt="Carousel 1"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1024x300/F0FFF0/000000?text=1024x300+Carousel+2"
            alt="Carousel 2"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1024x300/F5FFFA/000000?text=1024x300+Carousel+3"
            alt="Carousel 3"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1024x300/F0FFFF/000000?text=1024x300+Carousel+4"
            alt="Carousel 4"
          />
        </div>
        <div>
          <img
            src="https://media.bunjang.co.kr/images/nocrop/433923859.jpg"
            alt="Carousel 5"
          />
        </div>
        <div>
          <img
            src="https://media.bunjang.co.kr/images/nocrop/431881862.jpg"
            alt="Carousel 6"
          />
        </div>
        <div>
          <img
            src="https://media.bunjang.co.kr/images/nocrop/415809298.jpg"
            alt="Carousel 7"
          />
        </div>
      </Carousel>
    </CarouselBlock>
  );
};

export default MainCarousel;
