import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import Sidebar from "../sidebar/sidebar.component";
import Spinner from "../../components/spinner/spinner.component";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";

import "./category.styles.scss";
import SHOP_DATA from "../../shop-data";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="shop-container">
          <Sidebar />
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Category;
