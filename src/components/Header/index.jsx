import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="http://github.com/quangnguyen90"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Github
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            My Redux Photo App
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;