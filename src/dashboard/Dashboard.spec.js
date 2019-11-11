// Test away
import React from 'react';
import { render, fireEvent} from 'react-testing-library';
import  Dashboard from './Dashboard';


test("it renders correctly", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test( "it renders display and controls", () => {
    render(<Dashboard />)
    expect(document.querySelector('.controls')).toBeTruthy();
    expect(document.querySelector('.display')).toBeTruthy();
})