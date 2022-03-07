import React from 'react';
import { render } from 'react-dom';
import './main.css';
import { Calender } from './Calender/Calender';

document.addEventListener('DOMContentLoaded', function () {
  const divEl = document.createElement('div');
  divEl.className = 'react-root';
  render(<Calender />, document.body.appendChild(divEl));
});
