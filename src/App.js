import { useState } from 'react'
import ListForm from './components/Lists/ListForm'
import Playlist from './components/Lists/Playlist'
import allTracks from './data/allTracks'
import './App.css'

function App() {
  const [filtredTracks, setFiltredTracks] = useState([])
  const [tracks, setTracks] = useState([allTracks])

  const handleFilters = (filters) => {
    setFiltredTracks(createPlayList(filters))
  }

  const createPlayList = (filters) => {
    let playList = []
    for (let i = 0; i < filters.gigsQuantity; i++) {
      const gig = createGig(filters, i)
      playList.push(gig)
      // tracks = tracks.filter((track) => !gig.includes(track))
    }
    return playList
  }

  const createGig = (filters, gigNumber) => {
    console.log(tracks)
    // tracks.filter((track) => console.log(track.bars))
    filterTracks(tracks.filter((track) => track.bars.includes(filters.barName)))
    filterTracks(
      tracks.filter((track) => track.gigNumbers.includes(gigNumber + 1))
    )
    let gig = []
    for (let i = 0; i < filters.songsQuantity - 1; i++) {
      const selectedTrack = chooseTrack(i + 1)
      gig.push(selectedTrack)
      // tracks = tracks.filter((track) => track !== selectedTrack)
    }
    const selectedLastTrack = chooseTrack('lastTrack')
    gig.push(selectedLastTrack)
    return gig
  }

  const chooseTrack = (trackNumber) => {
    const tracksByNumber = tracks.filter((track) =>
      track.trackNumbers.includes(trackNumber)
    )
    const randomTrackNumber = Math.floor(Math.random() * tracksByNumber.length)
    const randomTrack = tracksByNumber[randomTrackNumber]
    filterTracks(tracks.filter((track) => track.id !== randomTrack.id))
    return randomTrack
  }

  const filterTracks = (tracksArr) => setTracks(tracksArr)

  return (
    <div className="App">
      <ListForm handleFilters={handleFilters} />
      <Playlist gigs={filtredTracks} />
    </div>
  )
}

export default App
