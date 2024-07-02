import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import CategoryImage1 from './Components/utils/individual.jpg'; // Import your category images here
import CategoryImage2 from './Components/utils/team.jpg';
import CategoryImage3 from './Components/utils/Fitness.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useNavigate } from 'react-router-dom';
import BannerImage from './banner.webp'; // Import your banner image here


const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(to right, #09203f 0%, #13547a  100%)',

  },
  title: {
    flexGrow: 1,
  },
  banner: {
    width: '100%',
    height: 300,
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    marginBottom: theme.spacing(2),
    borderRadius: "5px"
  },
  categoriesHeading: {
    marginTop: theme.spacing(2),
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
  benefitsSection: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
}));

const categories = [
  { name: 'Team Sports', image: CategoryImage1 },
  { name: 'Individual Sports', image: CategoryImage2 },
  { name: 'Fitness and Exercise', image: CategoryImage3 },
];

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <div>
      {/* AppBar */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Sports Equipment Store
          </Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Button color="inherit" onClick={()=>navigate("/Login")}>Login</Button>
        </Toolbar>
      </AppBar>

      {/* Banner */}
      <div className={classes.banner}></div>

      <Container>
        {/* Categories */}
        <Typography variant="h4" className={classes.categoriesHeading}>
          Categories
        </Typography>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card className={classes.categoryCard} style={{ backgroundImage: `url(${category.image})` }}>
                <CardActionArea>
                  <CardContent className={classes.categoryCardContent}>
                    <Typography variant="h6">{category.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Benefits Section */}
        <div className={classes.benefitsSection}>
          <Typography variant="h4" className={classes.categoriesHeading}>
            Benefits
          </Typography>
          <Typography variant="body1">
            Here you can write about the benefits of your products or services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nisi ac quam efficitur efficitur. Duis ut enim eget purus convallis fermentum. Sed tempor nunc eget purus fermentum, id fringilla ex ultricies. Duis vehicula risus at malesuada sollicitudin. Integer sit amet ipsum vitae nisi gravida malesuada. Nam lacinia, dui ac congue ultricies, nulla eros volutpat purus, nec commodo magna nisi et quam. Donec eu nisi ut nulla efficitur cursus.
          </Typography>
        </div>
      </Container>

      {/* Footer */}
      <footer className={classes.footer}>
        <Container>
          <Typography variant="body1">© 2024. All rights reserved.</Typography>

        </Container>
      </footer>
    </div>
  );
};

export default Home;
