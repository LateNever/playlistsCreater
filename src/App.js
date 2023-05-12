import { useState } from 'react'
import ListForm from './components/Lists/ListForm'
import Playlist from './components/Lists/Playlist'
import allTracks from './data/allTracks'
import './App.css'

function App() {
  const [filtredTracks, setFiltredTracks] = useState([])
  const [tracks, setTracks] = useState(allTracks)
  const [count, setCount] = useState(10)

  const createPlayList = (tracks, filters) => {
    let playList = []
    for (let i = 0; i < filters.gigsQuantity; i++) {
      const gig = createGig(tracks, filters, i)
      playList.push(gig)
      // const selectedTrack = chooseTrack(tracks, i + 1)
      // gig.push(selectedTrack)
      tracks = tracks.filter((track) => !gig.includes(track))
      // console.log(i)
      // gig.map((gigTrack) => console.log(gigTrack))
    }
    return playList
    // console.log(playList)
  }

  const createGig = (tracks, filters, gigNumber) => {
    tracks = tracks.filter((track) => track.bars.includes(filters.barName))
    tracks = tracks.filter((track) => track.gigNumbers.includes(gigNumber + 1))
    // console.log(gigNumber)
    let gig = []
    for (let i = 0; i < filters.songsQuantity - 1; i++) {
      const selectedTrack = chooseTrack(tracks, i + 1)
      gig.push(selectedTrack)
      tracks = tracks.filter((track) => track !== selectedTrack)
    }
    const selectedLastTrack = chooseTrack(tracks, 'lastTrack')
    gig.push(selectedLastTrack)
    return gig
  }

  const chooseTrack = (trackNumber) => {
    const tracksByNumber = tracks.filter((track) =>
      track.trackNumbers.includes(trackNumber)
    )
    const randomTrack = Math.floor(Math.random() * tracksByNumber.length)
    return tracksByNumber[randomTrack]
  }

  const handleFilters = (filters) => {
    for (let i = 0; i < 5; i++) {
      chooseTrack(1)
    }
    // setFiltredTracks(createGig(tracks, filters))
    // setFiltredTracks(createPlayList(tracks, filters))
  }

  return (
    <div className="App">
      <ListForm handleFilters={handleFilters} />
      <Playlist gigs={filtredTracks} />
    </div>
  )
}

export default App
