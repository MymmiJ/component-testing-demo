import { render, screen } from '@testing-library/react';
import { assert, string, emailAddress, property, constant } from 'fast-check';
import { EmailForm } from '../email-form';

describe('Test with properties', () => {
  it('shows an error when no email address is present', () => {
    const { rerender } = render(<EmailForm />);
    assert(property(constant(''), constant(''), constant(''), (name: string, email: string, message: string) => {
      rerender(<EmailForm placeholderName={name} placeholderEmail={email} placeholderMessage={message} />);
      const alert =  screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    }));
  });
  it('shows no error when any email address is present', () => {
    const { rerender } = render(<EmailForm />);
    assert(property(constant(''), emailAddress(), string(), (name: string, email: string, message: string) => {
      rerender(<EmailForm placeholderName={name} placeholderEmail={email} placeholderMessage={message} />);
      setTimeout(() => {
        const alert =  screen.getByRole('alert');
        expect(alert).not.toBeInTheDocument();
      }, 100);
    }));
  });
});
