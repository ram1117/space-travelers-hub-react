import { useSelector } from 'react-redux';
import { Stack } from 'react-bootstrap';
import ProfileRocket from './ProfileRocket';

const ProfileRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reserveRocket = rockets.filter((obj) => obj.isReserved === true);
  if (reserveRocket.length === 0) {
    return (
      <Stack>
        <h3 className="text-muted">Please reserve Rocket that you want to travel with...</h3>
      </Stack>
    );
  }
  return (
    <Stack gap={2}>
      {reserveRocket.map((rockets) => (
        <ProfileRocket
          key={rockets.id}
          id={rockets.id}
          name={rockets.name}
          isReserved={rockets.isReserved}
        />
      ))}
    </Stack>
  );
};

export default ProfileRockets;
