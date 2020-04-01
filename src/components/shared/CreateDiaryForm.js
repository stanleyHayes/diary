import React, {useState} from "react";
import {Card, CardContent, TextField, Typography, Divider, Button} from "@material-ui/core";

function CreateDiaryForm() {

    const [diary, setDiary] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    function handleDiaryChange(event) {

    }

    function handleDiaryClick(event) {

    }

    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardContent>
                <form>
                    <Typography variant="overline">Title</Typography>
                    <TextField
                        placeholder="Enter Diary Title"
                        name="title"
                        fullWidth={true}
                        onChange={handleDiaryChange}
                        value={diary.title}
                        required={true}
                        margin="dense"
                        helperText={"This field is required"}
                        variant="outlined"
                        type="text"
                        label="Title"
                        color="primary"
                        error={error.title}
                    />

                    <Divider variant="fullWidth"/>

                    <Typography variant="overline">Description</Typography>
                    <TextField
                        placeholder="Enter Diary Description"
                        name="description"
                        fullWidth={true}
                        onChange={handleDiaryChange}
                        value={diary.description}
                        required={true}
                        margin="dense"
                        helperText={"This field is required"}
                        variant="outlined"
                        type="text"
                        label="Description"
                        color="primary"
                        error={error.description}
                    />

                    <Button
                        color="primary"
                        variant="contained"
                        disabled={loading}
                        fullWidth={true}
                        onClick={handleDiaryClick}>
                        Create Diary
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default CreateDiaryForm;
