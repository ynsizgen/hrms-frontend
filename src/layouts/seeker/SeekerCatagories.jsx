import React from "react";
import { Menu } from 'semantic-ui-react'

export default function SeekerCatagories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Profil" />
        <Menu.Item name="Özgeçmiş" />
      </Menu>
    </div>
  );
}
