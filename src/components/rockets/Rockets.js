import { Button, Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import styles from './RocketsFalcon.module.css';

const Rockets = ({
  name, description, image,
}) => (
  <Card className={styles.rocketFalcon} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary">Reserve Rocket</Button>
    </Card.Body>
  </Card>
);

Rockets.defaultProps = { name: '', description: '', image: '' };
Rockets.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Rockets;
