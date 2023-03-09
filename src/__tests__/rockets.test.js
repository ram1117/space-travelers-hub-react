import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/rockets/Rockets';
import RocketsFalcon from '../components/rockets/RocketsFalcon';

describe('testing snapshots of Rocket components', () => {
  it('testing Rocket component', () => {
    const rocket = renderer.create(<Provider store={store}><Rockets /></Provider>).toJSON();
    expect(rocket).toMatchSnapshot();
  });
  it('testing Rockets Falcon component', () => {
    const rocketFalcon = renderer.create(
      <Provider store={store}>
        <RocketsFalcon />
      </Provider>,
    ).toJSON();
    expect(rocketFalcon).toMatchSnapshot();
  });
});
