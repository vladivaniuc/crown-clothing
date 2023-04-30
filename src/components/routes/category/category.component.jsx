import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../product-card/product-card.component";
import { Fragment } from "react";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/category.selector";
import Spinner from "../../spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  console.log("category is", category);
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("category map inside category is ", categoriesMap["hats"]);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
