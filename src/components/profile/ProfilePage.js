import { Container, Row, Col } from 'react-bootstrap';
import ProfileMissions from './ProfileMissions';

const ProfilePage = () => (
  <Container>
    <Row>
      <Col sm={6} className="my-5"><ProfileMissions sm={6} /></Col>
      <Col sm={6} className="my-5"><ProfileMissions sm={6} /></Col>
    </Row>
  </Container>
);

export default ProfilePage;
