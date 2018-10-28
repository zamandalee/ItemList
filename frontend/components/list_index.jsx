import React from 'react';

import * as itemPayload from '../../assets/items_list.json';
import * as descriptionPayload from '../../assets/items_description.json';

import ListItem from './list_item';
import ItemDescription from './item_description';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // fetch items and item descriptions from provided AWS JSON urls
  componentDidMount() {
    const { fetchItems, fetchDescriptions } = this.props;
    // fetchItems();
    // fetchDescriptions();
  }

  render() {
    const loader = <img className="loader" src="./assets/loaderw.gif" />;

    /*
      BELOW COMMENTED OUT CODE IS FOR REQUESTS TO AWS S3 SERVER FOR DATA
      Code is commented out because of a no access from null origin error
      that occurs when I try to send a request, which has to do with axios's
      way of making http requests.

      // while item data hasnt been fetched yet, display a loader gif
      if (this.props.items === undefined || this.props.descriptions === undefined ) {
        return (loader);
      }

      // when fetchItems and fetchDescriptions return, component will re-render
      // returning individual ListItems and ItemDescriptions
      let items = this.props.items.map( item => {
        return (<ListItem item={item} />);
      });

      let descriptions = this.props.descriptions.map( description => {
        return (<ItemDescription description={description} />);
      });
    */

    console.log(itemPayload.default.payload);
    console.log(descriptionPayload.default.payload);

    // here I'm accessing a local version of the data instead
    let items = itemPayload.default.payload.map( (item, idx) => {
      return (<ListItem item={item} key={idx}/>);
    });

    let descriptions = descriptionPayload.default.payload.map( descrip => {
      return (<ItemDescription description={descrip} key={descrip.key} />);
    });

    return (
      <div className="list-index">
        <h1>Item List</h1>

        <h2>Items</h2>
        <ul className="items-ul">
          {items}
        </ul>

        <h2>Details</h2>
        <ul className="descriptions-ul">
          {descriptions}
        </ul>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { fetchItems, fetchDescriptions } from '../actions/list_actions';

const mapStateToProps = state => ({
  items: state.items,
  descriptions: state.descriptions
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  fetchDescriptions: () => dispatch(fetchDescriptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
