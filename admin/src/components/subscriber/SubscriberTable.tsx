import React, { useContext, useState } from "react";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import { format } from "timeago.js";
import { useDeleteSubscriberMutation, useGetSubscribersQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function SubscriberTable() {
  const { deleteSuccessToast } = useContext(GlobalContext);
  const { data: subscribers } = useGetSubscribersQuery();
  const [deleteSubscriber] = useDeleteSubscriberMutation();

  const deleteSubscriberHandler = async (id: number) => {
    try {
      deleteSubscriber(id);
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
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All subscribers"} />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">I.D</th>
              <th scope="col">Email</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers &&
              subscribers.map((subscriber: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{subscriber.id}</th>
                  <td>{subscriber.email}</td>
                  <td>{format(subscriber.createdAt)}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => deleteSubscriberHandler(subscriber.id)}
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
