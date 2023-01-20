import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../../../../../redux/store';
import Footer from '../Footer';

describe('banner section test', () => {
  it('should founnd "digital village" in banner', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>,
      () => {
        const response = screen.getByText(/digital village/i);
        jest(response).toBeInTheDocument();
      }
    );
  });
});
