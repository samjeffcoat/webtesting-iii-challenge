// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';

describe("lock button", () => {
    it("should not work while gate is open", () => {
        const toggleLocked = jest.fn();
        const {getByText} = render(
            <Controls toggleLocked= {toggleLocked} closed= {false} locked = {false}/>
        )
        const button = getByText(/lock gate/i);
        fireEvent.click(button);
        expect(toggleLocked).toBeCalledTimes(0);
    })
    it("changes text to unlocked when gate unlocked", ()=>{
        const toggleLocked = jest.fn();
        const {getByText} = render(
            <Controls closed ={true} locked = {false} toggleLocked= {toggleLocked}/>
        );
        const button = getByText(/lock gate/i);
        fireEvent.click(button);
        expect(toggleLocked).toBeCalledTimes(1);
    })

    it("should not open or close when gate is locked", () => {
        const toggleClosed= jest.fn();
        const {getByText} = render(
            <Controls closed = {true} locked ={true}toggleClosed = {toggleClosed}/>
        );
        const button = getByText(/open gate/i);
        fireEvent.click(button);
        expect(toggleClosed).toBeCalledTimes(0);
    })
})