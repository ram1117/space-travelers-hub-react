import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionsTable from './MissionsTable';
import { fetchMissions } from '../../redux/missions/missionSlice';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.missions.toFetch);
  useEffect(() => {
    if (status) {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);
  return (
      <MissionsTable />
  );
};

export default MissionsPage;
