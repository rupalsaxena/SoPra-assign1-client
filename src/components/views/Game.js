import {useEffect, useState} from 'react';
import {api, handleError} from 'helpers/api';
import {Button} from 'components/ui/Button';
import {useHistory} from 'react-router-dom';
import BaseContainer from "components/ui/BaseContainer";
import "styles/views/Game.scss";

const Game = () => {
  const history = useHistory();
  const [users, setUsers] = useState(null);

  async function logout(id) {
    const request_to = '/logout/' + String(id)
    try {
      const res = await api.put(request_to)
    } catch (error) {
      console.error(`Something went wrong while fetching the users: \n${handleError(error)}`);
      console.error("Details:", error);
      alert("Something went wrong while fetching the users! See the console for details.");
    }
    
    localStorage.removeItem('token');
    history.push('/login');
  }

  function userProfile (id) {
    let push_to = '/users/' + String(id);
    history.push(push_to);
  }

  const Player = ({user}) => (
    <div className="player container">
      <Button
      width="500px"
      onClick={() => userProfile(user.id)}
      className = "game username-button-container"
      >
        {user.username}
      </Button>
    </div>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/users');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(response.data);

      } catch (error) {
        console.error(`Something went wrong while fetching the users: \n${handleError(error)}`);
        console.error("Details:", error);
        alert("Something went wrong while fetching the users! See the console for details.");
      }
    }

    fetchData();
  }, []);

  let content;

  if (users) {
    content = (
      <div className="game">
          {users.map(user => (
            <Player user={user} key={user.id}/>
          ))}
        <Button
          width="100%"
          onClick={() => logout(localStorage.getItem("id"))}
          className = "game logout-container"
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <BaseContainer className="game container">
      <h2>Users Overview</h2>
      <p className="game paragraph">
        Select profile to view!
      </p>
      {content}
    </BaseContainer>
  );
}

export default Game;
