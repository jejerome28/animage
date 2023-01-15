// import renderer from 'react-test-renderer'
import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

describe('Card', ()=> {
    it('should render card component', () => { 
        render(<Card/>)
        screen.debug();
     })
})




