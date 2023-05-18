import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
const BagIcon = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/cart")}
      variant="outline-primary "
      style={{ width: "3rem", height: "3rem", position: "relative" }}
    >
      <ShoppingCartIcon color="action" />
      <div
        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          color: "white",
          width: "1.5rem",
          height: "1.5rem",
          bottom: "0.5",
          right: "0",
          transform: "tarnslate(25% 25%)",
        }}
      >
        {cart.length}
      </div>
    </Button>
  );
};

export default BagIcon;
