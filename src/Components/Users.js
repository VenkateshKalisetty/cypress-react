import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import getUserData from '../store/actions/action-user';

class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
        if (!props.userState.users.length) { this.props.getUserData(); }
    }

    handleOnChange = (inputValue) => {
        this.setState({
            inputValue
        });
    }

    handleOnClick = () => {
        const { name } = this.state.initialForm;
        this.setState({
            childProps: {
                name
            }
        });
    }

    render() {
        const { inProgress, users, error } = this.props.userState;
        return (
            <Container className="mt-5">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!inProgress ? users.map((v, index) => (
                            <tr key={v.id}>
                                <td>{index + 1}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.phone}</td>
                                <td>{v.website}</td>
                            </tr>
                        )) : (<tr>
                            <td colSpan="5">Users data loading.....!</td>
                        </tr>)}
                        {!inProgress && error ? (<tr><td colSpan="5">{error}</td></tr>) : (<tr><td colSpan="5"></td></tr>)}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(getUserData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);