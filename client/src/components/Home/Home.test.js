import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

describe('Home component', ()=>{
    it('make sure that fetching is working', ()=>{
        render(<Home/>)
        screen.debug();
    });

    // it.todo('should destructure the data response');
})
