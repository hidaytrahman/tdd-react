import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  test("renders correctly", () => {
    render(<Todo />);

    expect(
      screen.getByRole("heading", {
        name: "Todo",
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("click add todo", () => {
    render(<Todo />);

    // click on add button
    fireEvent.click(
      screen.getByRole("button", {
        name: "Add",
      })
    );

    // should have list item
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
