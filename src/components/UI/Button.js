import style from './Button.module.css';

// Used on ErrorModal & AddUser
export default function Button({ children, onClick, type }) {
  return (
    <button
      className={style.button}
      onClick={onClick}
      type={type || 'button'}>
      {children}
    </button>
  );
}
