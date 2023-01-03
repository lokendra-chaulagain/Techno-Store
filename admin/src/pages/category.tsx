import React from "react";
import CategoryTable from "../components/category/CategoryTable";
import Header from "../components/Header";

function Category() {
  return (
    <>
      <Header pageTitle={"Categories"} />
      <CategoryTable />
      {/* <ColorTable /> */}
      {/* <SizeTable /> */}
    </>
  );
}
export default Category;
