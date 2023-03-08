import { useSelector } from 'react-redux';
import { Stack } from 'react-bootstrap';
import ProfileMission from './ProfileMission';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((obj) => obj.isReserved === true);
  return (
    <Stack gap={2}>
      {joinedMissions.map((mission) => (
        <ProfileMission
          key={mission.id}
          id={mission.id}
          name={mission.name}
          isReserved={mission.isReserved}
          wiki={mission.wiki}
        />
      ))}
    </Stack>
  );
};

export default ProfileMissions;
