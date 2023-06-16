import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TicketContext } from "../../../context/TicketContext";

const UpdateModal = ({ update, setUpdate }) => {
  const { tickets, setTickets } = useContext(TicketContext);
  const objIndex = tickets.findIndex((obj) => obj.id === update);
  console.log(objIndex);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    if (objIndex !== -1) {
      reset({
        ticket: tickets[objIndex]?.ticket || "",
        description: tickets[objIndex]?.description || "",
      });
    }
  }, [objIndex, reset, tickets]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleForm = (data) => {
    const ticket = data.ticket;
    const description = data.description;
    // console.log(objIndex, ticket, description);
    const updatedTickets = [...tickets];
    updatedTickets[objIndex].ticket = ticket;
    updatedTickets[objIndex].description = description;
    setTickets(updatedTickets);
    setUpdate("");
    reset();
    setIsModalOpen(false);
  };
  const defaultTicketValue = tickets[objIndex]?.ticket || "";
  const defaultDescriptionValue = tickets[objIndex]?.description || "";
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="my_modal_6"
          className="modal-toggle"
          checked={isModalOpen}
          onChange={() => setIsModalOpen(!isModalOpen)}
        />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <form
              onSubmit={handleSubmit(handleForm)}
              className="grid grid-cols-1 gap-3 "
            >
              <div className="grid  grid-cols-12 ">
                <div className="col-span-4 ">
                  <label className="label font-bold">
                    <span>
                      Ticket Type <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <div className=" col-span-8">
                  <div className="grid grid-cols-1 gap-1">
                    {" "}
                    <input
                      {...register("ticket", {
                        required: "This field is required",
                      })}
                      type="text"
                      defaultValue={defaultTicketValue}
                      className="input input-bordered w-11/12 input-primary "
                      autoFocus
                    />
                    {errors.ticket && (
                      <span className="text-red-500 text-[11px]  italic font-bold">
                        {errors.ticket?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid  grid-cols-12 ">
                <div className="col-span-4">
                  <label className="label font-bold">
                    <span>Description</span>
                  </label>
                  {errors.description && (
                    <span className="text-red-500 text-xs italic font-bold">
                      {errors.description?.message}
                    </span>
                  )}
                </div>{" "}
                <textarea
                  {...register("description", {})}
                  type="text"
                  defaultValue={defaultDescriptionValue}
                  className="textarea col-span-8 w-11/12 textarea-info"
                />
              </div>

              <br />
              <div className="flex justify-end gap-4">
                <label
                  htmlFor="my_modal_6"
                  className="btn bg-red-300 text-white hover:bg-red-700 "
                >
                  Close
                </label>

                <input
                  className="btn bg-blue-800 text-white hover:bg-green-700"
                  type="submit"
                  value="Save Changes"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
