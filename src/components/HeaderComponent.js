import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchContainer from "../containers/SearchContainer";
import "../style/searchStyle.css";

export class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="search">
                    <SearchContainer />
                </div>
                <Navbar color="light" light expand="xs" style={{ height: '60px' }}>
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
