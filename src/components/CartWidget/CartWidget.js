/**
 * @Author: Your name
 * @Date:   2023-10-03 19:36:23
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-10-03 21:26:29
 */
import cart from "./assets/cart.svg";
import "./CartWidget.css";

function CartWidget (){

    return (
        <div>
            <img src={cart} className= "cart-big" alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget;