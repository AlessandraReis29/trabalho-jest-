// MeuComponente.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MeuComponente from './MeuComponente';

test('renders the correct text', () => {
  const { getByText } = render(<MeuComponente text="Teste" />);
  const textElement = getByText(/Teste/i);
  expect(textElement).toBeInTheDocument();
});

test('snapshot test', () => {
  const { asFragment } = render(<MeuComponente text="Teste" />);
  expect(asFragment()).toMatchSnapshot();
});

test('mock function', () => {
  const mockFn = jest.fn();
  mockFn('Teste');
  expect(mockFn).toHaveBeenCalledWith('Teste');
});

