import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VideoPlay from './components/VideoPlay';
import VideoList from './components/VideoList';

class App extends Component {

	state = {
		videos: '',
		play: ''
	};

	componentWillMount() {
		this.fechVideos('blackpink')
	}

	fetchVideos = (searchWord) => {
		const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
		const KEY = 'xxx';
		const params = {
			part: 'snippet',
			key: KEY,
			q: searchWord,
			type: 'video'
		};

		// Axios
		axios.get(ROOT_URL, {
			params
		})
	}

	render() {
		return (
			<div className="container">
			{/* <Header /> */}
				{/* Title */}
				<div className="row text-center">
					<h1 className="title"><span>Youtube</span>Search</h1>
				</div>

				{/* SearchBar */}
				<div className="row">
					<SearchBar searchHandle={this.searchHandle} />
				</div>

				{/* Video */}
				<div className="row">

					{/* Video Play*/}
					<div className="col-8">
						<VideoPlay />
					</div>

					{/* Video List*/}
					<div className="col-4">
						<div className="videolist">
							<VideoList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
