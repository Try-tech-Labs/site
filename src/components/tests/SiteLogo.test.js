import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { cleanup, render } from '@testing-library/react'

import SiteLogo from '../SiteLogo'


const setup = () => {

    const props = {
        width: 162,
        height: 70,
        className: "site_menu"
    }

    const wrapper = render(
        <SiteLogo {...props} />
    )
    return {wrapper, props}
}

describe('SiteLogo', () => {
    
    afterEach (() => {
        cleanup()
    }) 

    it('displays the logo with the correct size', () => {
        const { wrapper } = setup()
        const { getByTestId } = wrapper
        const logo = getByTestId('site-logo')
        expect(logo.getAttribute('width')).toEqual("162")
        expect(logo.getAttribute('height')).toEqual("70")
    })

    it('displays the logo with the correct style class', () => {
        const { wrapper } = setup()
        const { getByTestId } = wrapper
        const logo = getByTestId('site-logo')
        expect(logo.classList.contains('site_menu')).toBe(true)
    })

})