import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7J62YPjItuezMnCUfTGJyTbGmhEoRroJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reviews: []
         }
    }
    
    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    reviews: json.results
                })
                debugger
            })
    }

    
    render() { 
        return ( 
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
         );
    }
}
 
export default LatestMovieReviewsContainer;