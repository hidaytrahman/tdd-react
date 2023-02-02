import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    expect(screen.getByText("All fields are mandatory")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Hidayt")).toBeInTheDocument();
    expect(screen.getByAltText("a person with a laptop")).toBeInTheDocument();
    expect(screen.getByTitle("close")).toBeInTheDocument();
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Bio",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
