import { useState } from 'react';
import cn from 'classnames';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [duration, setDuration] = useState(true);

  function handleDurationChange(e) {
    setDuration(!duration);
  }

  return(
    <label className="filter">
      <input className="filter__input" type="checkbox" checked={duration} onChange={handleDurationChange} />Короткометражки
      <span className={cn("filter__box", {"filter__box_is-active" : duration})}></span>
    </label>
  );
}

export default FilterCheckbox;
