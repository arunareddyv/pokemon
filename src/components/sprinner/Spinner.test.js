import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import StatusSpinner from './Spinner';

describe('StatusSpinner', () => {
    test('should not show spinner if no progress', () => {
        const testRenderer = TestRenderer.create(
            <StatusSpinner inProgress='false' />
        );
        const testInstance = testRenderer.root;
        
        expect(testInstance.findByType(StatusSpinner).props.inProgress).toBeFalsy
    })

    test('should show spinner if progress', () => {
        const testRenderer = TestRenderer.create(
            <StatusSpinner inProgress='true' />
        );
        const testInstance = testRenderer.root;
        
        expect(testInstance.findByType(StatusSpinner).props.inProgress).toBeTruthy
    })
})