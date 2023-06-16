import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TicketsType from "../TicketsType/TicketsType";

const Modal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
    reset,
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [update, setUpdate] = useState("");
  const [tickets, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tickets");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const objIndex = tickets.findIndex((obj) => obj.id === update);

  //  Storing data in localStorage
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  //  Storing data in localStorage for all purpose
  useEffect(() => {
    return () => {
      localStorage.setItem("tickets", JSON.stringify(tickets));
    };
  }, []);

  // focusing input field
  useEffect(() => {
    setFocus("ticket");
  }, [setFocus]);

  // delete Ticket
  const deleteTicket = (taskId) => {
    const updatedTasks = tickets.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Modal form and add ticket form
  const handleForm = (data) => {
    const description = data.description;
    const ticket = data.ticket;
    // console.log(update);

    if (update) {
      console.log(objIndex);
      tickets[objIndex].ticket = ticket;
      tickets[objIndex].description = description;
      setTasks([...tickets]);
      setUpdate("");
    } else {
      const newTask = {
        id: Date.now(),
        ticket: ticket,
        description: description,
      };
      setTasks([...tickets, newTask]);
    }

    reset();
    setIsModalOpen(false);
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
                      defaultValue={tickets[objIndex]?.ticket}
                      placeholder="Ticket Type"
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
                </div>

                <textarea
                  {...register("description", {})}
                  type="text"
                  defaultValue={tickets[objIndex]?.description}
                  placeholder="Description"
                  className="textarea col-span-8 w-11/12 textarea-info"
                />
              </div>

              <br />
              <div className="flex justify-end gap-4">
                <label htmlFor="booking-modal" className="btn  ">
                  Cancel
                </label>
                <input className="btn " type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <TicketsType
        tickets={tickets}
        deleteTicket={deleteTicket}
        setUpdate={setUpdate}
      ></TicketsType>
    </div>
  );
};

export default Modal;
