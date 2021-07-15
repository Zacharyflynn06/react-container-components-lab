import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7J62YPjItuezMnCUfTGJyTbGmhEoRroJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reviews: [],
            searchTerm: ""
         }
    }
    render() { 
        return ( 
            <div className="searchable-movie-reviews">

            </div>
         );
    }
}
 
export default SearchableMovieReviewsContainer;