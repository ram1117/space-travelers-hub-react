import { screen, render, fireEvent } from '@testing-library/react';
import  renderWithProvider  from '../utils/test-util';
import MissionsTable from '../components/missions/MissionsTable';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';

test('testing Mission page UI', () => {
  const missions = [{
    id: 'testmission1',
    name: 'test1',
    descriptions: 'test mission',
    isReserved: false,
    wiki: '',
  }];
  renderWithProvider(<MissionsTable />);
  const buttons = screen.getAllByText('Mission');
  expect(buttons).toHaveLength(1);
});