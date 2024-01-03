import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";


const MainNav = () => {
    const carts = useAppSelector(state=>state.cart.items);

    return (
        <header className="w-full h-16 items-center border-b-2 flex">
            <nav className="w-1/3 mx-auto mt-4">
                <ul className="flex justify-between font-bold text-2xl font-mono">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/items'>Items</Link></li>
                    <li><Link to='/cart'>Cart({carts.length})</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNav;