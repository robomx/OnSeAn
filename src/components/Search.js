import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Highlight,
} from "react-instantsearch-dom";
import { Link } from "gatsby";
import "instantsearch.css/themes/satellite-min.css";

const searchClient = algoliasearch(
  "C64ZGW4X7K",
  "ee3435515dfd406c4197293d88f59e52"
);

const Search = () => (
  <InstantSearch
    indexName="netlify_11e30bc9-5972-4bf9-adad-ec43f8df87c2_master_all"
    stalledSearchDelay="500"
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits hitComponent={Post} />
    <Pagination />
  </InstantSearch>
);

function Post(props) {
  return (
    <Link to={props.hit.url}>
      if (props.hit.image)
      {<img src={props.hit.image} align="center" alt={props.hit.title} />}
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit.title} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
    </Link>
  );
}

export default Search;
