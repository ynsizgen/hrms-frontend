import React from "react";
import CvSeekerList from "../../pages/CvSeekerList";
import SeekerCatagories from "./SeekerCatagories";
import { Grid} from "semantic-ui-react";
import SeekerList from "../../pages/SeekerList";

export default function CvSeekerDashboard() {
  return (
    <div>
      <div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <SeekerCatagories />
            </Grid.Column>

            <Grid.Column width={12}>
              <CvSeekerList />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              
            </Grid.Column>

            <Grid.Column width={12}>
              <SeekerList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
