import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 20,
      },
    });

    expect(result.current.count).toBe(20);
  });

  test("increment() method should increase and render the count", () => {
    const { result } = renderHook(useCounter);

    act(result.current.increment);
    expect(result.current.count).toBe(1);
  });

  test("decrement() method should decreas and render the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      },
    });

    act(result.current.decrement);
    expect(result.current.count).toBe(4);
  });
});
