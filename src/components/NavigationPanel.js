import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Link,
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import ContactList from "./Admin/ContactList/ContactList";
import Home from "./Admin/Home/Home";
import Legalities from "./Admin/Legalities/Legalities";
import Mails from "./Admin/Mails/Mails";
import Manage from "./Admin/Manage/Manage";
import Messages from "./Admin/Messages/Messages";
import Reports from "./Admin/Reports/Reports";
import UserList from "./Admin/UserList/UserList";

function NavigationPanel() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="primary"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                closeButton
                class="position-absolute top-0 start-0"
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Admin Dashboard
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Router
                  className="justify-content-end flex-grow-2 "
                  style={{ width: "250px !important " }}
                >
                  <Routes>
                    <Route path="/" as={Link} to={"/Home"} element={<Home />}>
                      Home
                    </Route>
                    <Route
                      path="/UserList"
                      as={Link}
                      to={"/UserList"}
                      exact
                      element={<UserList />}
                    >
                      Users List
                    </Route>
                    <Route
                      path="/Mails"
                      as={Link}
                      to={"/Mails"}
                      element={<Mails />}
                    >
                      Mails
                    </Route>
                    <Route
                      path="/Messages"
                      as={Link}
                      to={"/Messages"}
                      element={<Messages />}
                    >
                      Messages
                    </Route>
                    <Route
                      as={Link}
                      to={"/Manage"}
                      path="/Manage"
                      element={<Manage />}
                    >
                      Manage
                    </Route>
                    <Route
                      path="/Reports"
                      as={Link}
                      to={"/Reports"}
                      element={<Reports />}
                    >
                      Reports
                    </Route>
                    <Route
                      path="/Legalities"
                      as={Link}
                      to={"/Legalities"}
                      element={<Legalities />}
                    >
                      Legalities
                    </Route>
                    <Route
                      path="/ContactList"
                      as={Link}
                      to={"/Home"}
                      element={<ContactList />}
                    >
                      Contact List
                    </Route>
                    {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  </Routes>
                </Router>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationPanel;
