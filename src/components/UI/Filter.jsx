import styled from "styled-components";
import Button from "./Button";
import theme from "../../styles/theme";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaFilter } from "react-icons/fa";
import { searchedProductActions } from "../../store/slices/searched-product-slice";
import { allProductActions } from "../../store/slices/all-product-slice";

const mainColor = theme.palette.purple;

const SelectBox = styled.select`
  border-radius: 4px;
  border: 1.8px solid ${mainColor};
  height: 1.5rem;
  margin: 0.2rem;
  font-size: 13px;
`;

const SelectOption = styled.option`
  background: ${mainColor};
`;

function Filter() {
  const dispatch = useDispatch();

  const [amountFilter, setAmountFilter] = useState(false);
  const [interestRateFilter, setInterestRateFilter] = useState(false);

  const allProducts = useSelector((state) => {
    return state.allProduct.initialData;
  });

  const filteredAllProducts = useSelector((state) => {
    return state.allProduct.filteredData;
  });

  const searchedProduct = useSelector((state) => {
    return state.searchedProduct.initialData;
  });

  const filteredSearchedProduct = useSelector((state) => {
    return state.searchedProduct.filteredData;
  });

  const isSearched = useSelector((state) => {
    return state.searchedProduct.isSearched;
  });

  const jobFilterChangeHandler = (e) => {
    if (isSearched) {
      if (e.target.value === "all") {
        dispatch(
          searchedProductActions.updateSearedFilteredProduct(searchedProduct)
        );
      } else {
        dispatch(
          searchedProductActions.updateSearedFilteredProduct(
            searchedProduct.filter((product) => e.target.value === product.job)
          )
        );
      }
    } else {
      if (e.target.value === "all") {
        dispatch(allProductActions.updateAllFilteredProduct(allProducts));
      } else {
        dispatch(
          allProductActions.updateAllFilteredProduct(
            allProducts.filter((product) => e.target.value === product.job)
          )
        );
      }
    }
  };

  const amountFilterChangeHandler = (e) => {
    e.preventDefault();
    setAmountFilter(!amountFilter);
    if (isSearched) {
      amountFilter
        ? dispatch(
            searchedProductActions.updateSearedFilteredProduct(
              [...filteredSearchedProduct].sort((a, b) => b.amount - a.amount)
            )
          )
        : dispatch(
            searchedProductActions.updateSearedFilteredProduct(
              [...filteredSearchedProduct].sort((a, b) => a.amount - b.amount)
            )
          );
    } else {
      amountFilter
        ? dispatch(
            allProductActions.updateAllFilteredProduct(
              [...filteredAllProducts].sort((a, b) => b.amount - a.amount)
            )
          )
        : dispatch(
            allProductActions.updateAllFilteredProduct(
              [...filteredAllProducts].sort((a, b) => a.amount - b.amount)
            )
          );
    }
  };

  const interestRateFilterChangeHandler = (e) => {
    e.preventDefault();
    setInterestRateFilter(!interestRateFilter);
    if (isSearched) {
      interestRateFilter
        ? dispatch(
            searchedProductActions.updateSearedFilteredProduct(
              [...filteredSearchedProduct].sort(
                (a, b) => b.interestRate - a.interestRate
              )
            )
          )
        : dispatch(
            searchedProductActions.updateSearedFilteredProduct(
              [...filteredSearchedProduct].sort(
                (a, b) => a.interestRate - b.interestRate
              )
            )
          );
    } else {
      interestRateFilter
        ? dispatch(
            allProductActions.updateAllFilteredProduct(
              [...filteredAllProducts].sort(
                (a, b) => b.interestRate - a.interestRate
              )
            )
          )
        : dispatch(
            allProductActions.updateAllFilteredProduct(
              [...filteredAllProducts].sort(
                (a, b) => a.interestRate - b.interestRate
              )
            )
          );
    }
  };

  return (
    <div>
      <FaFilter size=".9rem" />
      <span style={{ margin: "2px" }}>필터</span>

      <SelectBox
        id="job"
        onChange={(e) => {
          jobFilterChangeHandler(e);
        }}
      >
        <SelectOption value="all">모든 직업</SelectOption>
        <SelectOption value="EMPLOYEE">직장인</SelectOption>
        <SelectOption value="STUDENT">학생</SelectOption>
        <SelectOption value="FREELANCER">프리랜서</SelectOption>
        <SelectOption value="UNEMPLOYED">무직</SelectOption>
      </SelectBox>

      <Button onClick={amountFilterChangeHandler}>
        {amountFilter ? "금액 높은순" : "금액 낮은순"}
      </Button>
      <Button onClick={interestRateFilterChangeHandler}>
        {interestRateFilter ? "금리 높은순" : "금리 낮은순"}
      </Button>
    </div>
  );
}

export default Filter;
