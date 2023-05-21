import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  QuantitySpan,
  NameAndPriceSpan,
  Arrow,
  ValueSpan,
  RemoveButton,
} from "./checkout-item.styles";
import { CartItem } from "../../store/cart/cart.types";
import { FC } from "react";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    if (cartItems && cartItems.length>0) {
      dispatch(clearItemFromCart(cartItems, cartItem));
    }
  };

  const addItemHandler = () => {
    if (cartItems) {
    dispatch(addItemToCart(cartItems, cartItem))
  }
  };
  
  const removeItemHandler = () => {
    if (cartItems && cartItems.length>0) {
      dispatch(removeItemFromCart(cartItems, cartItem));
    }
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <NameAndPriceSpan>{name}</NameAndPriceSpan>

      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantitySpan>

      <NameAndPriceSpan>{price}</NameAndPriceSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
