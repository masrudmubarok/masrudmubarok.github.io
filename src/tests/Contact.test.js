import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  it('renders WhatsApp button', () => {
    render(<Contact />);
    // Cari link dengan text 'Chat on WhatsApp' (karena ContactLink adalah <a>, bukan <button>)
    expect(screen.getByText(/Chat on WhatsApp/i)).toBeInTheDocument();
  });
  it('renders Email button', () => {
    render(<Contact />);
    // Cari link dengan text 'Drop Me an Email' (karena ContactLink adalah <a>, bukan <button>)
    expect(screen.getByText(/Drop Me an Email/i)).toBeInTheDocument();
  });
});
