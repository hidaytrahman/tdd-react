import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { slides } from "./data";

import Slider from "./Slider";

describe("slider", () => {
  test("renders correctly", () => {
    render(<Slider />);

    expect(screen.getByTestId("sliderHeading")).toBeInTheDocument();
    expect(screen.getByTestId("sliderSlide-0")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Previous",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Next/i,
      })
    ).toBeInTheDocument();
  });

  test("renders a next slide clicking on the next button", async () => {
    userEvent.setup();
    render(<Slider />);

    const nextButton = screen.getByRole("button", {
      name: /next/i,
    });

    await userEvent.click(nextButton);

    const slideElement = screen.getByTestId("sliderSlide-1");
    expect(slideElement).toHaveTextContent(slides[1].title);
  });

  test("disable next button for the last slide", async () => {
    userEvent.setup();
    render(<Slider />);

    const nextButton = screen.getByRole("button", {
      name: /next/i,
    });

    await userEvent.click(nextButton);
    await userEvent.click(nextButton);

    if (slides.length === 3) {
      expect(nextButton).toBeDisabled();
    }
  });

  test("renders previous slide clcking in the previous button", async () => {
    userEvent.setup();
    render(<Slider />);
    await userEvent.click(
      screen.getByRole("button", {
        name: /next/i,
      })
    );

    const prevButton = screen.getByRole("button", {
      name: /previous/i,
    });

    await userEvent.click(prevButton);

    expect(screen.getByTestId("sliderSlide-0")).toHaveTextContent(
      slides[0].title
    );
  });

  test("disable previous button for the first slide", async () => {
    userEvent.setup();
    render(<Slider />);

    const prevButton = screen.getByRole("button", {
      name: /previous/i,
    });

    expect(prevButton).toBeDisabled();
  });

  test("renders paginations", () => {
    render(<Slider />);
    expect(screen.getByTestId("sliderPagination")).toBeInTheDocument();
  });

  test("pagination button should clickable and accessible", () => {
    render(<Slider />);
    expect(
      screen.getAllByRole("button", {
        name: "🇮🇳",
      })
    ).toHaveLength(slides.length);
  });
});
