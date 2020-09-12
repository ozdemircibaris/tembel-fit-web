import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipesDetailContent, recipesTitleChange, recipesImageUrlChange, sendRecipes } from '../../actions/recipesActions';
import { Container, Button, Form, Table, Icon, Menu, Message } from 'semantic-ui-react'

class RecipesDetailContent extends Component {
  componentWillMount() {
    this.props.fetchRecipesDetailContent()
  }

  onTitleChanged    = (e, { name, value }) => this.props.recipesTitleChange(value)
  onImageUrlChanged = (e, { name, value }) => this.props.recipesImageUrlChange(value)
  onSendRecipes     = () => this.props.sendRecipes(this.props.recipesTitleValue, this.props.recipesImageUrlValue)

  render() {
    const { recipesCategoriesValue, recipesSpinnerStatus, recipesWarningStatus, recipesTitleValue, recipesImageUrlValue, } = this.props;
    return (
      <Container>
        {
          recipesWarningStatus == "success" ?
         <Message success icon style={{ marginTop: 20, marginBottom: 20 }}>
          <Icon name='info' />
          <Message.Content>
            <Message.Header>Your user registration was successful</Message.Header>
            You may now log-in with the username you have chosen
          </Message.Content>
        </Message>:null
        }
        {
          recipesWarningStatus == "error" ?
         <Message error icon style={{ marginTop: 20, marginBottom: 20 }}>
          <Icon name='info' />
          <Message.Content>
            <Message.Header>Your user registration was successful</Message.Header>
            You may now log-in with the username you have chosen
          </Message.Content>
        </Message>:null
        }
        <Form style={{ marginTop: 20, marginBottom: 20 }} loading={recipesSpinnerStatus}>
          <Form.Input
            onChange={this.onTitleChanged}
            value={recipesTitleValue}
            label='Title'
            placeholder='Kekler, omletler..' />
          <Form.Input
            onChange={this.onImageUrlChanged}
            value={recipesImageUrlValue}
            label='Image'
            placeholder='Image url' />
          <Button onClick={this.onSendRecipes}>Ekle</Button>
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
            recipesCategoriesValue.map((item, index) => {
              return(
                <Table.Row key={item.id}>
                  <Table.Cell collapsing> {item.id} </Table.Cell>
                  <Table.Cell> {item.title == null ? "null":item.title} </Table.Cell>
                  <Table.Cell><a target="_blank" href={`https://${item.image}`}> {item.image == null ? "null":item.image}</a> </Table.Cell>
                  <Table.Cell collapsing>
                  <Button inverted color="red" style={{ marginRight: 10 }}> Sil</Button>
                    <Button inverted color="olive"> Güncelle</Button>
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
  const {
    recipesCategoriesValue,
    recipesTitleValue,
    recipesImageUrlValue,
    recipesSpinnerStatus,
    recipesWarningStatus
  } = state.RecipesReducer;
  return {
    recipesCategoriesValue,
    recipesTitleValue,
    recipesImageUrlValue,
    recipesSpinnerStatus,
    recipesWarningStatus
  }
}

export default connect(
  mapStateToProps,
  {
    fetchRecipesDetailContent,
    recipesTitleChange,
    recipesImageUrlChange,
    sendRecipes,
  }
)(RecipesDetailContent)