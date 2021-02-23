import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, getAllUsers, getUser, updateUser } from './redux/actions/userActions';

function App() {

  const { users } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    // dispatch(getAllUsers());

    // dispatch(getUser('47c27865-0cea-4aa7-964a-1447579920ff'));

    // const user = {
    //   fname: 'How',
    //   lname: 'Are',
    //   age: 30
    // };
    // dispatch(addUser(user));

    // const user = {
    //   fname: 'AAA',
    //   lname: 'BBB',
    //   age: 50
    // }
    // dispatch(updateUser('282c97dc-4fbc-4c6a-b25c-e03181947915', user));

    // dispatch(deleteUser('282c97dc-4fbc-4c6a-b25c-e03181947915'));
    
  }

  const handleGetAllUsers = () => {
    dispatch(getAllUsers());
  }

  const handleGetUser = (event) => {
    event.preventDefault();

    const id = event.target["id"].value;

    dispatch(getUser(id));
  }

  const handleAddUser = (event) => {
    event.preventDefault();

    const fname = event.target["fname"].value;
    const lname = event.target["lname"].value;
    const age = event.target["age"].value;

    const user = {
      fname: fname,
      lname: lname,
      age: age
    };
    dispatch(addUser(user));
  }

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const id = event.target["id"].value;
    const fname = event.target["fname"].value;
    const lname = event.target["lname"].value;
    const age = event.target["age"].value;

    const user = {
      fname: fname,
      lname: lname,
      age: age
    };
    dispatch(updateUser(id, user));
  }

  const handleDeleteUser = (event) => {
    event.preventDefault();

    const id = event.target["id"].value;

    dispatch(deleteUser(id));
  }

  return (
    <div className="App">
      <br />
      <div>All Users</div>
      <br />
      <button onClick={handleGetAllUsers}>Get All Users</button>  
      <div>
        <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          {users.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <br />
      <br />
      <div>Get user by Id</div>
      <br />
      <form onSubmit={handleGetUser}>
        <input type="text" name="id" placeholder="Enter Id..." />
        <button type="submit">Get User</button> 
      </form> 
      <br />
      <br />
      <br />
      <div>Add new user</div>
      <br />
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="fname" placeholder="Enter First Name..." />
          <input type="text" name="lname" placeholder="Enter Last Name..." />
          <input type="number" name="age" placeholder="Enter Age..." />
          <button type="submit">Add User</button> 
        </form>
      </div>
      <br />
      <br />
      <br />
      <div>Update user</div>
      <br />
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="id" placeholder="Enter Id..." />
        <input type="text" name="fname" placeholder="Enter First Name..." />
        <input type="text" name="lname" placeholder="Enter Last Name..." />
        <input type="number" name="age" placeholder="Enter Age..." />
        <button type="submit">Update User</button> 
      </form>
      <br />
      <br />
      <br />
      <div>Delete user</div>
      <br />
      <form onSubmit={handleDeleteUser}>
        <input type="text" name="id" placeholder="Enter Id..." />
        <button type="submit">Delete User</button> 
      </form> 
    </div>
  );
}

export default App;
