// import renderer from 'react-test-renderer'
import React from 'react';
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

it('should render', () => { 
    render(<Card/>)
    const rendered_element = <Card/>
    expect(rendered_element).toBeInTheDocument();
 });




