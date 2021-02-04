import { useState } from 'react';
import { MdAdd, MdDone, MdRemove } from 'react-icons/md';

const Skills = () => {
  const [skill, newSkill] = useState('');
  const [skills, addToSkills] = useState(['CSS', 'HTML', 'JS', 'React']);
  const [editing, changeStatus] = useState(false);

  const addNewSkill = (e) => {
    addToSkills((prevState) => [...prevState, skill]);
    newSkill('');
    changeStatus(!editing);
  };

  const changeEditing = (e) => {
    if (editing) {
      addNewSkill();
    } else {
      changeStatus(!editing);
    }
  };

  const removeSkill = (e) => {
    var el;
    if (e.target.parentElement.tagName === 'LI') {
      el = e.target.parentElement;
    } else el = e.target.parentElement.parentElement;

    addToSkills(skills.filter((skill) => skill !== el.id));
  };

  const addSkill = (e) => {
    newSkill(e.target.value);
  };

  const allSkills = skills.map((skill) => (
    <li key={skill} id={skill}>
      {skill} <MdRemove className="remove" onClick={removeSkill} />
    </li>
  ));

  return (
    <div id="skills">
      <h3>Skills</h3>
      {editing ? (
        <>
          <ul>{allSkills}</ul>

          <input id="skill" placeholder="Add a new skill" onChange={addSkill} />
          <MdDone className="done" onClick={changeEditing} />
        </>
      ) : (
        <>
          <ul>
            {allSkills}

            <MdAdd className="add" onClick={changeEditing} />
          </ul>
        </>
      )}
    </div>
  );
};

export default Skills;
