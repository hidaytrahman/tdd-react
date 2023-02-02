import { render, screen } from "@testing-library/react";
import Contacts from "./Contacts";

describe("Contacts", () => {
  test("renders correctly", () => {
    render(<Contacts />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("All good")).toBeInTheDocument();

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("checkbox should be checked", () => {
    render(<Contacts />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("renders intro after 3 seconds", async () => {
    render(<Contacts />);
    // expect(screen.findByTestId("contact-intro", {})).toBeInTheDocument();

    // expect(
    //   screen.findByTestId("contact-intro", { timeout: 3000 })
    // ).toBeInTheDocument();
    expect(
      await screen.findByRole(
        "button",
        { name: "This is nice form for contact!" },
        { timeout: 3000 }
      )
    ).toBeInTheDocument();
  });
});
