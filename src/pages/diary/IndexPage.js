import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Typography, Container, Grid, Select, MenuItem, Paper} from "@material-ui/core";
import DiaryItem from "../../components/shared/DiaryItem";
import {makeStyles} from "@material-ui/styles";

function IndexPage(props) {

    const diary = {
        createdAt: "2020-03-31",
        title: "Build Diary App",
        description: "Build a Diary app using React, Redux and Material UI with my sister from another mother Josephine",
        completed: false
    };

    const diary1 = {
        createdAt: "2020-03-31",
        title: "Review Ella's Plan",
        description: "Review the plans of Ella concerning learning for exams, and completing project after CoVid-19",
        completed: true
    };

    const [diaries, setDiaries] = useState([diary, diary1, diary, diary1, diary, diary, diary1, diary, diary, diary1, diary, diary1, diary1, diary]);

    const [visibility, setVisibility] = useState("SHOW_ALL");

    const useStyles = makeStyles({
        noDiariesContainer: {
            minHeight: "92vh",
            backgroundColor: "whitesmoke"
        },
        date: {
            marginTop: 8,
            marginBottom: 8
        },
        filterPaper: {
            padding: 16,
            marginTop: 8,
            marginBottom: 8
        }
    });


    function handleVisibilityChange(event) {
        setVisibility(event.target.value);
    }

    const classes = useStyles();

    return (
        <Layout>
            <Container>
                <Typography
                    className={classes.date}
                    variant="h5" align="center">
                    {new Date().toDateString()}
                </Typography>

                <Paper elevation={4} className={classes.filterPaper}>
                    <Grid container={true}>
                        <Grid item={true} xs={12}>
                            <Select variant="outlined"
                                    label="Filter"
                                    onChange={handleVisibilityChange}
                                    value={visibility}>
                                <MenuItem value="SHOW_ALL">Show All</MenuItem>
                                <MenuItem value="SHOW_COMPLETED">Show Completed</MenuItem>
                                <MenuItem value="SHOW_PENDING">Show Pending</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Paper>

                <Grid container={true} spacing={2}>
                    {(diaries.length === 0) ? (
                        <Grid
                            container={true}
                            direction="column"
                            justify="center"
                            alignItems="center"
                            className={classes.noDiariesContainer}
                            item={true}
                            xs={12}>
                            <Typography variant="h6" align="center">No Diaries Available</Typography>
                        </Grid>
                    ) : (
                        diaries.map(function (diary, index) {
                            return (
                                <Grid item={true} xs={12} md={4} lg={4} key={index}>
                                    <DiaryItem diary={diary}/>
                                </Grid>
                            )
                        })
                    )}
                </Grid>
            </Container>
        </Layout>
    )
}

export default IndexPage;
