import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RocketsFalcon from './RocketsFalcon';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rockets.toFetch);
  useEffect(() => {
    if (status) {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);
  return (
    <RocketsFalcon />
  );
};

export default RocketsPage;
