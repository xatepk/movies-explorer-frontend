import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <div className="seach">
      <form className="seach__form">
        <div className="seach__icon"></div>
        <input className="seach__input" type="search" placeholder="Фильм" autocomplete="off" spellcheck="false" aria-live="polite" required/>
        <button className="seach__button" type="submit" />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
