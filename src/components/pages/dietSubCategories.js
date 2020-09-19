import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDietSubCategories, dietCatTitleChange, addDietSubCat } from '../../actions/dietAction';
import { Container, Button, Form, Card, Icon, Message, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DietSubCategories extends Component {

    componentWillMount() {
        this.props.fetchDietSubCategories(this.props.location.item.id, 25)
    }
    onTitleChanged = (e, { name, value }) => this.props.dietCatTitleChange(value)
    onAddDietSubCat = () => this.props.addDietSubCat(this.props.dietCatTitleValue, this.props.location.item.id)

    render() {
        const { dietSubCategoriesValues, dietSpinnerStatus, dietWarningStatus, dietCatTitleValue, } = this.props;
        console.log("dietSubCategoriesValues", dietSubCategoriesValues)
        return (
            <Container>
                {
                    dietWarningStatus == "success" ?
                    <Message success icon style={{ marginTop: 20, marginBottom: 20 }}>
                    <Icon name='info' />
                    <Message.Content>
                        <Message.Header>Your user registration was successful</Message.Header>
                        You may now log-in with the username you have chosen
                    </Message.Content>
                    </Message>:null
                }
                {
                    dietWarningStatus == "error" ?
                    <Message error icon style={{ marginTop: 20, marginBottom: 20 }}>
                    <Icon name='info' />
                    <Message.Content>
                        <Message.Header>Your user registration was successful</Message.Header>
                        You may now log-in with the username you have chosen
                    </Message.Content>
                    </Message>:null
                }
                <Form style={{ marginTop: 20, marginBottom: 20 }} loading={dietSpinnerStatus}>
                    <Form.Input
                        onChange={this.onTitleChanged}
                        value={dietCatTitleValue}
                        label='Öğün'
                        placeholder='sabah, öğlen..' />
                    <Button onClick={this.onAddDietSubCat}>Ekle</Button>
                </Form>
                <Grid columns={3}>
                    {
                        dietSubCategoriesValues.map((item, index) => {
                            return(
                                <Grid.Column key={item.id}>
                                    <Card
                                        header={item.title}
                                        description={() => (
                                            <div>
                                                {
                                                    item.diet_value_range ?
                                                    <div style={{flexDirection: 'row', borderWidth: 1,}}>
                                                        <p> BMI_max: {item.BMI_max} </p>
                                                        <p> BMI_min: {item.BMI_min} </p>
                                                    </div>
                                                    :
                                                    <p> değer aralığı durumu: girilmemiş </p>
                                                }
                                                {
                                                    item.diet_lists ?
                                                   item.diet_lists.length != 0 ? item.diet_lists.map((item, index) => {
                                                        return (
                                                            <p key={item.id}> { item.title } </p>
                                                        )
                                                    }):<p> liste oluşturulmamış </p>:null
                                                }
                                                <Button as={Link} to={{
                                                    pathname: "/diets/sub-cats/value-range",
                                                    item: item
                                                    }}>Değer aralığı </Button>
                                                <Button as={Link} to={{
                                                    pathname: "/diets/sub-cats/diet-list",
                                                    item: item
                                                    }}>Liste </Button>
                                            </div>
                                        )} />
                                </Grid.Column>
                            )
                        })
                    }
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const { dietSubCategoriesValues, dietCatTitleValue, dietSpinnerStatus, dietWarningStatus } = state.DietsReducer;
    return {
        dietSubCategoriesValues,
        dietCatTitleValue,
        dietSpinnerStatus,
        dietWarningStatus
    }
}

export default connect(
    mapStateToProps,
    {
        fetchDietSubCategories,
        dietCatTitleChange,
        addDietSubCat
    }
)(DietSubCategories);