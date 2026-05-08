import "./searchBar.css";
import searchIcon from "../../assets/Frame.png";

import React from 'react'

export default function searchBar() {
  return (
    <div className="searchbar__wrapper">
        <div className="searchbar__container">
            <label htmlFor="event-search" className="sr-only">Sök efter event</label>
            <img src={searchIcon} alt="" aria-hidden="true" className="searchbar__icon" />
            <input
              id="event-search"
              className="searchbar__input"
              type="text"
              placeholder="sök efter event"
            />
        </div>
    </div>
  )
}

