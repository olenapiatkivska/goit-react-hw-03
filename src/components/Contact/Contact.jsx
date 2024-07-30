import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contactBox}>
      <div className={css.contactBoxWrapp}>
        <p className={css.contactText}>
          <FaUser />
          {name}
        </p>
        <p className={css.contactText}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
