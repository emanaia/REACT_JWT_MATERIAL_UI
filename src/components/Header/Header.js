import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import Menu from "@material-ui/icons/Menu";

import styles from "./headerStyle.js";

import { Link } from 'react-router-dom';




const useStyles = makeStyles(styles);

export default function Header(props) {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { color, rightLinks, leftLinks, brand, absolute, fixed } = props;


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const brandComponent = <Link to="/" className={classes.title} onClick={() => window.scrollTo(0, 0)}> {brand} </Link>;

    return (
        <AppBar color={color}  >
            <Toolbar className={classes.container}>
                {leftLinks !== undefined ? brandComponent : null}
                <div className={classes.flex}>
                    {leftLinks !== undefined ? (
                        <Hidden smDown implementation="css">
                            {leftLinks}
                        </Hidden>
                    ) : (
                            brandComponent
                        )}
                </div>
                <Hidden smDown implementation="css">
                    {rightLinks}
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor={"right"}
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={handleDrawerToggle}
                >
                    <div className={classes.appResponsive}>
                        {leftLinks}
                        {rightLinks}
                    </div>
                </Drawer>
            </Hidden>
        </AppBar >
    );
}

Header.propTypes = {
    rightLinks: PropTypes.node,
    leftLinks: PropTypes.node,
    brand: PropTypes.string,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool
};
