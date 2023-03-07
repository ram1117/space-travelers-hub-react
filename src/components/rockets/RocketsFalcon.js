import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './RocketsFalcon.module.css';

const RocketsFalcon = () => (
  <Card className={styles.rocketFalcon} style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Falcon 1</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card content.
      </Card.Text>
      <Button variant="primary">Reserve Rocket</Button>
    </Card.Body>
  </Card>
);

export default RocketsFalcon;
