import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipesCategories, sendRecipes } from '../../actions/recipesActions';
import { Container, Button, Form, Table, Label, Icon, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Recipes extends Component {
  state = {
    titleValue:    "",
    imageUrlValue: ""
  }
  componentWillMount() {
    this.props.fetchRecipesCategories()
  }

  onTitleChanged    = (e, { name, value }) => this.setState({ titleValue: value })
  onImageUrlChanged = (e, { name, value }) => this.setState({ imageUrlValue: value })
  onSendRecipes     = () => this.props.sendRecipes(this.state.titleValue, this.state.imageUrlValue)

  render() {
    const { recipesCategoriesValue } = this.props;
    return (
      <Container>
        <Form style={{ marginTop: 20, marginBottom: 20}} loading={false}>
          <Form.Input
            onChange={this.onTitleChanged}
            label='Title'
            name="title"
            placeholder='Kekler, omletler..' />
          <Form.Input
            onChange={this.onImageUrlChanged}
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
  const { recipesCategoriesValue } = state.RecipesReducer;
  return {
    recipesCategoriesValue
  }
}

export default connect(
  mapStateToProps,
  {
    fetchRecipesCategories,
    sendRecipes
  }
)(Recipes)