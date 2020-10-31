import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import Explore from "@material-ui/icons/Explore";
// core components

import Header from "../Header/Header";
import styles from "./navbarsStyle.js";

import { NavLink, Redirect } from 'react-router-dom';
import { getHeader } from "../../helpers/axios";
import Contador from "../Contador";


const useStyles = makeStyles(styles);

export default function Navbar() {



    const classes = useStyles();
    return (
        <>
            <div id="navbar" className={classes.navbar}>

                <Header
                    brand="Navbar"
                    color="primary"
                    rightLinks={
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <NavLink
                                    to="/login"
                                    activeStyle={{
                                        background: "rgba(200, 200, 200, 0.4)"
                                    }}
                                    className={classes.navLink}
                                >
                                    <Explore className={classes.icons} />    Login
                                </NavLink>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <NavLink
                                    to="/"
                                    exact
                                    activeStyle={{
                                        background: "rgba(200, 200, 200, 0.4)"
                                    }}
                                    className={classes.navLink}
                                >
                                    <PersonIcon className={classes.icons} /> Idioma
                              </NavLink>

                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <NavLink
                                    to="/teste"
                                    exact
                                    activeStyle={{
                                        background: "rgba(200, 200, 200, 0.4)"
                                    }}
                                    className={classes.navLink}
                                >
                                    <SettingsIcon className={classes.icons} /> Settings <Contador />
                                </NavLink>
                            </ListItem>

                        </List>
                    }
                />

            </div>


        </>
    );
}
