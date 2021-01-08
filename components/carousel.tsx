import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselBackButton,
  CarouselDotGroup,
  CarouselNextButton,
} from "../styles/buttons";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import {
  CarouselSliderWrapper,
  CarouselWrapper,
  ImageWrapper,
} from "../styles/main-page-styles";

import ArrowIcon from "../styles/icons/arrow-icon.tsx";
import { NextPage } from "next";

interface CarouselProps {
  images: string[];
  title: string;
}

const Carousel: NextPage<CarouselProps> = ({
  images,
  title,
}: CarouselProps) => {
  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        totalSlides={images.length}
        touchEnabled={true}
      >
        <CarouselSliderWrapper>
          <Slider>
            {images.map((imageUrl, idx) => (
              <Slide index={idx} key={idx}>
                <ImageWrapper>
                  <img src={imageUrl} alt={title} loading="lazy" />
                </ImageWrapper>
              </Slide>
            ))}
          </Slider>
          {images.length > 1 && (
            <>
              <CarouselBackButton>
                <ArrowIcon alt="back arrow" position="left" />
              </CarouselBackButton>
              <CarouselNextButton>
                <ArrowIcon alt="forward arrow" position="right" />
              </CarouselNextButton>
            </>
          )}
        </CarouselSliderWrapper>
        {images.length > 1 && <CarouselDotGroup />}
      </CarouselProvider>
    </CarouselWrapper>
  );
};

export default Carousel;
