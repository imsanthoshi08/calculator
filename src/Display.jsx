export default function Display({ expr, result }) {
  return (
    <div className="display">
      <div>{expr || "0"}</div>
      <strong>{result}</strong>
    </div>
  );
}