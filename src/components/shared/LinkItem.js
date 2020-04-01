import {ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import React from "react";

function LinkItem({link, handleDrawerClose}) {

    const history = useHistory();

    function handleLinkClicked() {
        history.push(`/${link.path}`);
        handleDrawerClose()
    }

    return (
        <ListItem
            divider={true}
            dense={true}
            button={true}
            onClick={handleLinkClicked}>
            <ListItemAvatar>
                {link.icon}
            </ListItemAvatar>
            <ListItemText primary={link.name}/>
        </ListItem>
    )
}

export default LinkItem;
