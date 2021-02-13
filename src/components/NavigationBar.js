import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class NavigationBar extends Component {
    render () {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div>
                        <NavbarBrand> Expense Tracker </NavbarBrand>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;