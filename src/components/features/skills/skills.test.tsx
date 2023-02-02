import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["hidayt", "rahma"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButon = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButon).toBeInTheDocument();
  });

  test("Start Learning button shout not rendered on load", () => {
    render(<Skills skills={skills} />);
    expect(
      screen.queryByRole("button", {
        name: "Start Learning",
      })
    ).not.toBeInTheDocument();
  });

  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    expect(
      await screen.findByRole(
        "button",
        {
          name: "Start Learning",
        },
        {
          timeout: 2000,
        }
      )
    ).toBeInTheDocument();
  });
});
