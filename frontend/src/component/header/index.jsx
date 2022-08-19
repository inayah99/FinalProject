import React from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,

} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LogOut, reset } from '../features/authSlice';


const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)

    const logout = () =>{
        dispatch(LogOut());
        dispatch(reset())
        navigate("/")
    }
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
                            <Button variant="outline-danger" onClick={logout}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
        </div>
    )
}

export default NavBar;

// {/* <Container fluid>
//     <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#">
//             <img src="" alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//             <Nav
//                 className="me-auto my- my-lg-0"
//                 display="d-flex"
//                 style={{ maxHeight: '100px' }}
//                 navbarScroll
//             >
//             </Nav>
//             {/* <Form className="d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search"
//                                 className="me-2"
//                                 aria-label="Search"
//                             />
//                         </Form> */}
//             <Nav
//                 display="d-flex"
//                 navbarScroll
//             >
//                 <Nav.Link href="">Beranda</Nav.Link>
//                 <Button variant="outline-primary">Login</Button>
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
//     <CarouselProduct />

//     <CardsProduct />
// </Container> */}