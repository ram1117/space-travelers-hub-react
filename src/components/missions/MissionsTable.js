import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import styles from './MissionsTable.module.css';

const MissionsTable = () => {
  const list = useSelector((state) => state.missions.missions);
  return (
    <Table striped bordered hover responsive="md" className={styles.missionTable}>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {list.map((obj) => <Mission key={obj.id} name={obj.name} description={obj.description} />)}
      </tbody>
    </Table>
  );
};

export default MissionsTable;
