import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

const styles = (theme) => ({
  card: {
    maxWidth: 1200,
    margin: '0 auto'
  },
  media: {
    float: 'left',
    width: 400,
    height: 400
  },
  content: {
    float: 'left',
    width: 765
  }
});


const products = require('../category/products.json');

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.match.params.id,
        products
    };
  }

  render() {
    const {classes} = this.props;
    const {products, id} = this.state;
    const {title, brand, price, description, image} = products[id];

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`../../media/${image}`}
          title="Paella dish"
        />
        <CardContent className={classes.content}>
          <p className='brand'>{brand}</p>
          <h2 className='title'>{title}</h2>
          <p className='price'>${price}</p>
          <p className='description'>{description}</p>
          <div className='addToCart'>add to cart goes here</div>
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);