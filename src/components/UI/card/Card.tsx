import { Link } from "react-router-dom";
import { type Session } from "../../../models/session";
import Button from "../button/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addToCart } from "../../../store/cart-slice";
import { useState } from "react";

type CardProps = {
    el: Session
}

function Card({ el }: CardProps) {
    const [disabledBtn, setDisabledBtn] = useState(false)
    const cartItems = useAppSelector((state) => state.cart.items)

    const dispatch = useAppDispatch()
    const id = el.id
    const title = el.title
    const price = el.price

    function handleAddToCart() {
        const isExist = cartItems.findIndex((item) => item.id === id)
        

        if (isExist >= 0) {
            setDisabledBtn(prev => !prev)
        } else {
            dispatch(addToCart({id, title, price}))
        }
        
    }

    return (
        <div>
            <Link to={`/sessions/${el.id}`}>
                <h3>{el.title}</h3>
            </Link>
            <Button el="button" disabled={disabledBtn} onClick={handleAddToCart}>Add to cart</Button>
        </div>
    )
}

export default Card