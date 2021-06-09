import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function SeekerNavi() {
  return (
    <div>
      <Menu size="large" fixed="top">
        <Container>
          <Menu.Item name="Ana Menü" />

          <Menu.Item name="Profil" />
          <Menu.Item name="Özgeçmişler" />

          <Menu.Menu position="right">
            <Dropdown item text="İş arayan ismi">
              <Dropdown.Menu>
                <Dropdown.Item>Ayarlar</Dropdown.Item>
                <Dropdown.Item>Yardım</Dropdown.Item>
                <Dropdown.Item>Çıkış</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
