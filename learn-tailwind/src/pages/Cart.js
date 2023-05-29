import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { clear, decreament, increament, removeFromCard } from "../rtk/cartSlice";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const  cart  = useSelector((state) => state.cart.items);
  const {quantity}=useSelector((state)=>state.cart)
  console.log(quantity)
  const dispatch = useDispatch();
  const btnNavigate = useNavigate();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <div className="container mx-auto px-4 my-5 pt-5 ">
        <Button
          onClick={() => btnNavigate("/")}
          className="flex justify-center  "
          variant="outlined"
        >
          {" "}
          back home <HomeIcon> </HomeIcon>
        </Button>

        <div className="flex justify-between items-center my-5">
          <h5> total price = {totalPrice.toFixed(2)} $</h5>
          <Button
            variant="outlined"
            color="error"
            onClick={() => dispatch(clear())}
          >
            clear
          </Button>
        </div>
        <table className="  border-separate border-spacing-2 border border-slate-500 ">
          <thead>
            <tr>
              <th>#</th>
              <th class="border-double border-4 border--black	 w-96 ">Title</th>
              <th class="border-double border-4 border--black	 w-96 ">Image</th>
              <th class="border-double border-4 border--black	 w-96 ">
                Quantity
              </th>
              <th class="border-double border-4 border--black	 w-96 ">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr key={product.id}>
                  <td> {product.id} </td>
                  <td class="border-double border-4 border--black w-96">
                    {product.title}
                  </td>
                  <td class="border-double border-4 border--black w-96">
                    {" "}
                    <img
                      className="h-20"
                      src={product.image}
                      alt="product-image"
                    />{" "}
                  </td>
                  <td class="border-double border-4 border--black w-96 ">
                    <button onClick={()=>dispatch(decreament(product))}>-</button>
                    {product.quantity}
                    <button  onClick={()=>dispatch(increament(product))}>+</button>

                  </td>
                  <td class="border-double border-4 border--black w-96">
                    {product.price}
                  </td>
                  <td class="">
                    <IconButton
                      onClick={() => dispatch(removeFromCard(product))}
                      aria-label="delete"
                      size="large"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
