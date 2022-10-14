import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import SubHeader from "../components/SubHeader";
import CommentsList from "../features/comments/CommentsList";

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = useSelector(selectCampsiteById(campsiteId));
  console.log('campsite:', campsite); 

  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
