import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Myblogs from '../Myblogs';

const MockMyBlogs = () => (
  <BrowserRouter>
    <Myblogs />
  </BrowserRouter>
);

it('expecting a div in my blog component', () => {
  render(<MockMyBlogs />);
  const articleElement = screen.getByRole('article');
  expect(articleElement).toBeInTheDocument();
});
