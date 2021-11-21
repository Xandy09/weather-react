import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Where to?"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm w-100"
            />
          </div>
        </div>
      </form>
      <h1 id="city">Atlanta, GA</h1>
      <ul>
        <li id="date"></li>
        <li id="description"></li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <img src="/images/sun.jpg" alt="sun" />{" "}
              <span className="temperature" id="temperature"></span>
              <span className="units">45°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>42%
            </li>
            <li>
              Wind: <span id="wind"></span>8 m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
