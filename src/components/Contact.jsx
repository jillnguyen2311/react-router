import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => navigate("/")}>go home</button>
    </div>
  );
}
