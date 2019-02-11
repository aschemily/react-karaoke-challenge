import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    filterTitle: '',
    KaraokeDisplayArr:[]
  }

  componentDidMount(){
    fetch("http://localhost:4000/users/1/songs")
    .then(r => r.json())
    .then(data => this.setState({songs: data}))
  }

  // componentDidMount(){
  //   this.setState({songs})
  // }

  filterTitleFn = () =>{
    return this.state.songs.filter(song=>{
      return song.title.toLowerCase().includes(this.state.filterTitle.toLowerCase())
    })
  }

  filterChange = (event) =>{
    //console.log('inputting event', event.target.value)
    this.setState({filterTitle: event.target.value})
  }

  handleClick = (song)=>{
    //console.log('clicking song',song)
    this.setState({KaraokeDisplayArr: song})

  }


  render() {
    //console.log('state songs',this.state.songs)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterChange={this.filterChange} filterTitle={this.state.filterTitle}/>
          <SongList songs={this.filterTitleFn()} handleClick={this.handleClick}/>
        </div>
        <KaraokeDisplay KaraokeDisplayArr={this.state.KaraokeDisplayArr} />
      </div>
    );
  }
}

export default KaraokeContainer;
