import { useDispatch } from 'react-redux';
import {
  Badge, Button,
} from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { bookRockets } from '../../redux/rockets/rocketsSlice';

const ProfileRocket = ({
  id,
  name,
  isReserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="border py-3">
      <h3 className="my-2 fs-3">
        {name}
        {isReserved && <Badge className="ms-4 fs-6" bg="success">Reserved</Badge>}
      </h3>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-success"
          className="mx-1"
          onClick={() => dispatch(bookRockets(id))}
        >
          Cancel Reservation
        </Button>
      </div>
    </div>
  );
};

ProfileRocket.defaultProps = {
  id: '',
  isReserved: false,
  name: '',
};

ProfileRocket.propTypes = {
  id: PropTypes.string,
  isReserved: PropTypes.bool,
  name: PropTypes.string,
};

export default ProfileRocket;
