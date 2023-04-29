import React, {Component} from 'react';
import { components } from 'react-select';
import { default as ReactSelect } from "react-select";
import { subjects, skills, distance, days, time } from '../data';
import ReactDOM from "react-dom";
import { useState } from 'react';
import Select from 'react-select';

function MentorsFilter() {
    const [selectedOption, setSelectedOption] = useState("");

  var handleChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption.value);
  };


  return (
    <>
    <div className="filtercontainer">
      <h1>SEARCH FILTER</h1>
      <div>
        <div className="container">
          <h3>Day</h3>
          <div className="mt-5 m-auto w-50">
            <Select isMulti onChange={handleChange} options={days} />
          </div>
        </div>
        <div className="container">
          <h3>Time</h3>
          <div className="mt-5 m-auto w-50">
            <Select isMulti onChange={handleChange} options={time} />
          </div>
        </div>
        <div className="container">
          <h3>Subject</h3>
          <div className="mt-5 m-auto w-50">
            <Select isMulti onChange={handleChange} options={subjects} />
          </div>
        </div>
        <div className="container">
          <h3>Skills</h3>
          <div className="mt-5 m-auto w-50">
            <Select isMulti onChange={handleChange} options={skills} />
          </div>
        </div>
        <div className="container">
          <h3>Distance</h3>
          <div className="mt-5 m-auto w-50">
            <Select isMulti onChange={handleChange} options={distance} />
          </div>
        </div>
      </div>
      <button>FILTER</button>

    </div>
    </>
  )
}

export default MentorsFilter