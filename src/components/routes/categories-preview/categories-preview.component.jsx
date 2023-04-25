import { Fragment } from "react";
import CategoryPreview from "../../category-preview/category-preview.component";
import { selectCategoriesMap } from "../../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
    {isLoading? <Spinner/> : 
      (Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      }))}
    </Fragment>
  );
};

export default CategoriesPreview;
