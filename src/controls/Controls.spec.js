// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";
import Controls from '../controls/Controls';
import Display from './Display';


it('the closed toggle button is disabled if the gate is locked'
, () => {

    
    const closedClass = jest.fn();
    const locked = true;
    const closed = true;
    

    const {getByText, queryByText} = render(<Controls
        toggleLocked={toggleLocked}
         locked={locked}
        closed={closed}
    />)

    
it('the locked toggle button is disabled if the gate is open'
, () => {

    
    const toggleLocked = jest.fn();
    const locked = true;
    const closed = true;
    

    const {getByText, queryByText} = render(<Controls
        toggleLocked={toggleLocked}
         locked={locked}
        closed={closed}
    />)