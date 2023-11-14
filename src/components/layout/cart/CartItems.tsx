import { removeFromCart } from '../../../store/cart-slice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import Button from '../../UI/button/Button'

function CartItems() {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.items)

    function handleRemoveFromCart(id: string) {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            {cartItems.length === 0 && <p>No items in cart.</p>}
            {cartItems.length > 0 && (
                <>
                    {cartItems.map((item) => {
                        return <div key={item.id}>
                            <h3>{item.title}</h3>
                            <Button el='button' disabled={false} onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                        </div>
                    })}
                </>
            )}
            
        </div>
    )
}

export default CartItems