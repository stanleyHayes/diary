import React from "react";
import Layout from "../../components/layout/Layout";
import {Grid} from "@material-ui/core";
import CreateDiaryForm from "../../components/shared/CreateDiaryForm";
import {makeStyles} from "@material-ui/styles";


function CreateDiaryPage(props) {

    const useStyle = makeStyles({
        container: {
            marginTop: 30
        }
    });

    const classes = useStyle();

    return (
        <Layout>
            <Grid className={classes.container} container={true} justify="center">
                <Grid item={true} xs={12} md={8} lg={6}>
                    <CreateDiaryForm/>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default CreateDiaryPage;
