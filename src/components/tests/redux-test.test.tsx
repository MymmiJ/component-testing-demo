import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../stores/redux-store";
import { ReduxUser } from "../redux-user";

it('renders redux component and can change direction', async () => {
  render(<Provider store={store}>
    <ReduxUser />
  </Provider>);
  const Up = await screen.findByText(/\^ Up/);
  await userEvent.click(Up);
  const Location = await screen.findByText(/location/i);
  expect(Location).toHaveTextContent('y:1');
});