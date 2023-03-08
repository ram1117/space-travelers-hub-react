import { screen, render, fireEvent } from '@testing-library/react';
import renderWithProvider from '../utils/renderWithProvider';
import MissionsTable from '../components/missions/MissionsTable';

describe('testing Mission page UI', () => {
  renderWithProvider(<MissionsTable />);
  const missionButtons = screen.findAllByText('Status');
  expect(missionButtons).toHaveLength(1);
});