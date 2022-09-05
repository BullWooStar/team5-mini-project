import React, { useMemo } from "react";
import * as S from "./style";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Header";
import NavBar from "../../NavBar";

function StyleLayout() {
  const pathname = useLocation().pathname;

  const headerPath = useMemo(
    () => ["/allproduct", "/cart", "/curation", "promotion"],
    []
  );
  const navPath = useMemo(() => ["/curation", "/allproduct", "promotion"], []);

  return (
    <>
      {headerPath.includes(pathname) && <Header />}
      <S.Layout>
        <Outlet />
      </S.Layout>
      {navPath.includes(pathname) && <NavBar />}
    </>
  );
}

export default StyleLayout;
