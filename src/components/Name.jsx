import { useState } from 'react';
import { MdEdit, MdDone } from 'react-icons/md';

const Name = () => {
  const [name, saveName] = useState('First');
  const [surname, saveSurname] = useState('Last name');
  const [editing, changeEditing] = useState(false);

  const changeStatus = (e) => {
    changeEditing(!editing);
  };

  const changeName = (e) => {
    e.preventDefault();
    if (e.target.id === 'name') {
      saveName(e.target.value);
    } else {
      saveSurname(e.target.value);
    }
  };

  return (
    <div id="nameInput">
      {editing ? (
        <>
          <input
            className="h2"
            id="name"
            type="text"
            value={name}
            onChange={changeName}
          ></input>
          <input
            className="h2"
            id="surname"
            type="text"
            value={surname}
            onChange={changeName}
          ></input>

          <MdDone className="done" onClick={changeStatus} />
        </>
      ) : (
        <>
          <h2>
            {name} {surname}
          </h2>
          <MdEdit className="edit " onClick={changeStatus} />
        </>
      )}
    </div>
  );
};

export default Name;
