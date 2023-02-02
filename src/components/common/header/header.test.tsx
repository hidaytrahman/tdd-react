import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("headers", () => {
  test("renders correctly", () => {
    render(<Header />);
    expect(screen.getByTestId("app-header")).toBeInTheDocument();
  });

  test("default theme should be light", () => {
    render(<Header />);
    expect(screen.getByTestId("themeChangeBtn")).toHaveTextContent(
      "Theme - light"
    );
  });
});
