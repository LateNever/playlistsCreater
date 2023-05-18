import { useState } from 'react'
import ListForm from './components/Lists/ListForm'
import Playlist from './components/Lists/Playlist'
import allTracks from './data/allTracks'
import './App.css'

function App() {
  const [filtredTracks, setFiltredTracks] = useState([])
  // const [tracks, setTracks] = useState(allTracks)

  // const filterTracks = (tracksArr, trackProp, filterProp) => {
  //   // console.log(tracksArr)
  //   // tracksArr.forEach((track) => console.log(track[trackProp]))
  //   // console.log(filterProp)
  //   return tracksArr.filter((track) => track[trackProp].includes(filterProp))
  // }

  // let tracks = [...allTracks]

  const handleFilters = (filters) => {
    // console.log(createGig(filters))
    // const arr = filterTracks(allTracks, 'trackNumbers', 'lastTrack')
    // console.log(arr)
    setFiltredTracks(createPlayList(filters, allTracks))
    // createPlayList(filters)
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
    // console.log(tracks)
    return playList
  }

  const createGig = (filters, barTracks, gigNumber) => {
    // const tracksFiltredByBars = tracks.filter((track) =>
    //   track.bars.includes(filters.barName)
    // )
    // console.log(tracksFiltredByBars)
    // tracks.filter((track) => console.log(track.bars))
    // console.log(gigNumber)

    let gigTracks = barTracks.filter((track) =>
      track.gigNumbers.includes(gigNumber + 1)
    )
    let gig = []
    for (let i = 0; i < filters.songsQuantity; i++) {
      const selectedTrack = chooseTrack(i, gigTracks, filters.songsQuantity - 1)
      gig.push(selectedTrack)
      gigTracks = gigTracks.filter((track) => track.id !== selectedTrack.id)
    }
    // const selectedLastTrack = chooseTrack('lastTrack', gigTracks)
    // gig.push(selectedLastTrack)
    return gig
  }

  const chooseTrack = (trackNumber, gigTracks, lastNumber) => {
    // console.log(lastNumber)

    const tracksByNumber = gigTracks.filter(
      (track) =>
        track.lowTrackNum * lastNumber <= trackNumber &&
        trackNumber <= track.highTrackNum * lastNumber
      // track.trackNumbers.includes(trackNumber)
    )

    const randomTrackNumber = Math.floor(Math.random() * tracksByNumber.length)
    const randomTrack = tracksByNumber[randomTrackNumber]
    // tracksByNumber = tracksByNumber.filter((track) => track.id !== randomTrack.id)
    return randomTrack
  }

  // const filterTracks = (tracksArr) => setTracks(tracksArr)

  return (
    <div className="App">
      <ListForm handleFilters={handleFilters} />
      <Playlist gigs={filtredTracks} />
    </div>
  )
}

export default App
