const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
}: {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p data-testid="count">{count}</p>

      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};

export default CounterTwo;
