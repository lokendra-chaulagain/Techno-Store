import React, { useContext, useState } from "react";
import TableHeading from "../TableHeading";
import AddSizeDialog from "./AddSizeDialog";
import { MdDelete } from "react-icons/md";
import { useDeleteSizeMutation, useGetSizesQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function SizeTable() {
  const { deleteSuccessToast } = useContext(GlobalContext);
  const { data: sizes } = useGetSizesQuery();
  const [deleteSize] = useDeleteSizeMutation();

  const deleteHandler = async (id: any) => {
    try {
      deleteSize(id);
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
              <th scope="col">I.D</th>
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
                  <th scope="row">{size.id}</th>
                  <td>{size.name}</td>

                  <td>
                    <div className="d-flex ">
                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteHandler(size.id)}
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
