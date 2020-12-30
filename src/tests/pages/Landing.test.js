import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { cleanup, render } from '@testing-library/react'

import Landing from '../../pages/Landing'


const setup = () => {

    const wrapper = render(
        <Landing />
    )
    return {wrapper}
}


describe('Landing page', () => {

    afterEach (() => {
        cleanup()
    }) 

    it('renders with correct information', () => {
        const { wrapper } = setup()
        const { getByText, getByTestId, getByAltText } = wrapper
        const logo = getByTestId('site-logo')
        expect(logo.classList.length).toBe(0)
        getByAltText("background top detail")
        getByAltText("background bottom detail")
        getByAltText("Man in front of a laptop")
        getByText("We're a group of friends trying to do cool things.")
        getByText("Our lab to try tech")
    })
})