import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCartContainer,
  ProductImage,
  NameSpan,
  PriceSpan,
  Footer,
  AddProductToCartButton,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

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
