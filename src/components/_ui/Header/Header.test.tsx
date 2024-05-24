import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header module', () => {
  it('should be render Header component', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Home')).toBeInTheDocument();
  });
});
