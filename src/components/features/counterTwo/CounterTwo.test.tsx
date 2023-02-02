import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CounterTwo from "./CounterTwo";

describe("counters two", () => {
  test("handlers are called", async () => {
    userEvent.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );

    const btnIncrement = screen.getByRole("button", {
      name: "Increment",
    });
    const btnDecrement = screen.getByRole("button", {
      name: "Decrement",
    });

    await userEvent.click(btnIncrement);
    await userEvent.click(btnDecrement);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
