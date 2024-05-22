import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from '.';
import { fireEvent } from '@storybook/test';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SideBar module', () => {
  it('should be render SideBar component', () => {
    const { getByText } = render(<SideBar />);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should be hover vendas', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Vendas');
    expect(homeLink).toHaveStyle('background:--menu-hover-bg');
  });

  it('should not hover vendas', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Vendas');
    fireEvent.mouseOver(homeLink);
    expect(homeLink).not.toHaveStyle('background:transparent');
  });

  it('should be select itens vendas ', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Vendas');

    fireEvent.click(homeLink);
    expect(homeLink).toHaveStyle(' background:var(--menu-hover-bg)');
  });

  it('should be hover Dashboard', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Dashboard');
    expect(homeLink).toHaveStyle('background:--menu-hover-bg');
  });

  it('should not hover Dashboard', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Dashboard');
    fireEvent.mouseOver(homeLink);
    expect(homeLink).not.toHaveStyle('background:transparent');
  });

  it('should be select itens Dashboard', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Dashboard');

    fireEvent.click(homeLink);
    expect(homeLink).toHaveStyle('background:var(--menu-hover-bg)');
  });
});
