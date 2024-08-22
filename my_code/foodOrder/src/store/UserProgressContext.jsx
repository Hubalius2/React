import { createContext } from "react";
import { useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider( {children} ){

    const [userProgress, setProgress] = useState('');

    function showCart(){
        setProgress('cart');
    }

    function hideCart(){
        setProgress('');
    }

    function showCheckout(){
        setProgress('checkout');
    }

    function hideCheckout(){
        setProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}



export default UserProgressContext;