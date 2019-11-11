// Test away!
import React from 'react';
import {render, fireEvent}from "@testing-library/react";
import Display from './Display';


test("testing if its closed or locked, light should be red", () => {
    const {getByText}= render(<Display closed = {true}locked= {true}/>)
    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    expect(locked.classList).toContain("red-led");
    expect(closed.classList).toContain("red-led");
        
});
test("test if it gate is unlocked or open, then light should be green", () => {
    const {getByText} = render(<Display unlocked= {true} open= {true}/>)
    const open = getByText(/open/i);
    const unlocked = getByText(/unlocked/i);
    expect(open.classList).toContain("green-led");
    expect(unlocked.classList).toContain("green-led")
})