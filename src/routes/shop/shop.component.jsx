import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { scrollToOffset } from "../../utils/helper";
import { CategoriesProvider } from "../../contexts/categories.context";
import ShopNavigation from "../../components/shop-navegation/shop-navigation.component";
import Category from "../category/category.component";
import Footer from "../../components/footer/footer.component";
import { useDispatch } from "react-redux";

import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    scrollToOffset(0);
  }, []);

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <CategoriesProvider>
      <Routes>
        <Route path="/" element={<ShopNavigation />}>
          <Route path=":category" element={<Category />} />
        </Route>
      </Routes>
      <Footer />
      <div className="scroll-to-top" onClick={() => scrollToOffset(0)} />
    </CategoriesProvider>
  );
};

export default Shop;
