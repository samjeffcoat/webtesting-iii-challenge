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
})