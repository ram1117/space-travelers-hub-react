import { useSelector } from 'react-redux';
import Rockets from './Rockets';

const RocketsFalcon = () => {
  const rocket = useSelector((state) => state.rockets.rockets);
  return (
    <div>
      {rocket.map((obj) => (
        <Rockets
          key={obj.id}
          name={obj.name}
          description={obj.description}
          image={obj.image}
        />
      ))}
    </div>
  );
};

export default RocketsFalcon;
