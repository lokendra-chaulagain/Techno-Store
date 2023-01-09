import React, { useState } from "react";
import TableHeading from "../TableHeading";
import AddSizeDialog from "./AddSizeDialog";
import { MdDelete } from "react-icons/md";
import { useDeleteSizeMutation, useGetSizesQuery } from "../../redux/api/globalApi";

export default function SizeTable() {
  const { data: sizes } = useGetSizesQuery();
  const [deleteSize] = useDeleteSizeMutation();

  
  const [page, setPage] = useState(0);
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
  console.log(page)

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Sizes"} />
        <AddSizeDialog />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Color Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sizes &&
              sizes.map((size: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{size.name}</td>

                  <td>
                    <div className="d-flex ">
                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteSize(size.id)}
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
