import { render, screen } from '@testing-library/react';
import { Header } from '../header';
import { Slider } from '../slider';

describe('Snapshot tests', () => {
  it('has not changed the rendering of the header element', () => {
    render(<Header pageTitle="Example" />);
    const header = screen.getByTestId('header');
    expect(header).toMatchInlineSnapshot(`
<header
  data-testid="header"
>
  <h1>
    Example
  </h1>
</header>
`);
  });
  it('has not changed the rendering of the slider element', () => {
    render(<Slider min={20} max={50} />);
    const slider = screen.getByRole('spinbutton');
    expect(slider).toMatchSnapshot();
  })
});