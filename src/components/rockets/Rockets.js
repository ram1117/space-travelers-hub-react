import { Badge, Button, Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './RocketsFalcon.module.css';
import { bookRockets } from '../../redux/rockets/rocketsSlice';

const Rockets = ({
  id, name, description, image, isReserved,
}) => {
  const dispatch = useDispatch();
  return (
    <Card className={styles.rocketFalcon} style={{ width: '18rem' }}>
      <Card.Img variant="left" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {isReserved && <Badge bg="info">Reserved</Badge>}
        <Card.Text>{description}</Card.Text>
        <Button
          className="button"
          variant={isReserved ? 'outline-secondary' : 'primary'}
          onClick={() => dispatch(bookRockets(id))}
        >
          {isReserved ? 'Cancel Reservation' : 'Reserve rocket'}
        </Button>
      </Card.Body>
    </Card>
  );
};

Rockets.defaultProps = {
  id: '', name: '', description: '', image: '', isReserved: false,
};
Rockets.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isReserved: PropTypes.bool,
};

export default Rockets;
