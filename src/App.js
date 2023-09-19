import './App.css';
import MessagesList from './components/MessagesList/MessagesList';
import NewMessage from './components/NewMessage/NewMessage';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <div className="App">
      <UsersList />
      <div className='MessagesContainer'>
        <MessagesList />
        <NewMessage />
      </div>
    </div>
  );
}

export default App;
