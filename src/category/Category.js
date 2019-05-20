import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import {getProducts} from './actions';
import './Category.css';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  }
});

class Category extends Component {
	constructor(props) {
	    super(props);
        console.log(props)

	    this.state = {
      		products: []
		};
	}

    componentDidMount() {
        fetch('../../products.json')
          .then(res => res.json())
          .then(json => this.setState({ products: json }));
    }
    
    render() {
        const {products} = this.state;
        const {classes} = this.props;
        
        return (
            <div className='Category'>
            	<GridList cols={3} cellHeight={300} className={classes.gridList}>
                    {products.map((product, index) => (
                      <GridListTile key={index}>
                          <Link to={`/product/${index}`}>
                            <img src={`../../media/${product.image}`} alt={product.title} />
                            <GridListTileBar
                              title={product.title}
                              subtitle={`$ ${product.price}`}
                            />
                          </Link>
                      </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);
