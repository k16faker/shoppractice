
import { useAppDispatch } from "../../store/store"
import { addCart } from "../../store/cartSlice";


interface ItemsFormProps {
  items: {
    name: string;
    description: string;
    image: string;
    price: number;
  }[];
}

function ItemsForm(props:ItemsFormProps): JSX.Element {

  
  const btnClass = "rounded-xl bg-sky-500 px-3 hover:scale-110 transition-all"
  const listClass = "text-center font-mono leading-9 border-2 border-slate-600 rounded-xl w-96 mx-auto p-5"

  const dispatch = useAppDispatch();


  return (
    <div className="w-10/12 mx-auto mt-6">
      <ul className="grid grid-cols-3">
        {props.items.map((item) => (
          <li key={item.name} className={listClass}>
            <img src={item.image} alt={item.name} width={150} height={70} className="mx-auto"/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}$</p>
            <button className={btnClass} onClick={()=>dispatch(addCart({name: item.name, price: item.price}))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsForm;
