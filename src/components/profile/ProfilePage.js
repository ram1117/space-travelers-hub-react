import { Container, Row, Col } from 'react-bootstrap';
import ProfileMissions from './ProfileMissions';
import ProfileRockets from './ProfileRockets';

const ProfilePage = () => (
  <Container>
    <Row>
      <Col md={6} className="my-5"><ProfileMissions /></Col>
      <Col md={6} className="my-5"><ProfileRockets /></Col>
    </Row>
  </Container>
);

export default ProfilePage;
