import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import style from './ErrorModal.module.css';

// Background when Error Modal is visible
const Backdrop = ({ onConfirm }) => {
  return <div className={style.backdrop} onClick={onConfirm} />;
};

// The Modal component
const ModalOverlay = ({ message, onConfirm, title }) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{title}</h2>
      </header>
      <div className={style.content}>
        <p>{message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal({ message, onConfirm, title }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}