import { Container, Row, Col } from 'react-bootstrap';
import ProfileMissions from './ProfileMissions';

const ProfilePage = () => (
  <Container>
    <Row>
      <Col md={6} className="my-5"><ProfileMissions /></Col>
    </Row>
  </Container>
);

export default ProfilePage;
