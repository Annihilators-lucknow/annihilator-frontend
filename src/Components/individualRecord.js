import React,{useState,useEffect} from  'react'
import TextField from "@material-ui/core/TextField";
import { IoPersonOutline } from "react-icons/io5";
import { Players } from './Players';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const initialValue = {
    "name" : "",
    "type":"",
    "blowing":"",
    "batting":""
}

const useStyles = makeStyles({
    root: {

        "min-width": 200,
        "& .MuiOutlinedInput-input": {
            display: "flex",
            alignItems: "center",
            color: "black",
            border: "unset",
            padding: "0px",
            height: "40px",
            paddingLeft: "10px",
            fontSize: "0.9rem"
        },
        "& .MuiInputLabel-root": {
            color: "grey",
            margin: "-10px 0 0 -8px",
            fontSize: "0.9rem"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "unset",
            borderRadius: "unset",
        }

    }
});

const Individualrecoed = () => {
    const [playersRecord , setPlayersRecord] = useState([])
    const classes = useStyles();
    const addRecord = () => {
        setPlayersRecord([...playersRecord , initialValue])
    }
    return <div>
        <button onClick={addRecord}>Add Record</button>
        {playersRecord.map((x)=>{
            return <div>
                   <div className="form-group">
                                    <label htmlFor="playerName">
                                        <IoPersonOutline />
                                    </label>
                                    <TextField
                                        className={classes.root}
                                        // value={momData.playerName}
                                        // onChange={handleMomInputs}
                                        variant="outlined"
                                        label="Player Name"
                                        name="playerName"
                                        select
                                    >

                                        {Players.map((player) => {
                                            return (
                                                <MenuItem value={player.name}>{player.name}</MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </div>
                                <TextField
                                        className={classes.root}
                                        // value={momData.category}
                                        // onChange={handleMomInputs}
                                        variant="outlined"
                                        label="Category"
                                        name="category"
                                        select
                                    >
                                        <MenuItem value="Batting">Batting</MenuItem>
                                        <MenuItem value="Bowling">Bowling</MenuItem>
                                        <MenuItem value="Both">Both</MenuItem>
                                    </TextField>
                   </div>
        })}
    </div>
}

export default Individualrecoed