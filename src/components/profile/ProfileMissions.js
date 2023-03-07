import { useSelector } from 'react-redux';
import { Stack } from 'react-bootstrap';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((obj) => obj.isReserved === true);
  console.log(joinedMissions);
  return (
    <Stack>

    </Stack>
  );
};

export default ProfileMissions;
