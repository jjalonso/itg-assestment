import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../services/api');

describe('App', () => {

  it('should render just 1 image', async () => {
    render(<App />);
    const images = await screen.findAllByRole('img', { name: /vehicle/i })
    expect(images).toHaveLength(1)
  });

  it('should render just 1 heading', async () => {
    render(<App />);
    const images = await screen.findAllByRole('heading', { name: /model/i })
    expect(images).toHaveLength(1)
  });

});
