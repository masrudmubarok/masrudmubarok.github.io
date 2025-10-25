import { render, screen } from '@testing-library/react';
import SocialLinks from '../components/SocialLinks';

describe('SocialLinks Component', () => {
  it('renders social links navigation', () => {
    render(<SocialLinks />);
    const nav = screen.queryByRole('navigation');
    expect(nav).not.toBeNull();
  });
});