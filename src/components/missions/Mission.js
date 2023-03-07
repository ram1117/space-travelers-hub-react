import { Badge, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const Mission = ({ name, description }) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td><Badge bg="secondary">Not a member</Badge></td>
    <td><Button variant="outline-secondary">Join Mission</Button></td>
  </tr>
);

Mission.defaultProps = { name: '', description: '' };
Mission.propTypes = { name: PropTypes.string, description: PropTypes.string };

export default Mission;
