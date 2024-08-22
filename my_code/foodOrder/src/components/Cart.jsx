import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export function Cart() {

    const cart = useContext(CartContext);
    const cartPrice = cart.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const userProgress = useContext(UserProgressContext);
    function closeCartHandler() {
        userProgress.hideCart();
    }

    function handleGoToCheckout() {
        userProgress.showCheckout();
    }

    return (
        <Modal className="cart" 
            open={userProgress.progress === 'cart'} 
            onClose={userProgress.progress === 'cart' ? closeCartHandler : null}
        >
            <h2>Cart Items</h2>
            <ul>
                {
                    cart.items.map((item) => (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onIncrease={() => cart.addItem(item)}
                            onDecrease={() => cart.removeItem(item.id)}
                        />
                    ))
                }
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartPrice)}
            </p>
            <p className="modal-actions">
                <Button textOnly onClick={closeCartHandler}>Close</Button>
                {cart.items.length > 0 &&
                    <Button onClick={handleGoToCheckout}>Go to checkout</Button>
                }
            </p>
        </Modal>
    );
}