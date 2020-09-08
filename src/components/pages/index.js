import React, { Component } from 'react';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Index extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div>
    <Menu attached='top'>
      <Menu.Item
        as={Link}
        to="/">
        <span> Home </span>
      </Menu.Item>
      <Dropdown
        text="Sports"
        as={Link}
        to="/sports"
        icon={false}
        item>
      <Dropdown.Menu>
        <Dropdown.Item>Open</Dropdown.Item>
        <Dropdown.Item>Save...</Dropdown.Item>
        <Dropdown.Item>Edit Permissions</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text="Recipes"
        as={Link}
        to="/recipes"
        icon={false}
        item>
        <Dropdown.Menu>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text="Advisors"
        as={Link}
        to="/advisors"
        icon={false}
        item>
        <Dropdown.Menu>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </Menu>
  </div>
    );
  }
}
