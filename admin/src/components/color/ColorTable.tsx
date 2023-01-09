import React, { useContext, useState } from "react";
import TableHeading from "../TableHeading";
import AddColorDialog from "./AddColorDialog";
import { MdDelete } from "react-icons/md";
import { useDeleteColorMutation, useGetColorsQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function ColorTable() {
  const { deleteSuccessToast } = useContext(GlobalContext);
  const { data: colors } = useGetColorsQuery();
  const [deleteColor] = useDeleteColorMutation();

  const deleteHandler = async (id: any) => {
    try {
      deleteColor(id);
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
        <TableHeading heading={"All Colors"} />
        <AddColorDialog />
      </div>

      <div className="customCard mt-2  ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">I.D</th>
              <th scope="col">Colors Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {colors &&
              colors.map((color: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{color.name}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => deleteHandler(color.id)}
                      aria-label="delete"
                    />
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
