import React from 'react';
import { Container, Col, Button, Row, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import getCounterData from '../store/actions/action-counter';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countToAdd: 0
        }
    }
    onChangeCountToAdd = (count) => {
        const countToAdd = isNaN(parseInt(count)) ? 0 : parseInt(count);
        this.setState({ countToAdd });
    }
    render() {
        const { count } = this.props;
        return (
            <Container className="mt-5">
                <Col lg={4}>
                    <Row>
                        <Button variant="success" onClick={() => this.props.onIncrement()}><b>+</b></Button>
                        <h1 className="mr-5 ml-5">{count}</h1>
                        <Button variant="success" onClick={() => this.props.onDecrement()}><b>-</b></Button>
                    </Row>
                    <Row className="mt-5">
                        <InputGroup style={{ width: "180px" }}>
                            <FormControl type="number" placeholder="Enter number" defaultValue={this.state.countToAdd} onChange={(e) => this.onChangeCountToAdd(e.target.value)} />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={() => this.props.onAdd(this.state.countToAdd)}>Add</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>
                </Col>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counterState
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(getCounterData({ type: "INCREMENT" })),
        onDecrement: () => dispatch(getCounterData({ type: "DECREMENT" })),
        onAdd: (value) => dispatch(getCounterData({ type: "ADD", value }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

