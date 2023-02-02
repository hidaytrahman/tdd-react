import { useEffect, useState } from "react";

export default function Contacts() {
  const [hasError, setHasError] = useState(false);
  const [hasInro, setHasIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasIntro(true);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Contacts</h1>

      <form>
        {hasInro && <button>This is nice form for contact!</button>}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" data-testid="email" placeholder="Email" /> <br />
        <label className="flex">
          <input type="checkbox" checked onChange={() => {}} />
          {hasError ? <p>All fields are required</p> : <p>All good</p>}
        </label>{" "}
        <button>Send</button>
      </form>
    </div>
  );
}
