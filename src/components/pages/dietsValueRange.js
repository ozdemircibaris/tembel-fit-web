import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTargets } from '../../actions/authAction';
import { addDietRangeValue } from '../../actions/dietAction';
import _ from 'lodash';
import { Container, Button, Form, Radio, Dropdown, Message, Icon } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"

class DietsValueRange extends Component {
    state = {
        genderStatus: "",
        ageRangeValue: { min: 1, max: 100 },
        sizeRangeValue: { min: 100, max: 230 },
        kgRangeValue: { min: 40, max: 150 },
        selectedTargetValue: ""
    }
    componentWillMount() {
        this.props.fetchTargets()
    }
    handleChange = (e, { value }) => this.setState({ genderStatus: value })
    onTargetChange = (e, { value }) => this.setState({ selectedTargetValue: value })

    onAddDietRangeValue = () => {
        const { genderStatus, ageRangeValue, sizeRangeValue, kgRangeValue, selectedTargetValue } = this.state;
        const { item } = this.props.location;
        this.props.addDietRangeValue(
            genderStatus,
            ageRangeValue.min,
            ageRangeValue.max,
            sizeRangeValue.min,
            sizeRangeValue.max,
            kgRangeValue.min,
            kgRangeValue.max,
            selectedTargetValue,
            item.id
        )
    }
    render() {
        const { dietSpinnerStatus, dietWarningStatus, } = this.props;
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
                    <h3> Cinsiyet </h3>
                    <Form.Field>
                        <Radio
                            label='Erkek'
                            name='radioGroup'
                            style={{marginRight: 20}}
                            value='Erkek'
                            checked={this.state.genderStatus === 'Erkek'}
                            onChange={this.handleChange}
                        />
                        <Radio
                            label='Kadın'
                            name='radioGroup'
                            value='Kadın'
                            checked={this.state.genderStatus === 'Kadın'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <div style={{ marginTop: 20, marginBottom: 20, width: "40%"}}>
                        <h3> Yaş Aralığı </h3>
                        <InputRange
                            maxValue={100}
                            minValue={1}
                            value={this.state.ageRangeValue}
                            onChange={value => this.setState({ ageRangeValue: value })} />
                        <h3> Boy Aralığı </h3>
                        <InputRange
                            maxValue={230}
                            minValue={100}
                            value={this.state.sizeRangeValue}
                            onChange={value => this.setState({ sizeRangeValue: value })} />
                        <h3> Kilo Aralığı </h3>
                        <InputRange
                            maxValue={150}
                            minValue={40}
                            value={this.state.kgRangeValue}
                            onChange={value => this.setState({ kgRangeValue: value })} />
                        <h3> Hedef </h3>
                        <Dropdown
                            placeholder='Hedef seçiniz.'
                            search
                            selection
                            onChange={this.onTargetChange}
                            options={this.props.targetValues} />
                    </div>
                    <Button onClick={this.onAddDietRangeValue}>Ekle</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const { dietSpinnerStatus, dietWarningStatus } = state.DietsReducer;
    const targetValues = _.map(state.AuthReducer.targetValues, (state, index) => ({
        key: index,
        text: state.title,
        value: state.id,
    }))
    return {
        targetValues,
        dietSpinnerStatus,
        dietWarningStatus
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTargets,
        addDietRangeValue
    }
)(DietsValueRange);