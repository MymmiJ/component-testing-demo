import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { FC } from 'react';
import { FailSlider } from '../fail-slider';

expect.extend(toHaveNoViolations);

const expectAccessibility = async (Component: FC<Record<string, unknown>>, props = {}) => {
  const { container } = render(<Component {...props}/>);
  const accessibilityResults = await axe(container);
  expect(accessibilityResults).toHaveNoViolations();
}

describe('Failing slider component', () => {
  
  it('renders with a label', () => {
    render(<FailSlider />);
    const sliderLabel = screen.getByLabelText('Slider');
    expect(sliderLabel).toBeInTheDocument();
  });

  it('is properly accessible', async () => {
    await expectAccessibility(FailSlider);
  });
});
