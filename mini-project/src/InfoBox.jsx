import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css" 

export default function InfoBox({info}){
    return(
       <div className="InfoBox">
            <h2>Display Weather data </h2>
            <div className='card'>
                 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
           <p>Tempreture = {info.temp}&deg;C</p>
           <p>Humidity={info.humidity}</p>
           <p>Min temp ={info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>
        
       </div> 
    );
}