import React from 'react';

class Form extends React.Component {
  state = {
    userList: [],
    error: false,
    loading: false,
  };

  componentDidMount() {
    const url = 'http://uinames.com/api/?amount=5&ext';
    fetch(url)
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(data => this.setState({ userList: data }))
      .catch(error => this.setState({ error: true }));
  }

  getUsers = event => {
    event.preventDefault();
    console.log('Hello');
    // const { userList } = this.state;
    console.log(this.state.userList);
    return (
      <div>
        {this.state.userList ? (
          this.state.userList.map(user => (
            <div key={user.email}>
              {user.name}
              <br />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getUsers}>
          <button type="submit">get users</button>
        </form>
        <this.getUsers />
      </div>
    );
  }
}
export default Form;
