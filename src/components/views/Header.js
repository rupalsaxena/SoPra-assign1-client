import React from "react";
import {ReactLogo} from "components/ui/ReactLogo";
import PropTypes from "prop-types";
import {Container, Navbar, Nav } from "react-bootstrap";
import "styles/views/Header.scss";

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */

/*<div className="header container" style={{height: props.height}}>
    <h1 className="header title"></h1>
    <ReactLogo width="60px" height="60px"/>
</div>*/

// add this when u wanna add users and user profile
/*<Nav>
    <Nav.Link href="/users">Users</Nav.Link>
    <Nav.Link href="/profile">Profile</Nav.Link>
</Nav>*/
const Header = props => (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <ReactLogo fill="white" width="42px" height="42px"/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

Header.propTypes = {
  height: PropTypes.string
};

/**
 * Don't forget to export your component!
 */
export default Header;
