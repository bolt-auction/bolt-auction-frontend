import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../imgs/1.png';
import img2 from '../imgs/2.png';
import img3 from '../imgs/3.png';
import Colors from '../styles/Colors';

const CarouselBlock = styled.div`
  width: 100%;
  height: 384px;
  background-color: #a9a9a9;
  background-size: contain;
  /* overflow: hidden; */

  .carousel {
    .control-arrow {
      width: 36px;
    }
    .control-arrow:hover {
      background: ${Colors.primaryFocused};
    }
    .slide {
      background-color: #fff;
    }
    img {
      max-width: 1024px;
      height: 384px;
    }
  }
`;

const CarouselContainer = () => {
  return (
    <CarouselBlock>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        emulateTouch={true}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="dd" />
        </div>
        <div>
          <img src={img2} alt="dd" />
        </div>
        <div>
          <img src={img3} alt="dd" />
        </div>
      </Carousel>
    </CarouselBlock>
  );
};

export default CarouselContainer;
