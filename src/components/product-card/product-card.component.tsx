import {
  ProductCartContainer,
  ProductImage,
  NameSpan,
  PriceSpan,
  Footer,
  AddProductToCartButton,
} from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import { FunctionComponent } from "react";

type ProductCardProps = {
  product: CategoryItem 
}

const ProductCard: FunctionComponent<ProductCardProps>= ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </Footer>
      <AddProductToCartButton onClick={addProductToCart}>
        Add to card
      </AddProductToCartButton>
    </ProductCartContainer>
  );
};

export default ProductCard;
