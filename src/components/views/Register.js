import React, {useState} from 'react';
import {api, handleError} from 'helpers/api';
import User from 'models/User';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import 'styles/views/Register.scss';
import BaseContainer from "components/ui/BaseContainer";
import PropTypes from "prop-types";

const FormField = props => {
    return (
        <div className="login field">
            <label className="login label">
                {props.label}
            </label>
            <input
                className="login input"
                placeholder="enter here.."
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

const Register = props => {
    const history = useHistory();
    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const doRegister = async () => {
        try {
            const requestBody = JSON.stringify({username, name, password});
            const response = await api.post('/users', requestBody);

            const user = new User(response.data);

            localStorage.setItem('id', user.id)
            localStorage.setItem('token', user.token);

            history.push(`/game`);
        } catch (error) {
            alert(`Something went wrong during the register: \n${handleError(error)}`);
        }
    };

    return (
        <BaseContainer>
            <div className="register container">
                <div className="register form">
                    <FormField
                        label="username"
                        value={username}
                        onChange={un => setUsername(un)}
                    />
                    <FormField
                        label="name"
                        value={name}
                        onChange={un => setName(un)}
                    />
                    <FormField
                        label="password"
                        value={password}
                        onChange={n => setPassword(n)}
                    />
                    <div className="login button-container">
                        <Button
                            disabled={!username || !password || !name}
                            width="100%"
                            onClick={() => doRegister()}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );
};

export default Register;
