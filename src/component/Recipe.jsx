import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Recipe() {
  const [expanded, setExpanded] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes, 1111);
        setData(res.data.recipes);
      })
      .catch((err) => {
        console.log(err, 2222);
      });
  }, []);

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
        <Header />

<Container >
  <div className='recipe-div'>
    <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center">
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
          <Card sx={{ minWidth: 250,minHeight:420,maxHeight:420 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {item.rating}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.name}
              subheader={`Rating: ${item.rating}`}
            />
            {!expanded[item.id] && (
              <>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.name}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded[item.id] || false}
                    onClick={() => handleExpandClick(item.id)}
                    aria-expanded={expanded[item.id] || false}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
              </>
            )}
            <Collapse in={expanded[item.id] || false} timeout="auto" unmountOnExit>
              <CardContent style={{ maxHeight: '350px', overflowY: 'auto' }}>
                <Typography paragraph>Ingredients:</Typography>
                <Typography paragraph>
                  {item.ingredients}
                </Typography>
                <Typography paragraph>Instructions:</Typography>
                <Typography paragraph>
                  {item.instructions}
                </Typography>
                <ExpandMore
                  expand={expanded[item.id] || false}
                  onClick={() => handleExpandClick(item.id)}
                  aria-expanded={expanded[item.id] || false}
                  aria-label="show less"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
</Container>    </div>
  );
}
