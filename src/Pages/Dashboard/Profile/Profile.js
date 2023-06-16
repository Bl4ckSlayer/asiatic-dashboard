import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl  mb-8 font-bold text-center">My Profile</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/VNDY79z/9e790bb99536fa746850cd1b2d7c954e.jpg"
            alt="9e790bb99536fa746850cd1b2d7c954e"
            className="h-2/4 w-1/4"
            border="0"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {user?.displayName}</h2>
          <h2 className="card-title">Email : {user?.email}</h2>
          <h2 className="card-title">
            Account Created : {user?.metadata?.creationTime}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
