import React from 'react';
import { screen, render } from '@testing-library/react';

import Filter from './Filter';

let result;
describe("Filter", () => {
    beforeEach(() => {
        result = render(
            <Filter options={['ability', 'name']} />
        );

    })
    it("should have selected field", () => {
        const element = result.container.querySelector('#selectedFilter');
        expect(element.value).toBe("")
        expect(element.textContent).toBe('ability')
    })

    it("should have option field", () => {
        const element = result.container.querySelector('#name');
        expect(element.value).toBeTruthy
        expect(element.textContent).toBe('name')
    })
})