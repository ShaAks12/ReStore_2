import { Avatar, Button, Card, CardActions, CardHeader,CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props{
    product:Product;
}
const ProductCard = ({product}:Props) => {
  return (
    <>
    <Card>
      <CardHeader
        avatar={
            <Avatar sx={{bgcolor: 'secondary.main'}}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {fontWeight:'bold', color:'primary.main'}
        }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize:"contain", bgcolor:'primary.light'}}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h6" >
          ${(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}/{product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
        {/* <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar  src={product.pictureUrl}/>
            </ListItemAvatar>
            <ListItemText>{product.name}</ListItemText>
        </ListItem> */}
    </>
  )
}

export default ProductCard