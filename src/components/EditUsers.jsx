import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../redux/actions/actionUser";
import { selectUsers } from "../redux/selectors/selectors";

function EditUsers(props) {
  const state = useSelector(selectUsers);
  const dispatch = useDispatch();

  const [editProfil, setEditProfil] = useState(false);
  const [firstName, setFirstName] = useState(state.data.firstName);
  const [lastName, setLastName] = useState(state.data.lastName);

  const editUser = () => {
    setEditProfil(!editProfil);
  };

  const handleChangeName = (e) => {
    if (e.target.id === "firstNameUser") {
      setFirstName(e.target.value);
    }
    if (e.target.id === "lastNameUser") {
      setLastName(e.target.value);
    }
  };

  const putNewProfil = () => {
    console.log(firstName);
    const body = {
      firstName,
      lastName,
    };
    console.log();
    const token = state.token.token;
    dispatch(changeUser(body, token));
    setEditProfil(false);
  };

  const displayEditButton = editProfil ? (
    <div className="edit-profil">
      <div className="edit-profil-input">
        <input
          type="text"
          id="firstNameUser"
          placeholder={state.data.firstName}
          onChange={handleChangeName}
        />
        <input
          type="text"
          id="lastNameUser"
          placeholder={state.data.lastName}
          onChange={handleChangeName}
        />
      </div>
      <div className="edit-profil-button">
        <button onClick={() => putNewProfil()}>Save</button>
        <button onClick={() => editUser()}>Cancel</button>
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
