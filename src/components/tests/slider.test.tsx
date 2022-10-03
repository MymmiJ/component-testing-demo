import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe'; 
import { Slider } from '../slider';

expect.extend(toHaveNoViolations);

describe('Slider component', () => {
  
  it('renders with a label', () => {
    render(<Slider />);
    const sliderLabel = screen.getByText(/slider/i);
    expect(sliderLabel).toBeInTheDocument();
  });
  it('renders an input slider', () => {
    render(<Slider />);
    const inputNumberType = screen.getByRole('spinbutton');
    expect(inputNumberType).toBeInTheDocument();
  });

  // Interaction tests
  it('handles changes properly', async () => {
    render(<Slider />);
    const input = screen.getByRole('spinbutton');

    await userEvent.type(input, '12');
    const valueOfTwelveExists = screen.getByDisplayValue('12');
    expect(valueOfTwelveExists).toBeInTheDocument();

    await userEvent.type(input, '257');
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent(/Error: Invalid number/i)

    await userEvent.clear(input);
    await userEvent.type(input, '60');
    expect(alert).not.toBeInTheDocument();

    await userEvent.clear(input);
    await userEvent.type(input, '-1');
    expect(alert).toHaveTextContent(/Error: Invalid number/i)
  });

  it('works with a rerender if we want to change the props', async () => {
    const { rerender } = render (<Slider />);
    const input = screen.getByRole('spinbutton');

    await userEvent.type(input, '257');
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent(/Error: Invalid number/i);

    await userEvent.clear(input);
    rerender(<Slider max={257} />);
    expect(alert).not.toBeInTheDocument();
  });

  it('is properly accessible', async () => {
    const { container } = render(<Slider />);
    const accessibilityResults = await axe(container);
    expect(accessibilityResults).toHaveNoViolations();
  });
});
