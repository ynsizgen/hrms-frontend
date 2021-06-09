import React, { useState, useEffect } from "react";
import { Table, Header , Icon} from "semantic-ui-react";
import CvService from "../services/cvService";

export default function CvSeekerList() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getAll().then((result) => setCvs(result.data.data));
  });

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>Bütün cv ler</Header.Content>
      </Header>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Cv Id</Table.HeaderCell>
            <Table.HeaderCell>Seeker Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.cvId}>
              <Table.Cell>{cv.cvId}</Table.Cell>
              <Table.Cell>{cv.seeker.firstName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
