import React from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,

} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { LogOut, reset } from '../features/authSlice';

import './styles.css'


const NavBar = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();


    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    }

    // const logout = () =>{
    //     dispatch(LogOut());
    //     dispatch(reset())
    //     navigate("/")
    // }
    return (
        <div>
            <Navbar bg="light" expand='md' sticky="top">
                <Container className="d-flex align-item-center" fluid>
                    <Navbar.Brand>Recipe Sharing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="d-flex me-auto my-2 mx-auto my-lg-0"
                        >
                            <Form>
                                <Form.Control
                                    type="search"
                                    placeholder="search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav>
                        <Nav className="d-flex my-2 my-lg-0">
                            <Nav.Link>HOME</Nav.Link>
                            <Nav.Link>About Us</Nav.Link>
                            <Button variant="outline-danger" onClick={Logout}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default NavBar;