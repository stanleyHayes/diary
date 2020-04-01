import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


function ProfilePage(props) {

    function handleUserChange(event) {

    }

    function handleChangeClick(event) {

    }

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

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
                    <Card elevation={4} raised={true} variant="elevation">
                        <CardContent>
                            <form>
                                <Typography variant="overline">Name</Typography>
                                <TextField
                                    placeholder="Name"
                                    name="name"
                                    fullWidth={true}
                                    onChange={handleUserChange}
                                    value={user.name}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Name"
                                    color="primary"
                                    error={error.name}
                                />

                                <Divider variant="fullWidth"/>

                                <Typography variant="overline">Profession</Typography>
                                <TextField
                                    placeholder="Enter profession"
                                    name="profession"
                                    fullWidth={true}
                                    onChange={handleUserChange}
                                    value={user.profession}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Profession"
                                    color="primary"
                                    error={error.profession}
                                />

                                <Button
                                    color="primary"
                                    variant="contained"
                                    disabled={loading}
                                    fullWidth={true}
                                    onClick={handleChangeClick}>
                                    Save Changes
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ProfilePage;
