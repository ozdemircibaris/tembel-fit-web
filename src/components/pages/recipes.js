import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipesCategories, sendRecipes } from '../../actions/recipesActions';
import { Button, Form } from 'semantic-ui-react'

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
    // console.log(this.state.titleValue)
    return (
      <div>
        <Form loading={false}>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  {
    fetchRecipesCategories,
    sendRecipes
  }
)(Recipes)