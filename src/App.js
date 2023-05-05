import { useState } from 'react'
import ListForm from './components/Lists/ListForm'
import Playlist from './components/Lists/Playlist'
import tracks from './data/allTracks'
import './App.css'

function App() {
  // const [tracks, setTracks] = useState(allTracks)
  // const [filters, setFilters] = useState({})
  const [filtredTracks, setFiltredTracks] = useState([])

  const chooseTrack = (tracks, trackNumber) => {
    const tracksByNumber = tracks.filter((track) =>
      track.trackNumbers.includes(trackNumber)
    )
    const randomTrack = Math.floor(Math.random() * tracksByNumber.length)
    return tracksByNumber[randomTrack]
  }

  const createList = (tracks, filters) => {
    let filtredTracsArr = []
    let tracksArr = tracks.filter((track) =>
      track.bars.includes(filters.barName)
    )
    console.log(tracksArr)

    for (let i = 0; i < filters.songsQuantity; i++) {
      const selectedTrack = chooseTrack(tracksArr, i + 1)
      filtredTracsArr.push(selectedTrack)
      tracksArr = tracksArr.filter((track) => track !== selectedTrack)
      // console.log(tracksArr)
    }
    // console.log(filtredTracsArr)
    return filtredTracsArr
  }

  const handleFilters = (filters) => {
    console.log(filters)
    // setFilters(filters)
    // setTracks(tracks.filter((track) => track.bars.includes(filters.barName)))
    setFiltredTracks(createList(tracks, filters))

    // console.log(tracks)
  }
  // console.log(tracks)
  // console.log(filters)

  return (
    <div className="App">
      <ListForm handleFilters={handleFilters} />
      {/* <ListForm handleFilters={handleFilters} filterByBar={filterByBar} /> */}
      <Playlist tracks={filtredTracks} />
    </div>
  )
}

export default App
