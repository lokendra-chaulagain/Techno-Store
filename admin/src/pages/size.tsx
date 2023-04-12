import React from "react";
import Header from "../components/Header";
import SizeTable from "../components/size/SizeTable";

export default function Size() {
  return (
    <div>
      <Header pageTitle={"Sizes"} />
      <SizeTable />
    </div>
  );
}
