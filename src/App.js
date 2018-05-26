import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectedVideo from './components/SelectedVideo';
import VideoList from './components/VideoList';

class App extends Component {
	state = {
	  videos: '',
	  selected: ''
	}

	componentWillMount() {
	  this.fetchVideos('bruno mars');
	}

	fetchVideos = (searchTerm) =>  {
	  const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
	  const KEY = 'AIzaSyCgz2WfB80GSfaXSqN1817aHd_umzUgMTc';
	  const params = {
		part: 'snippet',
		key: KEY,
		q: searchTerm,
		type: 'video'
		};
		
	  axios.get(ROOT_URL, {
		params
		})
		
	  .then(res => {
		this.setState({
		  videos: res.data.items,
		  selected: res.data.items[0]
		})
	  })
	}
  
	searchHandle = (term) => {
	  const searchTerm = (term.length > 0) ? term : 'bruno mars';
	  this.setState({
			searchTerm: searchTerm
	  });
	  this.fetchVideos(searchTerm);
	}
  
	selectItem = (video) => {
	  this.setState({
		selected: video
	  })
	}
  
	render() {
	  return (
		  
		<div className="container">
		<Header/>
			<div className="row text-center">
			  <h1 className="title"><span>MyTube</span> Search</h1>
			</div>
			<div className="row">
			  <SearchBar searchHandle={this.searchHandle}/>
			</div>
			<div className="row">
			  <div className="col-8">{this.state.selected !== '' && <SelectedVideo video={this.state.selected}/>}</div>
			  <div className="col-4">
				<div className="videolist">
				  <VideoList videos={this.state.videos} selectItem={this.selectItem}/>
				</div>
			  </div>
			</div>
		</div>
	  );
	}
  }
  
export default App;
