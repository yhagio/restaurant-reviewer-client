import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from '../../components/restaurant/restaurantOne';
import * as actions from '../../redux/modules/restaurantOne';

const RestaurantOneContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    restaurant: PropTypes.object.isRequired
  },

  componentDidMount () {
    this.props.fetchRestaurantOne(this.props.params.id);
  },

  render () {
    return (
      <Restaurant
        restaurant={ this.props.restaurant }
        isFetching={ this.props.isFetching }
        error={ this.props.error }/>
    );
  }
});

function mapStateToProps (state) {
  return {
    restaurant: state.restaurantOne.restaurant,
    isFetching: state.restaurantOne.isFetching,
    error: state.restaurantOne.error
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantOneContainer);