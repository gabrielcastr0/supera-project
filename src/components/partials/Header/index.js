import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar color="dark" dark expand="md">
                <Link to="/"><NavbarBrand>Supera Project</NavbarBrand></Link>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <Link to="/usuarios">
                                <NavItem>
                                    <NavLink>Usuários</NavLink>
                                </NavItem>
                            </Link>

                            <Link to="/ferramentas">
                                <NavItem>
                                    <NavLink>Ferramentas</NavLink>
                                </NavItem>
                            </Link>

                            <NavItem>
                                <NavLink>Aluguéis</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;