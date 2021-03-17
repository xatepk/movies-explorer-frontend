import './HamburgerButton.css';

const HamburgerButton = ({ onClick }) => {

  return (
    <button
      className="hamburger-button"
      aria-label="Открыть главное меню"
      onClick={onClick}
    >
      <span className="hamburger-button__icon" />
      <span className="hamburger-button__icon" />
      <span className="hamburger-button__icon" />
    </button>
  );
};

export default HamburgerButton;
