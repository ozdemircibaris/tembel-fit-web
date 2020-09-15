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
      <Menu.Item
        as={Link}
        to="/sports">
        <span> Sports </span>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/diet">
        <span> Diet </span>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/recipes">
        <span> Recipes </span>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/advisors">
        <span> Advisors </span>
      </Menu.Item>
    </Menu>
  </div>
    );
  }
}
