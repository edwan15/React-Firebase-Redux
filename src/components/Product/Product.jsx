import React, { useEffect, useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
const Product =  () => {
  const [product, setProduct] = useState([]);

  const api = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) =>  res.json())
    .then((json) =>  setProduct(json));
}

useEffect(() => {
 api()
}, [])



  return (
    <>
      <div className=" mx-auto bg-blue-200  py-12">
        <div className=" px-4">
          <h1 className="text-3xl text-blue-900 font-bold flex gap-4 mb-4 :">
            Productos <TbShoppingCartPlus />
          </h1>

          <h1 className="text-xl mb-10 ">
            Aqui una Lista de Productos Para ingresar en el carrito{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 ">
          {product.map((user) => {
            return (
              <div key={user.id} className="border-solid border-2 rounded-lg bg-cardOverlay">
                <div >
                  <h1 className="text-blue-900 font-bold text-lg p-2">{user.title}</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2">
                    <p className="col-span-2 justify-center items-center">{user.description}</p>
                    <div className="flex justify-center items-center">
                    <img src={user.image} alt="Ropa" className=" w-[130px] h-[150px] left-3 md:w-[200px] md:h-[200px] md:object-contain    col-start-3  rounded-lg" />

                    </div>
                  </div>
                  <div className="p-2">
                    <h2>Category : {user.category}</h2>
                    <p>Clasificion : {user.rating.rate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
