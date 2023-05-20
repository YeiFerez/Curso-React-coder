import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
import styles1 from "./ItemList.module.css"
import { Link } from "react-router-dom";

const ItemCard = ({item}) => {
  return (
    <Card className={`${styles1.card} ${styles1.containerCard}`} sx={{ width: 345, paddingBottom: '10px', borderRadius: '20px', border: " solid black" }} >
            <CardMedia
              sx={{ height: 250,paddingTop: '56.25%', objectFit: 'cover' }}
              image={item.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="primary">
                $ {item.price}
              </Typography>
            </CardContent>
            <CardActions style={{height:100}}>
              <Link to={`/detail/${item.id}`}>
              <Button variant="contained" size="small">
                Ver detalle
              </Button>
              </Link>
            </CardActions>
          </Card>
  )
}

export default ItemCard