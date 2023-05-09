import style from './Card.module.css';

// Used on AddUser, ErrorModal, UsersList
export default function Card({ children, className }) {
  return <div className={`${style.card} ${className}`}>{children}</div>;
}