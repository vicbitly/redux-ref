import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootStore } from '../reducers';
import { requestUsers } from '../actions/users';
import { UserList } from './UserList';
import '.App.css';

class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React / Redux / Thunks Reference Implementation</h2>
          <p>
            <input
              type="button"
              value="Get Users!"
              onClick={this.props.handleClick}
            />
          </p>
        </div>
        {(this.props.state.users.users.length > 0) && <div>
          <UserList users={this.props.state.users.users} />
        </div>}
      </div>
    );
  }
}

interface Props extends StateProps, DispatchProps {}

interface StateProps {
  state: RootStore;
}

interface DispatchProps {
  handleClick: () => void;
}

function mapStateToProps(state: RootStore, ownProps: Props): StateProps {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootStore>): DispatchProps {
  return {
    handleClick: () => dispatch(requestUsers())
  };
}

export const AppConnected = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);
