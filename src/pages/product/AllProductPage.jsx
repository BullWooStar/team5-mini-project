import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/UI/Card";
import SearchInput from "../../components/UI/SearchInput";
import Filter from "../../components/UI/Filter";
import Loading from "../../components/UI/Loading";

import { getAllProduct } from "../../store/slices/all-product-slice";

function AllProductPage() {
  const dispatch = useDispatch();

  const isSearched = useSelector((state) => {
    return state.searchedProduct.isSearched;
  });

  const filteredAllProducts = useSelector((state) => {
    return state.allProduct.filteredData;
  });

  const allProductIsLoading = useSelector((state) => {
    return state.allProduct.isLoding;
  });

  const filteredSearchedProduct = useSelector((state) => {
    return state.searchedProduct.filteredData;
  });

  const searchedProductIsLoading = useSelector((state) => {
    return state.searchedProduct.isLoading;
  });

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div>
      <div>
        <SearchInput />

        {isSearched ? <h2>검색상품</h2> : <h2>전체상품</h2>}

        <Filter />
        {isSearched ? (
          searchedProductIsLoading ? (
            <Loading />
          ) : filteredSearchedProduct.length > 0 ? (
            filteredSearchedProduct.map((item) => (
              <Card key={item.id} product={item} />
            ))
          ) : (
            <div> 검색결과가 없습니다 </div>
          )
        ) : allProductIsLoading ? (
          <Loading />
        ) : (
          filteredAllProducts.map((item) => (
            <Card key={item.id} product={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default AllProductPage;
