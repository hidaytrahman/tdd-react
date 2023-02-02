import { rest } from "msw";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Hidayt Rahman" },
        { name: "Ervin Howell" },
        { name: "Clementine Bauch" },
        { name: "Nishant Kumar" },
      ])
    );
  }),

  //   // Match a POST request issued against the same origin
  //   // as the current application.
  //   rest.post('/author/:authorId/:postId', responseResolver),
];
