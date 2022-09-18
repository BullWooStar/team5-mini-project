import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/UI/Card";
import SearchInput from "../../components/UI/SearchInput";
import Filter from "../../components/UI/Filter";
import Loading from "../../components/UI/Loading";

import { getAllProduct } from "../../store/slices/all-product-slice";
import Button from "../../components/UI/Button";

function AllProductPage() {
  const [products, setProducts] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => {
    return state.allProduct.allproductData;
  });

  const allProductIsLoading = useSelector((state) => {
    return state.allProduct.isLoding;
  });

  const searchedProducts = useSelector((state) => {
    return state.searchedProduct.searchedproductData;
  });

  const searchedProductIsLoading = useSelector((state) => {
    return state.searchedProduct.isLoading;
  });

  const backtoAllProduct = () => {
    setIsSearched(false);
    setProducts(allProducts);
  };

  useEffect(() => {
    dispatch(getAllProduct());
    setProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    setProducts(searchedProducts);
  }, [searchedProducts]);

  return (
    <div>
      <div>
        <SearchInput setIsSearched={setIsSearched} />

        {isSearched ? (
          <div>
            <div style={{ display: "flex" }}>
              <h2>검색상품</h2>
              <Button
                style={{ height: "25px", margin: "auto 0", marginLeft: "10px" }}
                onClick={backtoAllProduct}
              >
                전체상품으로 돌아가기
              </Button>
            </div>
            {searchedProductIsLoading && <Loading />}
          </div>
        ) : (
          <div>
            <h2>전체상품</h2>
            {allProductIsLoading && <Loading />}
          </div>
        )}

        <Filter
          products={products}
          setProducts={setProducts}
          allProducts={allProducts}
          searchedProducts={searchedProducts}
          isSearched={isSearched}
        />

        {products &&
          products.map((item) => <Card key={item.id} product={item} />)}
      </div>
    </div>
  );
}

export default AllProductPage;
