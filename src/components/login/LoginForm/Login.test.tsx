import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './';
import { localStorageMock } from '@/mock/localStorage.mocks';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('login module', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  it('should be render login component', () => {
    const { getByText } = render(<Login />);

    expect(getByText('CDC Bank')).toBeInTheDocument();
  });

  it('should be make login localStorage', async () => {
    const { getByText, findByLabelText } = render(<Login />);

    const button = getByText('Entrar');
    const inputEmail = await findByLabelText('E-mail *');
    const inputSenha = await findByLabelText('Senha *');

    const setItemMock = jest.spyOn(window.localStorage, 'setItem');

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();

    fireEvent.change(inputEmail, { target: { value: 'example@email.com' } });
    fireEvent.change(inputSenha, { target: { value: 'senha123' } });
    fireEvent.click(button);

    expect(setItemMock).toHaveBeenCalled();
  });
});
