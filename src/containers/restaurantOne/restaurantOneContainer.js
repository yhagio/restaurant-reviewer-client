import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from '../../components/restaurant/restaurantOne';
import * as actions from '../../redux/modules/restaurantOne';

const { object, bool, string, func } = PropTypes;

const RestaurantOneContainer = React.createClass({
  propTypes: {
    isFetching: bool.isRequired,
    restaurant: object.isRequired,
    params: object.isRequired,
    error: string.isRequired,
    fetchRestaurantOne: func.isRequired
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

function mapStateToProps ({ restaurantOne }) {
  return {
    restaurant: restaurantOne.get('restaurant'),
    isFetching: restaurantOne.get('isFetching'),
    error: restaurantOne.get('error')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantOneContainer);
