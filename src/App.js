import "./App.css";
import SeekerNavi from "./layouts/seeker/SeekerNavi";
import "semantic-ui-css/semantic.min.css";
import CvSeekerDashboard from "./layouts/seeker/CvSeekerDashboard";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="SeekerMain">
      <SeekerNavi />
      <Container className="main">
        <CvSeekerDashboard />
      </Container>
    </div>
  );
}

export default App;
