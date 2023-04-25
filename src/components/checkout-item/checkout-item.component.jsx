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
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
