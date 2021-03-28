import React, { useState, useCallback } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleSeachMovie }) {
  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);

  const onChangeSearch = useCallback((value, checked) => {
    setSearchString(value)
    setTimeout(() => handleSeachMovie(value, checked), 500);
  }, [handleSeachMovie])

  const handleSubmit = e => {
    e.preventDefault();
    handleSeachMovie(searchString, isShort);
  }

  const handleUpdateCheckbox = () => {
    const invertedValue = !isShort;
    setIsShort(invertedValue);
    onChangeSearch(searchString, invertedValue);
  }

  return(
    <div className="seach">
      <form onSubmit={handleSubmit} className="seach__form">
        <div className="seach__icon"></div>
        <input value={searchString}
              onChange={({ target: { value }}) => onChangeSearch(value, isShort)} className="seach__input" type="search" placeholder="Фильм" autoComplete="off" spellCheck="false" aria-live="polite" required minLength="1"/>
        <button className="seach__button" type="submit" />
      </form>
      <FilterCheckbox
        isShort={isShort}
        handleUpdateCheckbox={handleUpdateCheckbox}
      />
    </div>
  );
}

export default SearchForm;
