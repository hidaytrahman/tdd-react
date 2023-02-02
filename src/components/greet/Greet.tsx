import { GreetTypes } from "./gree.types";

function Greet({ name }: GreetTypes) {
  return <div>Hello {name ? name : "Guest"}</div>;
}

export default Greet;
