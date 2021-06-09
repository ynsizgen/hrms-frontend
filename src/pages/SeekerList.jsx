import React, { useState, useEffect } from "react";
import { Table, Header , Icon} from "semantic-ui-react";
import SeekerService from "../services/seekerService";

export default function SeekerList() {
  const [seekers, setSeekers] = useState([]);

  useEffect(() => {
    let seekerService = new SeekerService();
    seekerService.getAll().then((result) => setSeekers(result.data.data));
  });

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>Bütün iş arayanlar</Header.Content>
      </Header>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş arayan Id</Table.HeaderCell>
            <Table.HeaderCell>İş arayan Adı</Table.HeaderCell>
            <Table.HeaderCell>İş arayan Soyadı</Table.HeaderCell>
            <Table.HeaderCell>İş arayan Tc</Table.HeaderCell>
            <Table.HeaderCell>İş arayan Doğum tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {seekers.map((seeker) => (
            <Table.Row key={seeker.id}>
              <Table.Cell>{seeker.id}</Table.Cell>
              <Table.Cell>{seeker.firstName}</Table.Cell>
              <Table.Cell>{seeker.lastName}</Table.Cell>
              <Table.Cell>{seeker.nationalityNumber}</Table.Cell>
              <Table.Cell>{seeker.dateOfBirth}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
