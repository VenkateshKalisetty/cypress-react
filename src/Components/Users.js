import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getUserData } from './store/actions/action-user';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      initialForm: {
        name: "",
      },
      childProps: {
        name: "",
      }
    }
    this.props.getUserData();
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
    const { name } = this.state.initialForm;
    return (
      <div className="App">
        <h2>React - Redux</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {!inProgress ? users.map(v => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
                <td>{v.website}</td>
              </tr>
            )) : (<tr>
              <td colSpan="4">Users data loading.....!</td>
            </tr>)}
            {!inProgress && error && error !== "" && (<tr><td colSpan="4">{error}</td></tr>)}
          </tbody>
        </table>

        {/* <div className="input-field">
          <label>Enter: <input type="text" value={this.state.inputValue} onChange={(event) => this.handleOnChange(event.target.value)} /></label>
          <h3>{this.state.inputValue}</h3>
        </div> */}

        {/* <div className="state-inputs">
          <label>Name: <input type="text" value={name} onChange={(e) => this.setState({ initialForm: { name: e.target.value } })} /></label>
          <button style={{ width: "10%", marginTop: "20px" }} onClick={() => this.handleOnClick()}>Submit</button>
        </div>
        <Child childProps={this.state.childProps} /> */}
      </div>
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
)(Users);