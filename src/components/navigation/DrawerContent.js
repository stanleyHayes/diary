import React from "react";

import {List, ListItemAvatar, ListItemText, ListItem, Grid, Typography, Container} from "@material-ui/core";

import {HomeOutlined, PostAdd, Person, Lock, ExitToApp} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import LinkItem from "../shared/LinkItem";

function DrawerContent({handleDrawerClose}) {

    const useStyles = makeStyles({
        container: {
            marginTop: 16
        },
        homeIcon: {
            color: "blue"
        },
        createIcon: {
            color: "green"
        },
        profileIcon: {
            color: "orange"
        },
        lockIcon: {
            color: "purple"
        },
        logoutIcon: {
            color: "red"
        }
    });

    const classes = useStyles();

    const links = [
        {
            name: "Home",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: ""
        },
        {
            name: "Create",
            icon: <PostAdd className={classes.createIcon}/>,
            path: "new"
        },
        {
            name: "Profile",
            icon: <Person className={classes.profileIcon}/>,
            path: "profile"
        },
        {
            name: "Change Password",
            icon: <Lock className={classes.lockIcon}/>,
            path: "change-password"
        }
    ];

    return (
        <Container className={classes.container}>
            <Grid container={true} direction="column" spacing={4}>
                <Grid item={true}>
                    <Typography variant="h6" align="center">Stanley Hayford</Typography>
                    <Typography variant="body2" align="center">Your future Fuhrer</Typography>
                </Grid>
                <Grid item={true}>
                    <List>
                        {
                            links.map(function (link, index) {
                                return (
                                    <LinkItem handleDrawerClose={handleDrawerClose} link={link} key={index}/>
                                )
                            })
                        }
                        <ListItem divider={true} dense={true} button={true}>
                            <ListItemAvatar>
                                <ExitToApp className={classes.logoutIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Logout"/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;
