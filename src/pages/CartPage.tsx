import { useAppSelector } from "../store/store";
import { useAppDispatch } from "../store/store"
import { removeCart } from "../store/cartSlice";
import { useState } from "react";

function CartPage(): JSX.Element {
  const carts = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [isExist, setIsExist] = useState<boolean>(false);

  if(carts.length === 0) {
    return (
      <div className="border rounded-xl w-6/12 h-36 mx-auto mt-6 border-slate-800 items-center">
        <p className="text-center mt-10">There is no item in your cart</p>
      </div>
    )
  }

  return (
    <div className="border rounded-xl w-6/12 mx-auto mt-6 border-slate-800">
      <ul className="mx-auto leading-6 mt-6">
        {carts.map((cart) => (
          <li key={cart.name} className="flex border rounded-xl text-center w-6/12 h-40 px-6 mx-auto items-center justify-between">
            <h3>{cart.name}</h3>
            <div className="flex w-6/12 justify-between">
              <div className="mr-4">
                <p>{cart.price}$</p>
                <p>Quantity : {cart.quantity}</p>
                <p>Price : {cart.price * cart.quantity}$</p>
              </div>
              <button className="bg-red-500 h-8 rounded-xl px-2 my-auto items-center" onClick={()=> dispatch(removeCart({name:cart.name}))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
        <button className="w-1/12 h-8 mx-auto rounded-xl bg-sky-500 px-3 hover:scale-110 transition-all">Checkout</button>
    </div>
  );
}

export default CartPage;
