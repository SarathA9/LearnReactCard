import React, { useState,useEffect } from 'react';
import './name.css'
import axios from 'axios';
import Header from './header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Refresh } from '@mui/icons-material';
// import { div } from './Exp'
export default function Api() {
    const [data,setData]=useState([])
    const [single,setSingle]=useState([])
    useEffect(()=>{
        //axios.get() -for getting the data
        //axios.put() -for update the data
        //axios.post() -for post(insert) the data
        //axios.delete() -for deleting the data        
        axios.get("https://dummyjson.com/quotes")
        .then((res)=>{
            console.log(res.data.quotes,1111)
            setData(res.data.quotes)
        })
        .catch((err)=>{
            console.log(err,2222)

        })

        axios.get("https://dummyjson.com/quotes/random")
        .then((res)=>{
              setSingle(res.data)    
            console.log(res.data,8888)
        })
        .catch((err)=>{
            console.log(err.data,9999)
        })
    },[]);

    const RefreshFunction=()=>{
      axios.get("https://dummyjson.com/quotes/random")
      .then((res)=>{
        setSingle(res.data)
      }
    )}

  return (
    <div>
        <Header/>
        <div className='random-div'>
        <Card sx={{ maxWidth: 400,minWidth: 400,minHeight: 200}}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://wallpapercave.com/wp/wp7110644.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {single.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {single.quote}

        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={RefreshFunction}   size="small">REFRESH</Button>
      </CardActions>
    </Card>
    </div>
    <div className='author-div'>
    {data.map((item)=>{
        return(
        <Accordion sx={{maxWidth:500,minWidth:500}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{item.author}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.quote}
          </Typography>
        </AccordionDetails>
      </Accordion>
        )

      })}    
    </div>

   
    </div>


  )
}
