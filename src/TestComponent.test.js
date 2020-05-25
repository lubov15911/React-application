import React from 'react';

import { Sum } from './TestComponent';

test('test1', () => {
    expect(Sum(1, 5)).toEqual(6);
});
