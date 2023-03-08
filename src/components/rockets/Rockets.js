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
    <Card className="d-flex flex-row m-5">
      <Card.Img className={styles.rocketImage} variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <h4 className=" card-title text-start p-1 ">{name}</h4>
        {isReserved && <Badge className="align-self-start" bg="info">Reserved</Badge>}
        <Card.Text className=" text-start p-1 ">{description}</Card.Text>
        <Button
          className="align-self-start"
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
