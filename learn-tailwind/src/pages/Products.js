import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../component/Card";
import { fetchProducts } from "../rtk/productSlive";

const Products = () => {
  const { products } = useSelector((state) => state);
  console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className=" bg-gray-700 shadow-lg rounded-xl p-6 mt-5 ">
      <div className="flex flex-row flex-wrap justify-between my-5">
        {products.map((product) => (
          <CustomCard
            key={product.id}
            {...product}
            product={product}
            className="w-72 m-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
