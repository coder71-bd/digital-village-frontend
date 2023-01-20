import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AuthProvider } from '../../../../../context/AuthProvider';
// import initializeAuthentication from '../../../../../Firebase/Firebase.init';
import { persistor, store } from '../../../../../redux/store';
import Login from '../Login';

const MockLogin = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    </PersistGate>
  </Provider>
);

describe('Firebase Utile Test suite', () => {
  // beforeAll(async () => {
  //   jest.setTimeout(10000);
  //   initializeAuthentication();
  // });

  it('should be able to type an email', () => {
    render(<MockLogin />, () => {
      const emailInputElement = screen.getByRole('textbox', {
        type: /email/i,
      });

      userEvent.type(emailInputElement, 'user1@gmail.com');
      expect(emailInputElement.value).toBe('user1@gmail.com');
    });
  });
});

it('expect 1 is equal to 1', () => {
  expect(1).toBe(1);
});
