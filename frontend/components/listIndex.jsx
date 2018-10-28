import React from 'react';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // fetch items and item descriptions from provided AWS JSON urls
  componentDidMount() {
    const { fetchItems, fetchDescriptions } = this.props;
    fetchItems();
    fetchDescriptions();
  }

  render() {
    const loader = <img className="loader" src="../../assets/loaderw.gif" />

    if (this.props.items === undefined || this.props.descriptions === undefined ) {
      return (loader);
    }

    console.log(this.props.items);

    let items = this.props.items.
  }
}

import { connect } from 'react-redux';
import { fetchItems, fetchDescriptions } from '../actions/list_actions';

const mapStateToProps = state => ({
  items: state.items,
  descriptions: state.descriptions
})

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  fetchDescriptions: () => dispatch(fetchDescriptions())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
