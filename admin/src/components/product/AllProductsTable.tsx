import React, { useContext, useState } from "react";
import Link from "next/link";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import { AiTwotoneEdit } from "react-icons/ai";
import Image from "next/image";
import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function AllProductsTable() {
  const { deleteSuccessToast } = useContext(GlobalContext);
  const { data: products } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const deleteHandler = async (id: number) => {
    try {
      deleteProduct(id);
      deleteSuccessToast();
    } catch (error) {
      console.log(error);
    }
  };

  const [page, setPage] = useState(0);
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
  console.log(page);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between  ">
        <TableHeading heading={"All Products"} />
        <Link href={"/product/create"}>
          <Button
            size="large"
            className="customCard px-4">
            Add New
          </Button>
        </Link>
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">I.D</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price Now</th>
              <th scope="col">Price Previous</th>
              <th scope="col">Active</th>
              <th scope="col">Best Seller</th>
              <th scope="col">Featured</th>
              <th scope="col">HotSale</th>
              <th scope="col">isRecent</th>
              <th scope="col">OutOfStock</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.image}</td>
                  <td>{product.description}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.priceNow}</td>
                  <td>{product.pricePrevious}</td>

                  {/* <td className="small">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        sizes
                      </button>
                      <ul className="dropdown-menu">
                        {product.size &&
                          product.size.map((item: any, index: any) => (
                            <li
                              key={index}
                              className="dropdown-item">
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </td> */}

                  {/* <td className="small">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        colors
                      </button>
                      <ul className="dropdown-menu">
                        {product.color &&
                          product.color.map((item: any, index: any) => (
                            <li
                              key={index}
                              className="dropdown-item">
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </td> */}

                  {product.isActive == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isActive == 0 && <td className="active_status_red_color">No</td>}

                  {product.isBestSeller == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isBestSeller == 0 && <td className="active_status_red_color">No</td>}

                  {product.isFeatured == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isFeatured == 0 && <td className="active_status_red_color">No</td>}

                  {product.isHotSale == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isHotSale == 0 && <td className="active_status_red_color">No</td>}

                  {product.isRecent == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isRecent == 0 && <td className="active_status_red_color">No</td>}

                  {product.isOutOfStock == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isOutOfStock == 0 && <td className="active_status_red_color">No</td>}

                  <td>
                    <div className="d-flex ">
                      <Link href={`/product/${product._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteHandler(product.id)}
                        aria-label="delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end pe-5 mt-2">
        <nav aria-label="Page navigation ">
          <ul className="pagination">
            <li className="page-item">
              <a
                onClick={handlePrev}
                className="page-link rounded-0 h6 next_prev cp">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                onClick={handleNext}
                className="page-link rounded-0 h6 next_prev px-4 cp">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
