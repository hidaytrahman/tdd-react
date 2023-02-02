import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./Counter";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Increment",
      })
    ).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking on the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButton);
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });

  test("renders a count of 2 after clickimg the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByRole("heading")).toHaveTextContent("2");
  });

  test("renders count of 0 after clicking on the reset button", async () => {
    user.setup();
    render(<Counter />);

    const resetBtn = screen.getByRole("button", {
      name: "Reset",
    });

    await user.click(resetBtn);

    expect(screen.getByRole("heading")).toHaveTextContent("0");
  });

  test("renders count of -1 after clicking on the decrement button", async () => {
    user.setup();
    render(<Counter />);

    await user.click(
      screen.getByRole("button", {
        name: "Decrement",
      })
    );

    expect(screen.getByRole("heading")).toHaveTextContent("-1");
  });
});
