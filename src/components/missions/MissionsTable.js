import { Table, Badge, Button } from 'react-bootstrap';
import styles from './MissionsTable.module.css';

const MissionsTable = () => (
  <Table striped bordered hover responsive="md" className={styles.missionTable}>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thaicom</td>
        <td>
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </td>
        <td><Badge bg="secondary">Not a member</Badge></td>
        <td><Button variant="outline-secondary">Join Mission</Button></td>
      </tr>
    </tbody>
  </Table>
);

export default MissionsTable;
