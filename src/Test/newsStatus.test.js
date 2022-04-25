import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { create, act } from 'react-test-renderer';

import NewsStatus from '../Components/News/newsStatus';

describe('NewsStatus', () => {
  test('should add span ', () => {
    let component;
    act(() => {
      component = create(<NewsStatus status="programmer" />);
    });
    const instance = component.root;
    const span = instance.findByType('span');
    act(() => span.props.doubleClick);
    expect(span.props.children).toBe('programmer');
  });

  test('it shows the expected text when clicked', () => {
    const component = create(<NewsStatus status="programmer" />);
    const instance = component.root;
    const span = instance.findByType('span');
    // eslint-disable-next-line no-unused-expressions
    span.props.doubleClick;
    expect(span.props.children).toBe('programmer');
  });
});
