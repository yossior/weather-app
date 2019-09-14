import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchComponent from "../containers/SearchContainer";

const searchStyle = {
    width: "250px",
    position: 'absolute',
    top: '10px',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: 1
}

export class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div style={searchStyle}>
                    <SearchComponent />
                </div>
                <Navbar color="light" light expand="md" style={{ height: '60px' }}>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <Link to="/forecast" className="col-sm-2 menu-item">Forecast</Link>
                            </NavItem>
                            <NavItem width="50%">
                                <Link to="/favorits" className="col-sm-2 menu-item">Favorits</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default HeaderComponent
