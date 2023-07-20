import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../component/Card";
import { fetchProducts } from "../rtk/productSlive";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Products = () => {
  const  {products,isLoading,error}  = useSelector((state) => state.products);
  const [search,setSearch]=useState('')


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterProduct=products.filter((item)=>{
    return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <div className=" bg-gray-700 shadow-lg rounded-xl p-6 mt-5 ">
       <Form className="d-flex">
            <Form.Control onChange={(e)=>setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      <div className="flex flex-row flex-wrap justify-between my-5">
        {
        !isLoading ? 
        filterProduct.map((product) => (
          <CustomCard
            key={product.id}
            {...product}
            product={product}
            className="w-72 m-4"
          />
        )): <h2 className="text-white container">loading...</h2>}
      </div>
      {
        error && <h1> there is an error in the server plz try later ..</h1>
      }
    </div>
  );
};

export default Products;
