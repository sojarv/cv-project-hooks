import { useState } from 'react';
import { MdDone, MdEdit } from 'react-icons/md';

const Contact = () => {
  const [editing, changeStatus] = useState(false);
  const [email, changeEmail] = useState('example@page.com');
  const [website, changeWebsite] = useState('Address of your page');
  const [address, changeAddress] = useState('My home road 1, 10000 Home');

  const changeEditing = (e) => {
    e.preventDefault();
    changeStatus(!editing);
  };

  const changeContact = (e) => {
    if (e.target.id === 'email') {
      changeEmail(e.target.value);
    } else if (e.target.id === 'website') {
      changeWebsite(e.target.value);
    } else changeAddress(e.target.value);
  };

  return (
    <div id="contact">
      {editing ? (
        <>
          <input
            id="email"
            value={email}
            placeholder="E-mail"
            onChange={changeContact}
          />{' '}
          <MdDone className="done" onClick={changeEditing} />
          <br></br>
          <input
            id="website"
            value={website}
            placeholder="Website"
            onChange={changeContact}
          />{' '}
          <br></br>
          <input
            id="address"
            placeholder="Address"
            value={address}
            onChange={changeContact}
          />
        </>
      ) : (
        <>
          <p>
            {email}
            <MdEdit className="edit" onClick={changeEditing} />
          </p>
          <p>{website}</p>
          <p>{address}</p>
        </>
      )}
    </div>
  );
};

export default Contact;
