import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sportCatTitleChange, sportCatImageUrlChange, addSportCategories, fetchSportCategories } from '../../actions/sportsAction';
import { Container, Button, Form, Table, Icon, Menu, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Sports extends Component {

  componentWillMount() {
    this.props.fetchSportCategories()
  }

  onTitleChanged    = (e, { name, value }) => this.props.sportCatTitleChange(value)
  onImageUrlChanged = (e, { name, value }) => this.props.sportCatImageUrlChange(value)

  onAddSportCategories = () => this.props.addSportCategories(this.props.sportCatTitleValue, this.props.sportCatImageUrlValue)

  render() {
    const { sportCatValues, sportSpinnerStatus, sportWarningStatus, sportCatTitleValue, sportCatImageUrlValue, } = this.props;
    return (
      <Container>
        {
          sportWarningStatus == "success" ?
         <Message success icon style={{ marginTop: 20, marginBottom: 20 }}>
          <Icon name='info' />
          <Message.Content>
            <Message.Header>Your user registration was successful</Message.Header>
            You may now log-in with the username you have chosen
          </Message.Content>
        </Message>:null
        }
        {
          sportWarningStatus == "error" ?
         <Message error icon style={{ marginTop: 20, marginBottom: 20 }}>
          <Icon name='info' />
          <Message.Content>
            <Message.Header>Your user registration was successful</Message.Header>
            You may now log-in with the username you have chosen
          </Message.Content>
        </Message>:null
        }
        <Form style={{ marginTop: 20, marginBottom: 20 }} loading={sportSpinnerStatus}>
          <Form.Input
            onChange={this.onTitleChanged}
            value={sportCatTitleValue}
            label='Title'
            placeholder='fitness, açık alan..' />
          <Form.Input
            onChange={this.onImageUrlChanged}
            value={sportCatImageUrlValue}
            label='Image'
            placeholder='Image url' />
          <Button onClick={this.onAddSportCategories}>Ekle</Button>
        </Form>
        <Table celled selectable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Image URL</Table.HeaderCell>
              <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {
            sportCatValues.map((item, index) => {
              return(
                <Table.Row key={item.id}>
                  <Table.Cell collapsing> {item.id} </Table.Cell>
                  <Table.Cell> {item.title == null ? "null":item.title} </Table.Cell>
                  <Table.Cell><a target="_blank" href={`${item.image_url}`}> {item.image_url == null ? "null":item.image_url}</a> </Table.Cell>
                  <Table.Cell collapsing>
                    <Button inverted color="red" style={{ marginRight: 10 }}> Sil</Button>
                    <Button inverted color="olive" style={{ marginRight: 10 }}> Güncelle</Button>
                    <Button as={Link} to={{
                      pathname: "/sports/sub-cats",
                      item: item
                    }} inverted color="brown"> Detay</Button>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { sportCatTitleValue, sportCatImageUrlValue, sportSpinnerStatus, sportCatValues, sportWarningStatus } = state.SportReducer
  return {
    sportCatTitleValue,
    sportCatImageUrlValue,
    sportSpinnerStatus,
    sportCatValues,
    sportWarningStatus
  }
}

export default connect(
  mapStateToProps,
  {
    sportCatTitleChange,
    sportCatImageUrlChange,
    addSportCategories,
    fetchSportCategories
  }
)(Sports)