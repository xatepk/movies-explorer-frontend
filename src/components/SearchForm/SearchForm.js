import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleSeachMovie }) {
  const [searchString, setSearchString] = useState('');

  const onChangeSearch = e => {
    const { value } = e.target
    setSearchString(value)
    setTimeout(() => handleSeachMovie(value), 500);
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleSeachMovie(searchString);
  }

  return(
    <div className="seach">
      <form onSubmit={handleSubmit} className="seach__form">
        <div className="seach__icon"></div>
        <input value={searchString}
              onChange={onChangeSearch} className="seach__input" type="search" placeholder="Фильм" autocomplete="off" spellcheck="false" aria-live="polite" required minLength="1"/>
        <button className="seach__button" type="submit" />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
