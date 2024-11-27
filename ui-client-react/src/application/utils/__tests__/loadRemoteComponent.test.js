import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadRemoteComponent } from '../loadRemoteComponent';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  lazy: jest.fn((fn) => fn()),
}));

jest.mock(
  'remote/MyComponent',
  () => () => <div>Mocked Remote Component</div>,
  { virtual: true }
);

describe('loadRemoteComponent', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('should show an error message in production', () => {
    process.env.NODE_ENV = 'production';
    const RemoteComponent = loadRemoteComponent('MyComponent');
    render(<RemoteComponent />);
    expect(screen.getByText('Error loading MyComponent')).toBeInTheDocument();
  });

  it('should show an error message if the component fails to load', async () => {
    jest.spyOn(React, 'lazy').mockImplementation(() => {
      throw new Error('Failed to load component');
    });

    process.env.NODE_ENV = 'development';
    expect(() => loadRemoteComponent('MyComponent')).toThrow(
      'Failed to load component'
    );
  });
});
