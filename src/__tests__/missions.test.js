import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionsTable from '../components/missions/MissionsTable';
import MissionsPage from '../components/missions/MissionsPage';
import Mission from '../components/missions/Mission';

describe('testing snapshots of Mission components', () => {
  it('testing Mission component', () => {
    const mission = renderer.create(<Provider store={store}><Mission /></Provider>).toJSON();
    expect(mission).toMatchSnapshot();
  });
  it('testing MissionsTable component', () => {
    const missionTable = renderer.create(
      <Provider store={store}>
        <MissionsTable />
      </Provider>,
    ).toJSON();
    expect(missionTable).toMatchSnapshot();
  });
  it('testing MissionsPage component', () => {
    const missionPage = renderer.create(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    ).toJSON();
    expect(missionPage).toMatchSnapshot();
  });
});
