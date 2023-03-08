import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import styles from '../../styles/MissionsTable.module.css';

const MissionsTable = () => {
  const list = useSelector((state) => state.missions.missions);
  return (
    <div>
      <Table
        striped
        bordered
        hover
        responsive="sm"
        className={styles.missionTable}
      >
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {list.map((obj) => (
            <Mission
              key={obj.id}
              id={obj.id}
              name={obj.name}
              description={obj.description}
              isReserved={obj.isReserved}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsTable;
