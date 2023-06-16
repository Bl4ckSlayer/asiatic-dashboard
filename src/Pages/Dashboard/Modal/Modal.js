import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TicketsType from "../TicketsType/TicketsType";
import { TicketContext } from "../../../context/TicketContext";
import { toast } from "react-hot-toast";

const Modal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,

    reset,
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tickets, setTickets } = useContext(TicketContext);

  const handleForm = (data) => {
    const description = data.description;
    const ticket = data.ticket;

    const newTask = {
      id: Date.now(),
      ticket: ticket,
      description: description,
    };
    setTickets([...tickets, newTask]);

    reset();
    setIsModalOpen(false);
    toast.success("Ticket Type Added Successfully");
  };

  return (
    <div>
      <div className="text-end">
        <label
          htmlFor="booking-modal"
          className="btn bg-blue-800 border mb-6 font-extrabold hover:bg-slate-600 mt-4 text-white"
        >
          Add Ticket Type
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="booking-modal"
          className="modal-toggle"
          checked={isModalOpen}
          onChange={() => setIsModalOpen(!isModalOpen)}
        />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <form
              onSubmit={handleSubmit(handleForm)}
              className="grid grid-cols-1 gap-3 "
            >
              <h1 className="text-xl font-bold text-blue-800 underline">
                Add Ticket Type
              </h1>
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
                      placeholder="Ticket Type"
                      className="input input-bordered w-11/12 input-secondary "
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
                </div>

                <textarea
                  {...register("description", {})}
                  type="text"
                  placeholder="Description"
                  className="textarea col-span-8 w-11/12 textarea-secondary"
                />
              </div>

              <br />
              <div className="flex justify-end gap-4">
                <label
                  htmlFor="booking-modal"
                  className="btn bg-error hover:bg-red-700 text-white  "
                >
                  Close
                </label>

                <input
                  className="btn bg-blue-800 text-white hover:bg-green-700"
                  type="submit"
                  value="Add Ticket Type"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <TicketsType></TicketsType>
    </div>
  );
};

export default Modal;
