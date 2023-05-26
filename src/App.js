import { useState } from 'react'
import ListForm from './components/Lists/ListForm'
import Playlist from './components/Lists/Playlist'
import allTracks from './data/allTracks'
import noneTrack from './data/noneTrack'
import Track from './components/Lists/Track'
import CopyText from './components/Lists/_ClipBoard'
// import { useUID } from 'react-uid'
import './App.css'

function App() {
  const [filtredTracks, setFiltredTracks] = useState([])

  const handleFilters = (filters) => {
    setFiltredTracks(createPlayList(filters, allTracks))
  }

  const createPlayList = (filters, tracks) => {
    let playList = []
    let barTracks = tracks.filter((track) =>
      track.bars.includes(filters.barName)
    )
    for (let i = 0; i < filters.gigsQuantity; i++) {
      const gig = createGig(filters, barTracks, i)
      playList.push(gig)
      barTracks = barTracks.filter((track) => !gig.includes(track))
    }
    return playList
  }

  const createGig = (filters, barTracks, gigNumber) => {
    let gigTracks = barTracks.filter(
      (track) =>
        track.lowGigNum * filters.gigsQuantity <= gigNumber &&
        gigNumber <= track.highGigNum * filters.gigsQuantity
    )
    let gig = []
    for (let i = 0; i < filters.songsQuantity; i++) {
      const selectedTrack = chooseTrack(i, gigTracks, filters.songsQuantity - 1)
      if (selectedTrack) {
        gig.push(selectedTrack)
        gigTracks = gigTracks.filter((track) => track.id !== selectedTrack.id)
      } else {
        const newNoneTrack = { ...noneTrack }
        console.log(newNoneTrack)
        gig.push(newNoneTrack)
      }
    }
    return gig
  }

  const chooseTrack = (trackNumber, gigTracks, lastNumber) => {
    const tracksByNumber = gigTracks.filter(
      (track) =>
        track.lowTrackNum * lastNumber <= trackNumber &&
        trackNumber <= track.highTrackNum * lastNumber
    )

    const randomTrackNumber = Math.floor(Math.random() * tracksByNumber.length)
    const randomTrack = tracksByNumber[randomTrackNumber]
    return randomTrack
  }

  console.log(filtredTracks)

  return (
    <div className="App">
      <ListForm handleFilters={handleFilters} />
      <Playlist gigs={filtredTracks} />
    </div>
  )
}

export default App
