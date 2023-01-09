import React from "react";
import { useRouter } from "next/router";
import EditProductTable from "../../components/product/EditProductTable";

const Id = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <EditProductTable />
    </>
  );
};

export default Id;
