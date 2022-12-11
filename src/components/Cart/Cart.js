import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { REMOVE_TO_CART } from '../../redux/Cart/ProductList';


const Cart = () => {

  const dispatch = useDispatch()

const {cartItems} = useSelector((state) => state.cart)


const addOrRemove = (productId) => {
 dispatch(REMOVE_TO_CART(productId))
 
};

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="py-16 bg-blue-200 h-screen" >
          <div className="p-8  md:mx-48    mt-24">
            <p className="text-black text-2xl md:text-5xl text-center">
              Tu Carrito esta Vacido Puedes mirar nuestros productos Aqui{" "}
            </p>
            <Link to="/product" className="flex justify-center mt-10 ">
              <button className="p-1 px-2 bg-boton rounded-md text-xl ">
                Productos
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='px-10 mx-auto py-16 bg-blue-200 h-screen mt-5 '>
          <div className=''>
            <h1 className='text-2xl'>Tu Producto se Agrego Correctamente</h1>

            <div className="p-4 mx-auto mt-10" >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cartItems?.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="bg-cardOverlay max-w-sm rounded-md  "
                    >
                      <div className=" p-2 max-w-sm">
                        <h1> {product.title} </h1>

                        <div className="grid grid-cols-3">
                          <div className="col-span-2 ">
                            <div className='justify-center items-center flex flex-col '>
                              <h1 className=" flex mt-2">
                                {" "}
                                {product.category}{" "}
                              </h1>
                              <h1 className=" flex mt-1">
                                {" "}
                                $ {product.price}{" "}
                              </h1>
                              <button
                                onClick={() => addOrRemove(product.id)}
                                className=" bg-boton p-1 px2 rounded-md  mt-4  "
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                          <img
                            src={product.image}
                            alt=""
                            className="w-[100px]"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart