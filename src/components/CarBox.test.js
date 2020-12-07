import { render, screen } from '@testing-library/react';
import CarBox from './CarBox';

describe('CarBox', () => {
  const props = {
    name: "Knight Rider",
    imageUrl: 'https://www.carscoops.com/wp-content/uploads/webp/2020/08/Knight-Rider.webp',
    imageName: "Knight rider car",
    price: "£7",
    description: "She's always right, Michael."
  }
  const component = (<CarBox {...props} />);

  it('should have an image with given src', () => {
    render(component);
    const image = screen.getByRole('img');
    expect(image.getAttribute('src')).toBe(props.imageUrl);
  });

  it('should have an image with given alt', () => {
    render(component);
    const image = screen.getByRole('img');
    expect(image.getAttribute('alt')).toBe(props.imageName);
  });

  it('should have a header with given model name', () => {
    render(component);
    const heading = screen.getByRole('heading');
    expect(heading.innerHTML).toBe('Model Knight Rider');
  });

  it('should have a text with given price', () => {
    render(component);
    const price = screen.getByText(/From/);
    expect(price.innerHTML).toBe('From £7');
  });

  it('should have a text with given description', () => {
    render(component);
    const description = screen.getByText(props.description);
    expect(description).toBeInTheDocument();
  });

});
