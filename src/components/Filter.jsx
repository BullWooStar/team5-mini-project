import styled from "styled-components";
import Button from "./UI/Button";
import theme from "../styles/theme";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaFilter } from "react-icons/fa";
import { shownProductActions } from "../store/slices/shown-product-slice";
import { DUMMY_DATA } from "../utils/constants";

const mainColor = theme.palette.purple;

const FilterArea = styled.form`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
`;

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
    return state.allProduct.data;
  });

  const searchedProduct = useSelector((state) => {
    return state.searchedProduct.data;
  });

  const shownAllProduct = useSelector((state) => {
    return state.shownProduct.allData;
  });

  const shownSearchedProduct = useSelector((state) => {
    return state.shownProduct.searchedData;
  });

  const isSearched = useSelector((state) => {
    return state.shownProduct.isSearched;
  });

  const jobFilterChangeHandler = (e) => {
    if (isSearched) {
      if (e.target.value === "all") {
        dispatch(
          shownProductActions.updateShownSearchedProduct(searchedProduct)
        );
      } else {
        dispatch(
          shownProductActions.updateShownSearchedProduct(
            shownSearchedProduct.filter(
              (product) => e.target.value === product.job
            )
          )
        );
      }
    } else {
      if (e.target.value === "all") {
        dispatch(shownProductActions.updateShownAllProduct(DUMMY_DATA));
      } else {
        dispatch(
          shownProductActions.updateShownAllProduct(
            DUMMY_DATA.filter((product) => e.target.value === product.job)
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
            shownProductActions.updateShownSearchedProduct(
              [...shownSearchedProduct].sort((a, b) => b.amount - a.amount)
            )
          )
        : dispatch(
            shownProductActions.updateShownSearchedProduct(
              [...shownSearchedProduct].sort((a, b) => a.amount - b.amount)
            )
          );
    } else {
      amountFilter
        ? dispatch(
            shownProductActions.updateShownAllProduct(
              [...shownAllProduct].sort((a, b) => b.amount - a.amount)
            )
          )
        : dispatch(
            shownProductActions.updateShownAllProduct(
              [...shownAllProduct].sort((a, b) => a.amount - b.amount)
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
            shownProductActions.updateShownSearchedProduct(
              [...shownSearchedProduct].sort(
                (a, b) => b.interestRate - a.interestRate
              )
            )
          )
        : dispatch(
            shownProductActions.updateShownSearchedProduct(
              [...shownSearchedProduct].sort(
                (a, b) => a.interestRate - b.interestRate
              )
            )
          );
    } else {
      interestRateFilter
        ? dispatch(
            shownProductActions.updateShownAllProduct(
              [...shownAllProduct].sort(
                (a, b) => b.interestRate - a.interestRate
              )
            )
          )
        : dispatch(
            shownProductActions.updateShownAllProduct(
              [...shownAllProduct].sort(
                (a, b) => a.interestRate - b.interestRate
              )
            )
          );
    }
  };

  return (
    <FilterArea>
      <FaFilter size=".9rem" />
      <span style={{ margin: "2px" }}>필터</span>

      <SelectBox
        id="job"
        onChange={(e) => {
          jobFilterChangeHandler(e);
        }}
      >
        <SelectOption value="all">모든 직업</SelectOption>
        <SelectOption value="직장인">직장인</SelectOption>
        <SelectOption value="학생">학생</SelectOption>
        <SelectOption value="프리랜서">프리랜서</SelectOption>
        <SelectOption value="무직">무직</SelectOption>
      </SelectBox>

      <Button onClick={amountFilterChangeHandler}>
        {amountFilter ? "금액 높은순" : "금액 낮은순"}
      </Button>
      <Button onClick={interestRateFilterChangeHandler}>
        {interestRateFilter ? "금리 높은순" : "금리 낮은순"}
      </Button>
    </FilterArea>
  );
}

export default Filter;
