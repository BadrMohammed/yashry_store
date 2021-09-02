import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { UPDATE_HOME_PROPS } from "../../Redux/Actions/types";

const Carousel = ({ items, activeIndex, general }) => {
  const onChangeSlide = (e) => {
    general([{ prop: "activeIndex", value: e.slide }], UPDATE_HOME_PROPS);
    window.scrollTo(0, 0);
  };

  return (
    <AliceCarousel
      mouseTracking={false}
      activeIndex={activeIndex}
      items={items}
      controlsStrategy="alternate"
      disableDotsControls={true}
      controlsStrategy="alternate"
      renderPrevButton={() => <a className="cursor link_caresoul">Pervious</a>}
      renderNextButton={() => <a className="cursor link_caresoul">Next</a>}
      onSlideChanged={onChangeSlide}
    />
  );
};

export default Carousel;
