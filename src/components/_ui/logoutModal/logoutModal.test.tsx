import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import LogoutModal from '.';
import { MockPropsLogoutModal } from './logoutModal.mocks';
import { localStorageMock } from '@/mocks/localStorage.mocks';

describe('LogoutModal module', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  it('shoud be render LogoutModal', () => {
    const { getByText } = render(<LogoutModal {...MockPropsLogoutModal} />);
    const title = getByText('Sair do aplicativo?');
    expect(title).toBeInTheDocument();
  });

  it('shoud be render function logout', () => {
    const { getByText } = render(<LogoutModal {...MockPropsLogoutModal} />);
    const title = getByText('Sair do aplicativo?');
    expect(title).toBeInTheDocument();

    const setItemMock = jest.spyOn(window.localStorage, 'removeItem');
    const buttonSair = getByText('Sair');
    expect(buttonSair).toBeInTheDocument();

    fireEvent.click(buttonSair);

    expect(setItemMock).toHaveBeenCalled();
  });

  // vortar
  it('shoud be render function exit modal', () => {
    const { getByText } = render(<LogoutModal {...MockPropsLogoutModal} />);
    const title = getByText('Sair do aplicativo?');
    expect(title).toBeInTheDocument();

    const setItemMock = jest.spyOn(window.localStorage, 'removeItem');
    const buttonSair = getByText('Cancelar');
    expect(buttonSair).toBeInTheDocument();

    fireEvent.click(buttonSair);

    expect(setItemMock).toHaveBeenCalled();
  });

  it('shoud be render function exit modal on click out of modal', () => {
    const { getByTestId } = render(<LogoutModal {...MockPropsLogoutModal} />);
    const setItemMock = jest.spyOn(window.localStorage, 'removeItem');
    const modalDiv = getByTestId('logout-modal');
    expect(modalDiv).toBeInTheDocument();
    fireEvent.click(modalDiv);
    expect(setItemMock).toHaveBeenCalled();
  });
});
