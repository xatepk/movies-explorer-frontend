import cn from 'classnames';
import './FilterCheckbox.css';

function FilterCheckbox({ isShort, handleUpdateCheckbox }) {
  return(
    <label className="filter">
      <input
        className="filter__input"
        type="checkbox"
        checked={isShort}
        onChange={handleUpdateCheckbox}
      />Короткометражки
      <span className={cn("filter__box", {"filter__box_is-active" : isShort})}></span>
    </label>
  );
}

export default FilterCheckbox;
