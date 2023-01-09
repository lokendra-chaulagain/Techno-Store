import React, { useState } from "react";
import TableHeading from "../TableHeading";
import AddColorDialog from "./AddColorDialog";
import { MdDelete } from "react-icons/md";
import { useDeleteColorMutation, useGetColorsQuery } from "../../redux/api/globalApi";

export default function ColorTable() {
  const { data: colors } = useGetColorsQuery();
  const [deleteColor] = useDeleteColorMutation();
  
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
        <TableHeading heading={"All Colors"} />
        <AddColorDialog />
      </div>

      <div className="customCard mt-2  ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
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
                      onClick={() => deleteColor(color.id)}
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
