import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  QuantitySpan,
  NameAndPriceSpan,
  Arrow,
  ValueSpan,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

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
