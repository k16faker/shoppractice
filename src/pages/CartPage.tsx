import { useAppSelector } from "../store/store";
import { useAppDispatch } from "../store/store"
import { removeCart } from "../store/cartSlice";

function CartPage(): JSX.Element {
  const carts = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <div>
      <ul className="w-4/12 mx-auto grid grid-cols-2 leading-6">
        {carts.map((cart) => (
          <li key={cart.name} className="border rounded-xl text-center w-4/12 mx-auto">
            <h3>{cart.name}</h3>
            <p>{cart.price}$</p>
            <p>Quantity : {cart.quantity}</p>
            <button onClick={()=> dispatch(removeCart({name:cart.name}))}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="w-1/12 mx-auto mt-9">
        <button className="w-8/12 h-8 mx-auto rounded-xl bg-sky-500 px-3 hover:scale-110 transition-all">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
