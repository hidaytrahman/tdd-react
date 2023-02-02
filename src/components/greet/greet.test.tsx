import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders corrctly", () => {
    render(<Greet />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Hidayt" />);
    expect(screen.getByText("Hello Hidayt")).toBeInTheDocument();
  });

  test("renders with a guest if no name", () => {
    render(<Greet />);
    expect(screen.getByText("Hello Guest")).toBeInTheDocument();
  });
});

// skip and only is used to filter the test while watching the test cases
// test.skip("Greet renders with a name", () => {
//   render(<Greet name="Hidayt" />);
//   expect(screen.getByText("Hello Hidayt")).toBeInTheDocument();
// });
