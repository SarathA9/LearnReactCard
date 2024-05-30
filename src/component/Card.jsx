import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from './header';
import './name.css'

export default function ImgMediaCard() {
  return (
    <div>
      <Header/>
      <div className='card-container'>
      <Card className='card' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://th.bing.com/th/id/OIP.1TtfFh2kFOLZGqaRljIX2AHaHX?w=735&h=731&rs=1&pid=ImgDetMain"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='card-heading'>
          BMW M3
        </Typography>
        <Typography variant="body2" color="text.secondary">
        BMW M series has always been a sure way of identifying genuine sports cars. Experience all BMW M models in the overview: the BMW M2 Competition, the BMW M3 Sedan, the BMW M4 Coupé, the BMW M4 Convertible, the BMW M5 with M xDrive
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>


  );
}
