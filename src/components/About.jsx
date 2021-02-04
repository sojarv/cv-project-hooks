import { useState } from 'react';
import { MdEdit, MdDone } from 'react-icons/md';
import TextareaAutosize from 'react-autosize-textarea';

const About = () => {
  const [about, changeAbout] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  );
  const [editing, changeEditing] = useState(false);

  const changeStatus = (e) => {
    changeEditing(!editing);
  };

  const changeValue = (e) => {
    changeAbout(e.target.value);
  };

  return (
    <div id="about">
      {editing ? (
        <>
          <TextareaAutosize
            defaultValue={about}
            placeholder="Write something about you"
            onChange={changeValue}
            rows={5}
            className="textarea"
          />

          <MdDone className="done" onClick={changeStatus} />
        </>
      ) : (
        <>
          <p>{about}</p>
          <MdEdit className="edit" onClick={changeStatus} />
        </>
      )}
    </div>
  );
};

export default About;
