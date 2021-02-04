import { useState } from 'react';
import { MdDone, MdRemove, MdAdd } from 'react-icons/md';

const Experience = () => {
  const [experience, changeExperience] = useState([
    ['Position1', '2010', '2015', 'Work from home'],
    ['Position2', '2015', '2020', 'Workplace'],
  ]);
  const [position, changePosition] = useState('');
  const [year1, changeYear1] = useState('');
  const [year2, changeYear2] = useState('');
  const [editing, changeEditing] = useState('');
  const [company, changeCompany] = useState('');

  const changeNewExp = (e) => {
    if (e.target.className === 'position') {
      changePosition(e.target.value);
    } else if (e.target.className === 'year1') {
      changeYear1(e.target.value);
    } else if (e.target.className === 'year2') {
      changeYear2(e.target.value);
    } else changeCompany(e.target.value);
  };

  const removeExperience = (e) => {
    var el;
    if (e.target.parentElement.tagName === 'LI') {
      el = e.target.parentElement;
    } else {
      el = e.target.parentElement.parentElement;
    }

    changeExperience(experience.filter((id) => id[0] !== el.id));
  };

  const changeStatus = (e) => {
    if (editing === true) {
      const abc = [position, year1, year2, company];
      changeExperience((prevState) => [...prevState, abc]);
      changeCompany('');
      changePosition('');
      changeYear1('');
      changeYear2('');
    }
    changeEditing(!editing);
  };

  const exp = experience.map((job) => (
    <li key={job[0]} id={job[0]}>
      <p className="pSchool">{job[0]}</p>
      <p className="pYears">
        {job[1]} - {job[2]}
      </p>

      <p className="pWorkplace"> {job[3]}</p>

      <MdRemove className="remove" onClick={removeExperience} />
    </li>
  ));

  return (
    <div id="experience">
      <h3>Experience</h3>
      {!editing ? (
        <>
          <ol>
            {exp}

            <MdAdd className="add" onClick={changeStatus} />
          </ol>
        </>
      ) : (
        <>
          <ol>{exp}</ol>

          <input
            placeholder="Position"
            className="position"
            onChange={changeNewExp}
            required
          ></input>
          <input
            placeholder="Starting year"
            className="year1"
            onChange={changeNewExp}
          ></input>
          <input
            placeholder="Ending year"
            className="year2"
            onChange={changeNewExp}
          ></input>
          <input
            placeholder="Company name"
            className="company"
            onChange={changeNewExp}
          ></input>
          <MdDone className="done" onClick={changeStatus} />
        </>
      )}
    </div>
  );
};

export default Experience;
