
import React, { useEffect, useState } from "react";
import firebase from '../../services/firebaseInit'
// nodejs library that concatenates classes
import classNames from "classnames";

import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Modal
} from "reactstrap";


function AdminNavbar(props: { sidebarOpened: any; toggleSidebar: React.MouseEventHandler<HTMLButtonElement> | undefined; brandText: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; inProject: any; }) {
    const [collapseOpen, setCollapseOpen] = useState(false)
    const [modalSearch, setModalSearch] = useState(false)
    const [color, setcolor] = useState("navbar-transparent")


    useEffect(() => {
        window.addEventListener("resize", updateColor);

        return () => window.removeEventListener("resize", updateColor);
        //eslint-disable-next-line
    }, [])

    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    const updateColor = () => {
        if (window.innerWidth < 993 && collapseOpen) {
            setcolor("bg-white");
        } else {
            setcolor("navbar-transparent");
        }
    };
    // this function opens and closes the collapse on small devices
    const toggleCollapse = () => {
        if (collapseOpen) {
            setcolor("navbar-transparent");
        } else {
            setcolor("bg-white");
        }
        setCollapseOpen(collapseOpen);
    };
    // this function is to open the Search modal
    const toggleModalSearch = () => {
        setModalSearch(modalSearch);
    };

    const onLogoutClick = async () => {
        await firebase.auth().signOut()
        window.localStorage.removeItem('auth-user')
        window.location.reload();
    }
    return (
        <>
            <Navbar
                className={classNames("navbar-absolute", color)}
                expand="lg"
            >
                <Container fluid>
                    <div className="navbar-wrapper">
                        <div
                            className={classNames("navbar-toggle d-inline", {
                                toggled: props.sidebarOpened
                            })}
                        >
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={props.toggleSidebar}
                            >
                                <span className="navbar-toggler-bar bar1" />
                                <span className="navbar-toggler-bar bar2" />
                                <span className="navbar-toggler-bar bar3" />
                            </button>
                        </div>
                        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                            {props.brandText}
                        </NavbarBrand>
                    </div>
                    <button
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navigation"
                        data-toggle="collapse"
                        id="navigation"
                        type="button"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                    </button>
                    <Collapse navbar isOpen={collapseOpen}>
                        <Nav className="ml-auto" navbar>
                            {!props.inProject && <InputGroup className="search-bar">
                                <Button
                                    color="link"
                                    data-target="#searchModal"
                                    data-toggle="modal"
                                    id="search-button"
                                    onClick={toggleModalSearch}
                                >
                                    <i className="tim-icons icon-zoom-split" />
                                    <span className="d-lg-none d-md-block">Search</span>
                                </Button>
                            </InputGroup>}
                            {!props.inProject && <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    nav
                                >
                                    <div className="notification d-none d-lg-block d-xl-block" />
                                    <i className="tim-icons icon-sound-wave" />
                                    <p className="d-lg-none">Notifications</p>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-navbar" right tag="ul" style={{
                                    backgroundColor: "#1e1e2f",
                                    fontFamily: "Poppins"
                                }}>
                                    <NavLink tag="li">

                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>}
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    nav
                                    onClick={e => e.preventDefault()}
                                >
                                    <div className="photo">
                                        <img alt="..." />
                                    </div>
                                    <b className="caret d-none d-lg-block d-xl-block" />
                                    <p className="d-lg-none"></p>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-navbar" right tag="ul">
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">Profile</DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">Settings</DropdownItem>
                                    </NavLink>
                                    <DropdownItem divider tag="li" />
                                    <NavLink tag="li">
                                        <DropdownItem onClick={onLogoutClick} className="nav-item">Log out</DropdownItem>
                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <li className="separator d-lg-none" />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Modal
                modalClassName="modal-search"
                isOpen={modalSearch}
                toggle={toggleModalSearch}
            >
                <div className="modal-header">
                    <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalSearch}
                    >
                        <i className="tim-icons icon-simple-remove" />
                    </button>
                </div>
            </Modal>
        </>
    );

}
export default AdminNavbar;

