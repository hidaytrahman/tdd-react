import { useState } from "react";
import { Typography } from "../../common/header/Header.styles";
import { slides } from "./data";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div>
      <Typography data-testid="sliderHeading">Slider</Typography>
      <h2 data-testid={`sliderSlide-${currentSlide}`}>
        {slides[currentSlide].title}
      </h2>

      <div data-testid="sliderPagination">
        {slides.map((item, index) => (
          <div key={index} role="button">
            🇮🇳
          </div>
        ))}
      </div>

      <div>
        <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
          Previous
        </button>
        <button
          onClick={handleNextSlide}
          disabled={slides.length === currentSlide + 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
