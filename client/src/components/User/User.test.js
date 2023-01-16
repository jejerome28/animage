import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import User from './User'


describe('Users page', ()=>{
    it('shows the users page', ()=>{
        render(<User/>);
        screen.debug();
    })
})
