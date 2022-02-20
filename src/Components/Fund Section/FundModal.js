import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import expense from './expense.png'
import FundUpdate from './FundUpdate';
import { BsCalendar2Date } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { BiRupee } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import {updateFund} from '../../Store/Actions/cricket.action'
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


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

export default function FundModal() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [FundUpdate,setFundUpdate] = React.useState({date:new Date(),amout:"",expenseType:"",expenseDetails:""})
  const classes = useStyles();
  const handleInputs = (e) => {
        const {name,value} = e.target
        setFundUpdate({ ...FundUpdate, [name]: value }) 
    }

    const onsubmit = () =>{
       const payload = {
            data :  FundUpdate ,
            successCallBack : () => {
               handleClose()
            }
        }
     dispatch(updateFund(payload))
    }
  return (
    <div>
       <button onClick={handleOpen} className="btn edit-score mt-none"> <img className='inside-btn-img' src={expense} /> Add Other Expense</button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography  id="keep-mounted-modal-title" variant="h6" component="h2">
            Add Other Expense
          </Typography>
          <div style={{marginBottom:"2%"}} className="form-group">
            <label htmlFor="date">
              <BsCalendar2Date />
          </label>
          <input type="date" name="date" id="date" autoComplete="off"
              // value={user.date}
               onChange={handleInputs}
              placeholder="Date" />
            </div>
             <TextField
                className={classes.root}
                value={FundUpdate.tossResult}
                onChange={handleInputs}
                variant="outlined"
                label="Expense type"
                name="expenseType"
                select
               >
                <MenuItem value="credit">Credit</MenuItem>
                <MenuItem value="debit">Debit</MenuItem>
            </TextField>
             <div className="form-group">
                <label htmlFor="amout">
                    <BiRupee />
                </label>
                <input type="number" name="amout" id="amout" autoComplete="off"
                    value={FundUpdate.cost}
                    onChange={handleInputs}
                    placeholder="Amout" />
            </div>
             <div className="form-group">
                  <label htmlFor="teamName">
                      <AiOutlineTeam />
                  </label>
                  <input type="text" name="expenseDetails" id="expenseDetails" autoComplete="off"
                      value={FundUpdate.expenseDetails}
                      onChange={handleInputs}
                      placeholder="Expense Details" />
              </div>
              <div>
                <Button onClick={onsubmit}>Save</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </div>
        </Box>
      </Modal>
    </div>
  );
}