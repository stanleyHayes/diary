import React from "react";
import {Card, CardHeader, CardContent, CardActions, Divider, Typography, Button} from "@material-ui/core";
import {CheckCircle, Done, DeleteForever, Edit} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

function DiaryItem({diary}) {

    const useStyle = makeStyles({
        description: {
            marginTop: 8,
            marginBottom: 8
        },
        completed: {
            backgroundColor: "green",
            fontWeight: "bold",
            color: "white",
            borderRadius: 16,
            padding: 8
        },

        pending: {
            backgroundColor: "black",
            fontWeight: "bold",
            color: "yellow",
            borderRadius: 16,
            padding: 8
        },
        completedIcon: {
            color: "green"
        }
    });

    const classes = useStyle();

    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardHeader
                avatar={diary.completed ? <CheckCircle className={classes.completedIcon}/> : <Done/>}
                title={diary.title}
                subheader={new Date(diary.createdAt).toDateString()}/>

            <CardContent>
                <Typography
                    className={diary.completed ? classes.completed : classes.pending}
                    gutterBottom={true}
                    variant="overline">{diary.completed ? "Completed" : "Pending"}</Typography>
                <Divider variant="fullWidth"/>
                <Typography variant="body2" className={classes.description}>{diary.description}</Typography>
                <Divider variant="fullWidth"/>
            </CardContent>

            <CardActions>
                <Button>
                    <DeleteForever/>
                </Button>

                <Button>
                    <Edit/>
                </Button>

                <Button>
                    {(!diary.completed) ? (<CheckCircle/>) : (<Done/>)}
                </Button>
            </CardActions>
        </Card>
    )
}

export default DiaryItem;
