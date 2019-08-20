// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";
import Controls from '../controls/Controls';
import Display from './Display';


it('displays Closed if the `closed` prop is `true` and Open if otherwise'
, () => {

    
    const closedClass = jest.fn();
    const locked = true;
    const closed = true;
    

    const {getByText, queryByText} = render(<Display
        toggleLocked={toggleLocked}
         locked={locked}
        closed={closed}
    />)



    fireEvent.click(getByText('Open Gate'));
    
    expect(closedClass).toHaveBeenCalled();
})