import { screen, fireEvent, render } from '@testing-library/react';
import renderWithProvider from '../utils/test-util';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MissionsPage from '../components/missions/MissionsPage';
import { act } from 'react-dom/test-utils';
// import store from '../redux/store';
// import { Provider } from 'react-redux';

const missions = [
  {
    mission_id: 'testmission1',
    mission_name: 'test1',
    description: 'test mission',
    wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
  },
];

export const handlers = [
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(missions), ctx.delay(10));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('testing Mission page UI', async () => {
  const { store } = renderWithProvider(<MissionsPage />);
  // render(<Provider store={store}><MissionsPage /></Provider>)
  await act(async () => {
    await fetch('https://api.spacexdata.com/v3/missions ');
  });
  const text = screen.getByText('test mission');
  const list = store.getState().missions.missions;
  expect (list.length).toBe(1);
  expect(await text.toBeInTheDocument);
});
