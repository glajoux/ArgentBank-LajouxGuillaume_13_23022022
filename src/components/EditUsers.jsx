import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/selectors/selectors";

function EditUsers(props) {
  const [editProfil, setEditProfil] = useState(false);

  const state = useSelector(selectUsers);

  const editUser = () => {
    setEditProfil(!editProfil);
  };

  const putNewProfil = () => {};

  const displayEditButton = editProfil ? (
    <div className="edit-profil">
      <div className="edit-profil-input">
        <input type="text" placeholder={state.data.firstName} />
        <input type="text" placeholder={state.data.lastName} />
      </div>
      <div className="edit-profil-button">
        <button
          onClick={() => {
            putNewProfil();
          }}
        >
          Save
        </button>
        <button onClick={() => setEditProfil()}>Cancel</button>
      </div>
    </div>
  ) : (
    <button className="edit-button" onClick={() => editUser()}>
      Edit Name
    </button>
  );

  return displayEditButton;
}

export default EditUsers;
