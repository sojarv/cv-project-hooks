import { useState } from 'react';
import { MdDone, MdRemove, MdAdd } from 'react-icons/md';

const Education = () => {
  const [education, changeEducation] = useState([
    ['High school', '2010', '2015', 'High School Graduate'],
    ['Undergraduate school', '2016', '2017', "Bachelor's degree in CS"],
  ]);
  const [school, changeSchool] = useState('');
  const [year1, changeYear1] = useState('');
  const [year2, changeYear2] = useState('');
  const [title, changeTitle] = useState('');
  const [editing, changeEditing] = useState('');

  const changeStatus = (e) => {
    if (editing === true) {
      const abc = [school, year1, year2, title];
      changeEducation((prevState) => [...prevState, abc]);
      changeSchool('');
      changeYear2('');
      changeYear1('');
      changeTitle('');
    }

    changeEditing(!editing);
  };

  const changeInput = (e) => {
    if (e.target.className === 'school') {
      changeSchool(e.target.value);
    } else if (e.target.className === 'year1') {
      changeYear1(e.target.value);
    } else if (e.target.className === 'year2') {
      changeYear2(e.target.value);
    } else changeTitle(e.target.value);
  };

  const removeEducation = (e) => {
    var el;
    if (e.target.parentElement.tagName === 'LI') {
      el = e.target.parentElement;
    } else {
      el = e.target.parentElement.parentElement;
    }

    changeEducation(education.filter((id) => id[0] !== el.id));
  };

  const edu = education.map((school) => (
    <li key={school[0]} id={school[0]}>
      <p className="pSchool">{school[0]}</p>
      <p className="pYears">
        {school[1]} - {school[2]}
      </p>

      <p className="pWorkplace">{school[3]}</p>

      <MdRemove className="remove" onClick={removeEducation} />
    </li>
  ));

  return (
    <div id="education">
      <h3>Education</h3>
      {!editing ? (
        <>
          <ol>
            {edu}

            <MdAdd className="add" onClick={changeStatus} />
          </ol>
        </>
      ) : (
        <>
          <ol>{edu}</ol>
          <input
            placeholder="School name"
            className="school"
            onChange={changeInput}
            required
          ></input>
          <input
            placeholder="Starting year"
            className="year1"
            onChange={changeInput}
          ></input>
          <input
            placeholder="Ending year"
            className="year2"
            onChange={changeInput}
          ></input>
          <input
            placeholder="Title"
            className="title"
            onChange={changeInput}
          ></input>
          <MdDone className="done" onClick={changeStatus} />
        </>
      )}
    </div>
  );
};

export default Education;
