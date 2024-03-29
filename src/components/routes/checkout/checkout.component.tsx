import CheckoutItem from "../../checkout-item/checkout-item.component";
import PaymentForm from "../../payment-form/payment-form.component";
import {
  HeaderBlock,
  CheckoutHeader,
  StyledTotal,
  CheckoutContainer,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems && cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
          <StyledTotal>Total: ${cartTotal}</StyledTotal>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
