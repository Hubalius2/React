import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { useContext } from 'react';

export default function Header() {

    const cart = useContext(CartContext);
    const cartItems = cart.items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0);

    const progress = useContext(UserProgressContext);
    function showCartHandler() {
        progress.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={showCartHandler}>Cart ({cartItems}) </Button>
            </nav>
        </header>
    );
}