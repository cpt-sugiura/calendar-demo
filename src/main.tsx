import React from 'react';
import { render } from 'react-dom';
import './main.css';
import { Calender } from './Calender/Calender';

document.addEventListener('DOMContentLoaded', function () {
  render(<Calender />, document.body.appendChild(document.createElement('div')));
});
