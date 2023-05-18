import HomeIcon from "@mui/icons-material/Home";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const NotFound = () => {
  const btnNavigate = useNavigate();
  return (
    <>
      <div className="mt-20">
        <Button
          onClick={() => btnNavigate("/")}
          className="flex justify-center  "
          variant="outlined"
        >
          {" "}
          Back home <HomeIcon/>
        </Button>
      </div>
      <div className=" h-20 grid grid-cols-3 gap-4 content-center  ">
        <Alert variant="warning">
          404 Error : This is Page Is Not Found ..!
        </Alert>
      </div>
    </>
  );
};

export default NotFound;
