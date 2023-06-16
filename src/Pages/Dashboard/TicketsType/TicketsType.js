import React, { useContext, useState } from "react";
import { TicketContext } from "../../../context/TicketContext";
import UpdateModal from "./UpdateModal";
import { toast } from "react-hot-toast";

const TicketsType = () => {
  const { tickets, setTickets } = useContext(TicketContext);
  const [update, setUpdate] = useState("");

  const deleteTicket = (taskId) => {
    const updatedTicket = tickets.filter((task) => task.id !== taskId);
    setTickets(updatedTicket);
    toast.success("Deleted");
  };

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div>
      <table className="table table-compact w-full">
        <thead className="text-blue-800  text-lg rounded-3xl bg-white  ">
          <tr>
            <th>Serial No</th>
            <th>Ticket Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets?.map((task, i) => (
            <tr className=" text-base hover" key={task.id}>
              <th className=" font-bold ">{i + 1}.</th>
              <td className=" font-semibold">{task?.ticket}</td>
              <td className=" font-semibold"> {task?.description}</td>
              <td className=" font-semibold">
                <div className="dropdown dropdown-top dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-xs hover:text-red-600   "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </label>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-compact min-w-max  p-2 shadow bg-warning text-primary-content mb-1 z-10"
                  >
                    <div className="p-1 ">
                      <h5 className="card-title text-sm font-bold ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 text-error"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                          </svg>
                        </span>
                        Delete
                      </h5>
                      <h5 className="text-xs">
                        Are you sure you to delete this?
                      </h5>
                      <div className="text-end">
                        <button
                          onClick={handleClick}
                          className="btn mr-1 btn-xs"
                        >
                          No
                        </button>

                        <button
                          className="btn btn-xs btn-error"
                          onClick={() => deleteTicket(task.id)}
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-xs ml-0  sm:ml-2"
                  onClick={() => setUpdate(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 hover:text-green-600 font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Serial No</th>
            <th>Ticket Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
      <UpdateModal update={update} setUpdate={setUpdate}></UpdateModal>
    </div>
  );
};

export default TicketsType;
