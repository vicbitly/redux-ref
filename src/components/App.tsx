import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootStore } from '../reducers';
import { requestUsers } from '../actions/users';
import { usersSelector, usersCountSelector, usersFullnamesSelector } from '../selectors/users';
import { UserList } from './UserList';
import { List } from './List';
import './App.css';

class App extends React.Component<Props> {
  render() {
    const users = usersSelector(this.props.state);
    const userCount = usersCountSelector(this.props.state);
    const userFullnames = usersFullnamesSelector(this.props.state);

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
        {(userCount > 0) && (<div>
          <div>
            <UserList users={users} count={userCount} />
          </div>
          <div>
            <List items={userFullnames} count={userCount} />
          </div>
        </div>)}
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
