import styled from "styled-components";
import Button from "./Button";
import theme from "../../styles/theme";
import { useState } from "react";

import { FaFilter } from "react-icons/fa";

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

function Filter({
  products,
  setProducts,
  isSearched,
  allProducts,
  searchedProducts,
}) {
  const [amountFilter, setAmountFilter] = useState(false);
  const [interestRateFilter, setInterestRateFilter] = useState(false);

  const jobFilterChangeHandler = (e) => {
    if (e.target.value === "all") {
      setProducts(isSearched ? searchedProducts : allProducts);
    } else {
      setProducts(
        isSearched
          ? searchedProducts.filter((product) => e.target.value === product.job)
          : allProducts.filter((product) => e.target.value === product.job)
      );
    }
  };

  const amountFilterChangeHandler = (e) => {
    e.preventDefault();
    setAmountFilter(!amountFilter);
    amountFilter
      ? setProducts([...products].sort((a, b) => b.amount - a.amount))
      : setProducts([...products].sort((a, b) => a.amount - b.amount));
  };

  const interestRateFilterChangeHandler = (e) => {
    e.preventDefault();
    setInterestRateFilter(!interestRateFilter);

    interestRateFilter
      ? setProducts(
          [...products].sort((a, b) => b.interestRate - a.interestRate)
        )
      : setProducts(
          [...products].sort((a, b) => a.interestRate - b.interestRate)
        );
  };

  return (
    <div>
      <FaFilter size=".9rem" />
      <span style={{ margin: "2px" }}>필터</span>
      <label htmlFor="job">직업</label>
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
    </div>
  );
}

export default Filter;
