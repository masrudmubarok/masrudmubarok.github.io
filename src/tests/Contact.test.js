import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  it('renders WhatsApp button', () => {
    render(<Contact />);
    expect(screen.getByText(/Chat on WhatsApp/i)).toBeInTheDocument();
  });
  it('renders Email button', () => {
    render(<Contact />);
    expect(screen.getByText(/Drop Me an Email/i)).toBeInTheDocument();
  });
});
