import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toBeInTheDocument();
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
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await userEvent.click(incrementButton);
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });

  test("renders a count of 2 after clickimg the increment button twice", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    expect(screen.getByRole("heading")).toHaveTextContent("2");
  });

  test("renders count of 0 after clicking on the reset button", async () => {
    userEvent.setup();
    render(<Counter />);

    const resetBtn = screen.getByRole("button", {
      name: "Reset",
    });

    await userEvent.click(resetBtn);

    expect(screen.getByRole("heading")).toHaveTextContent("0");
  });

  test("renders count of -1 after clicking on the decrement button", async () => {
    userEvent.setup();
    render(<Counter />);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Decrement",
      })
    );
    expect(screen.getByRole("heading")).toHaveTextContent("-1");
  });

  test("renders the count of 10 after clicking on the set button", async () => {
    userEvent.setup();
    render(<Counter />);

    // handle input typing and check if the typing word is correct as number
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    // now click on set and check if the typed  number has same in the heading
    await userEvent.click(
      screen.getByRole("button", {
        name: "Set",
      })
    );
    expect(screen.getByRole("heading")).toHaveTextContent("10");
  });

  test("elements are docused in the right order", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const resetBtn = screen.getByRole("button", { name: "Reset" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    // simulate tab press
    await userEvent.tab();
    // check focus to next element as a increment button
    expect(incrementBtn).toHaveFocus();
    await userEvent.tab();
    expect(resetBtn).toHaveFocus();
    await userEvent.tab();
    expect(decrementBtn).toHaveFocus();
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
