import React, {useEffect, useState} from 'react';
import {api, handleError} from 'helpers/api';
import {Spinner} from 'components/ui/Spinner';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import BaseContainer from "components/ui/BaseContainer";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import "styles/views/UserProfile.scss";

const UserProfile = () => {
  const history = useHistory();
  const [user, setUsers] = useState(null);
  const {id} = useParams();
  function goBack () {
    history.push('/game');
  }
  useEffect(() => {
      // effect callbacks are synchronous to prevent race conditions. So we put the async function inside:
      async function fetchData() {
        try {
          const request_to = '/users/' + String(id)
          const response = await api.get(request_to);
  
          // Get the returned users and update the state.
          setUsers(response.data);

          console.log('request to:', response.request.responseURL);
          console.log('status code:', response.status);
          console.log('status text:', response.statusText);
          console.log('requested data:', response.data);
  
          // See here to get more data.
          console.log(response);
        } catch (error) {
          console.error(`Something went wrong while fetching the users: \n${handleError(error)}`);
          console.error("Details:", error);
          alert("Something went wrong while fetching the users! See the console for details.");
        }
      }
  
      fetchData();
    }, [id]);

    let content = <Spinner/>;

    if (user) {
      content = (
        <div className="userprofile text">
          <div className="userprofile text"> username: {user.username} </div>
          <div className="userprofile text"> online status: {user.status}</div>
          <div className="userprofile text"> creation date: {user.creation_date} </div>
          <div className="userprofile text"> birthday: {user.birthday} </div>
          <Button
            width="100%"
            onClick={() => goBack()}
            className = "userprofile button-container"
            >
            Back
          </Button>
        </div>
      );
    }


  return (
      <BaseContainer className="userprofile container">
          <h2>User Profile</h2>
          {content}
      </BaseContainer>
  );
};
export default UserProfile;