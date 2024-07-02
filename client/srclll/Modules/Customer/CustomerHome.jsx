import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Card, CardActionArea, CardContent, Grid, Button } from '@material-ui/core';
import BannerImage from './banner.webp'; // Import your banner image here
import CategoryImage1 from './Components/utils/individual.jpg'; // Import your category images here
import CategoryImage2 from './Components/utils/team.jpg';
import CategoryImage3 from './Components/utils/Fitness.jpg';
import Customernavbar from  "./Components/Customernavbar";
import axios from 'axios';
import { useMyContext } from '../../Context/Context';

const useStyles = makeStyles((theme) => ({
  main: {
    background: 'linear-gradient(to right, #485563, #29323c)',
  },
  banner: {
    width: '100%',
    height: 300,
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    marginBottom: theme.spacing(2),
    borderRadius:"5px"
  },
  categoriesHeading: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  categoryCard: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    color: '#fff',
  },
  categoryCardContent: {
    textAlign: 'center',
  },
  productsContainer: {
    marginTop: theme.spacing(2),
  },
  productCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

const categories = [
  { name: 'Team Sports', image: CategoryImage1 },
  { name: 'Individual Sports', image: CategoryImage2 },
  { name: 'Fitness and Exercise ', image: CategoryImage3 },
];


const CustomerHome = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const {addToCart,cartItems} = useMyContext()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/get/getAllProducts');
      
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    // alert("Item added to cart")  
  };

  return (
  <div className={classes.main}>
    <Customernavbar/>
    <Container style={{paddingTop:"80px"}}>
      {/* Banner */}
      <div className={classes.banner}>      </div>

      {/* Categories */}
      <Typography variant="h4" className={classes.categoriesHeading}>
        Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className={classes.categoryCard} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${category.image})` }}>
              <CardActionArea>
                <CardContent className={classes.categoryCardContent}>
                  <Typography variant="h6">{category.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" className={classes.categoriesHeading}>
        Products
      </Typography>
      <Grid container spacing={2} className={classes.productsContainer}>
        {products.length>0 && products.map((product, index) => (
          <Grid item xs={12} sm={3} key={index}>
          <Card className={classes.productCard} style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)' }}>
            <CardActionArea>
              {product.product_image && <div style={{ height: 200, backgroundImage: `url(${require(`../../Uploads/${product.product_image}`)})`, backgroundSize: 'cover' }}></div>}
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.product_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: ₹ {product.product_cost}.00
                </Typography>
              </CardContent>
            </CardActionArea>
            <div style={{ backgroundColor: '#F44336', padding: '10px 0', textAlign: 'center' }}>
              <Button style={{ color: 'white' }} onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
            </div>
          </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default CustomerHome;
