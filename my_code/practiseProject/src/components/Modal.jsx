import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        };
    });

    return (
        createPortal(
            <dialog ref={dialog} className='backdrop:bg-stone-900/70 p-4 rounded'>
                {children}
                <form method="dialog">
                    <Button>
                        {buttonCaption}
                    </Button>
                </form>
            </dialog>,
            document.getElementById('modal-root'))
    );

});

export default Modal;