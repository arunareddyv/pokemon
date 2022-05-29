import React from 'react';
import { screen, render } from '@testing-library/react';

import Sort from './Sort';

let result;
describe("Filter", () => {
    beforeEach(() => {
        result = render(
            <Sort options={[ 'name']} />
        );

    })
    it("should have selected field", () => {
        const element = result.container.querySelector('#selectedSort');
        expect(element.textContent).toBe('Slect Sort type')
    })

    it("should have option field", () => {
        const element = result.container.querySelector('#name');
        expect(element.textContent).toBe('name')
    })
})