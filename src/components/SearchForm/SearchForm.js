import React, { useState, useCallback } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useDebouncedCallback } from 'use-debounce';

const DEBOUNCE_DELAY = 400;

const SearchForm = ({ handleSeachMovie }) => {
  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);
  const debouncedSetFilter = useDebouncedCallback(
    (value, checked) => {
        handleSeachMovie(value, checked);
    }, DEBOUNCE_DELAY
  );

  const onChangeSearch = useCallback((value, checked) => {
    setSearchString(value);
    debouncedSetFilter(value, checked);
  }, [debouncedSetFilter]);

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
