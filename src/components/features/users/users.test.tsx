import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import Users from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  // this test case is sycned with mock server for api calls
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(4);
  });

  test("renders error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
