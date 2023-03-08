import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ProfileMission from '../components/profile/ProfileMission';
import ProfileMissions from '../components/profile/ProfileMissions';
import ProfilePage from '../components/profile/ProfilePage';

describe('testing Profile Page components', () => {
  it('testing ProfilePage component', () => {
    const profilePage = renderer.create(<Provider store={store}><ProfilePage /></Provider>);
    expect(profilePage).toMatchSnapshot();
  });

  it('testing ProfileMissions component', () => {
    const profileMissions = renderer.create(<Provider store={store}><ProfileMissions /></Provider>);
    expect(profileMissions).toMatchSnapshot();
  });

  it('testing ProfileMissions component', () => {
    const profileMission = renderer.create(<Provider store={store}><ProfileMission /></Provider>);
    expect(profileMission).toMatchSnapshot();
  });
});