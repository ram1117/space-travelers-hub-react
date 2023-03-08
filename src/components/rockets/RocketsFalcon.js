import { useSelector } from 'react-redux';
import Rockets from './Rockets';

const RocketsFalcon = () => {
  const rocket = useSelector((state) => state.rockets.rockets);
  return (
    <div>
      {rocket.map((obj) => (
        <Rockets
          key={obj.id}
          id={obj.id}
          name={obj.name}
          description={obj.description}
          image={obj.image}
          isReserved={obj.isReserved}
        />
      ))}
    </div>
  );
};

export default RocketsFalcon;
