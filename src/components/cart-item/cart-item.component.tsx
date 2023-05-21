import {
  CartItemContainer,
  ItemDetails,
  Name,
  Image,
} from "./cart-item.styles";

import { CartItem as CI } from "../../store/cart/cart.types";
import { FC } from "react";

export type CartItemProps = {
  cartItem: CI;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
