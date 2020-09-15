import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportSubCatTabContent, addSportSubCatTabContent, sportCatImageUrlChange } from '../../actions/sportsAction';
import { Container, Button, Form, Table, Icon, Menu, Message } from 'semantic-ui-react';

class SportSubCatTabContent extends Component {
    componentWillMount() {
        this.props.fetchSportSubCatTabContent(this.props.location.item.id)
    }

    onVideoIDChanged    = (e, { name, value }) => this.props.sportCatImageUrlChange(value)
    onAddSportSubCatTabContent = () => this.props.addSportSubCatTabContent(this.props.sportCatImageUrlValue, this.props.location.item.id)

    render() {
        const { sportSubCatTabContentValue, sportWarningStatus, sportSpinnerStatus, sportCatImageUrlValue } = this.props;
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
                        onChange={this.onVideoIDChanged}
                        value={sportCatImageUrlValue}
                        label='Video ID'
                        placeholder={`youtube.com/watch?v="ocZ4fHvqt84"&`} />
                    <Button onClick={this.onAddSportSubCatTabContent}>Ekle</Button>
                </Form>
                <Table celled selectable inverted>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Video ID</Table.HeaderCell>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {
                        sportSubCatTabContentValue.map((item, index) => {
                            return(
                                <Table.Row key={item.id}>
                                <Table.Cell collapsing> {item.id} </Table.Cell>
                                <Table.Cell> {item.video_url == null ? "null":item.video_url} </Table.Cell>
                                <Table.Cell collapsing>
                                    <Button inverted color="red" style={{ marginRight: 10 }}> Sil</Button>
                                    <Button inverted color="olive" style={{ marginRight: 10 }}> Güncelle</Button>
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
    const { sportSubCatTabContentValue, sportWarningStatus, sportSpinnerStatus, sportCatTitleValue, sportCatImageUrlValue } = state.SportReducer
    return {
        sportSubCatTabContentValue,
        sportSubCatTabContentValue, sportWarningStatus, sportSpinnerStatus, sportCatTitleValue, sportCatImageUrlValue
    }
}

export default connect(
    mapStateToProps,
    {
        fetchSportSubCatTabContent,
        sportCatImageUrlChange,
        addSportSubCatTabContent
    }
)(SportSubCatTabContent)