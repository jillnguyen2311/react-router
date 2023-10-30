import { useParams } from "react-router-dom";

export default function User() {
  const { user } = useParams();

  return (
    <div>
      <h1>User page</h1>
      <p>Hello {user}</p>
    </div>
  );
}
