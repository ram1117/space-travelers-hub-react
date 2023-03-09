import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const MissionsTable = () => {
  const list = useSelector((state) => state.missions.missions);
  return (
    <div className="m-5">
      <Table
        striped
        bordered
        hover
        responsive="sm"
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
