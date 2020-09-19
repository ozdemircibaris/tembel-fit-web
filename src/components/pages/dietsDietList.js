import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDietList, dietCatTitleChange, addDietList } from '../../actions/dietAction';
import { Container, Button, Form, Table, Icon, Message, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DietsDietList extends Component {
    componentWillMount() {
        this.props.fetchDietList(this.props.location.item.id)
    }
    onTitleChanged = (e, { name, value }) => this.props.dietCatTitleChange(value)
    onAddDietList = () => this.props.addDietList(this.props.dietCatTitleValue, this.props.location.item.id)

    render() {
        const { dietListValues, dietSpinnerStatus, dietWarningStatus, dietCatTitleValue, } = this.props;
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
                    <Button onClick={this.onAddDietList}>Ekle</Button>
                </Form>
                <Table celled selectable inverted>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {
                        dietListValues.map((item, index) => {
                            return(
                                <Table.Row key={item.id}>
                                <Table.Cell collapsing> {item.id} </Table.Cell>
                                <Table.Cell> {item.title == null ? "null":item.title} </Table.Cell>
                                <Table.Cell collapsing>
                                    <Button inverted color="red" style={{ marginRight: 10 }}> Sil</Button>
                                    <Button inverted color="olive" style={{ marginRight: 10 }}> Güncelle</Button>
                                    <Button as={Link} to={{
                                    pathname: "/diets/sub-cats",
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
        )
    }
}

const mapStateToProps = state => {
    const { dietListValues, dietCatTitleValue, dietSpinnerStatus, dietWarningStatus } = state.DietsReducer;
    return {
        dietListValues,
        dietCatTitleValue,
        dietSpinnerStatus,
        dietWarningStatus
    }
}

export default connect(
    mapStateToProps,
    {
        fetchDietList,
        dietCatTitleChange,
        addDietList
    }
)(DietsDietList);