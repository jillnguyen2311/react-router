import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="about">About</Link>
      </p>
      <p>
        <a href="/about">Normal About</a>
      </p>
    </div>
  );
}
