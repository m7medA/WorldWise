import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({ destination = -1 }) {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(destination);
      }}
    >
      Back
    </Button>
  );
}

export default BackButton;
