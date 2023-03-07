import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bookMission } from '../../redux/missions/missionSlice';

const Mission = ({
  id,
  name,
  description,
  isReserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td><Badge bg="secondary">Not a member</Badge></td>
      <td>
        <Button
          variant={isReserved ? 'success' : 'outline-secondary'}
          onClick={() => dispatch(bookMission(id))}
        >
          {isReserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  id: '',
  name: '',
  description: '',
  isReserved: false,
};
Mission.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  isReserved: PropTypes.bool,
};

export default Mission;
