import '@testing-library/jest-dom';
import { render, fireEvent, screen, within } from '@testing-library/react';
import SideBar from '.';
import { useRouter } from 'next/navigation';
import { localStorageMock } from '@/mock/localStorage.mocks';

const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  query: {},
  push: pushMock,
});

describe('SideBar module', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

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

  it('should be render "Sair" on open modal', () => {
    const { getByText } = render(<SideBar />);
    const exitLink = getByText('Sair');
    fireEvent.click(exitLink);

    const modalTitle = getByText('Sair do aplicativo?');
    expect(modalTitle).toBeInTheDocument();

    const modal = screen.getByRole('presentation');
    const buttons = within(modal).getAllByRole('button');

    const exitButton = buttons.find((button) => button.textContent === 'Sair');
    const setItemMock = jest.spyOn(window.localStorage, 'removeItem');
    exitButton && fireEvent.click(exitButton);

    expect(setItemMock).toHaveBeenCalled();
    expect(useRouter().push).toHaveBeenCalledWith('/login');
  });

  it('should be select itens vendas ', () => {
    const { getByText } = render(<SideBar />);
    const homeLink = getByText('Vendas');

    it('should be render Icon', () => {
      const { container } = render(<SideBar />);
      const iconLogout = container.querySelector('#iconLogout');
      expect(iconLogout).toBeInTheDocument();
    });
  });
});
