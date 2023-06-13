import { useState, useEffect, useRef } from 'react'
import { uid } from 'react-uid'
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
  const [selectedBar, setSelectedBar] = useState('')
  const [gigsQuantity, setGigsQuantity] = useState(0)
  const [songsQuantity, setSongsQuantity] = useState(0)

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true)
  // }, [])

  // const refList = useRef(null)

  // const handleClickOutside = (e) => {
  //   console.log(e.target.ref)
  //   if (refList.current.contains(e.target)) {
  //     console.log('Wtf?')
  //   } else {
  //     console.log('Out')
  //   }
  // }

  const handleFilters = (filters) => {
    setFiltredTracks(createPlayList(filters, allTracks))
    setSelectedBar(filters.barName)
    setGigsQuantity(filters.gigsQuantity)
    setSongsQuantity(filters.songsQuantity)
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
        const newNoneTrack = { ...noneTrack, id: uid(i) }
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

  const toggleTrackHandler = (trackId) => {
    setFiltredTracks(
      filtredTracks.map((gig) => {
        gig = gig.map((track) => {
          return track.id === trackId
            ? { ...track, isActive: !track.isActive }
            : { ...track, isActive: false }
        })
        return gig
      })
    )
  }

  const tracksNotActive = (e) => {
    console.log(e.target.className)
    toggleTrackHandler(null)
  }

  const moveTrackHandler = (trackId, dir) => {
    setFiltredTracks(
      filtredTracks.map((gig) => {
        const selectedTrack = gig.find((track) => {
          if (track.id === trackId) {
            return true
          }
        })
        if (!selectedTrack) {
          return gig
        }
        const selectedIndex = gig.indexOf(selectedTrack)
        const movingIndex = selectedIndex + dir
        // console.log(movingIndex)

        if (movingIndex >= 0 && movingIndex < gig.length) {
          gig = gig.map((track, index, tracks) => {
            return index == selectedIndex
              ? { ...tracks[movingIndex] }
              : index == movingIndex
              ? { ...tracks[selectedIndex] }
              : { ...track }
          })
        }
        return gig
      })
    )
  }

  const replaceTrackHandler = (trackId) => {
    // console.log(trackId)
    setFiltredTracks(
      filtredTracks.map((gig, index) => {
        const selectedTrack = gig.find((track) => {
          if (track.id === trackId) {
            return true
          }
        })
        if (!selectedTrack) {
          return gig
        }
        const selectedIndex = gig.indexOf(selectedTrack)
        // const selectedIndex = gig.indexOf(selectedTrack)
        // const movingIndex = selectedIndex + dir
        // console.log(selectedTrack)
        // console.log(selectedBar)
        // console.log(gigsQuantity)
        // console.log(songsQuantity)
        // console.log(selectedIndex)
        // console.log(++index)
        // console.log(filtredTracks)
        // console.log(allTracks)

        let allGigsTracksId = []

        filtredTracks.map((gig) =>
          gig.map((track) => allGigsTracksId.push(track.id))
        )

        // console.log(allGigsTracksId)

        const replaceFiltredTracks = allTracks.filter(
          (track) =>
            track.bars.includes(selectedBar) &&
            track.lowGigNum * gigsQuantity <= index &&
            index <= track.highGigNum * gigsQuantity &&
            !allGigsTracksId.includes(track.id)
        )

        console.log(replaceFiltredTracks)

        // console.log(replaceFiltredTracks)

        const replacedTrack = chooseTrack(
          selectedIndex,
          replaceFiltredTracks,
          songsQuantity - 1
        )

        console.log(!!replacedTrack)

        // const gigTracks = barTracks.filter(
        //   (track) =>
        //     track.lowGigNum * filters.gigsQuantity <= gigNumber &&
        //     gigNumber <= track.highGigNum * filters.gigsQuantity
        // )

        // if (movingIndex >= 0 && movingIndex < gig.length) {
        gig = gig.map((track, index) => {
          return index == selectedIndex && !!replacedTrack
            ? { ...replacedTrack, isActive: true }
            : { ...track }
        })
        // }
        // console.log(gig)
        return [...gig]
      })
    )
  }

  return (
    <div
      className="App"
      // ref={refList}
      // onClick={tracksNotActive}
    >
      <ListForm handleFilters={handleFilters} />
      <Playlist
        gigs={filtredTracks}
        toggleTrack={toggleTrackHandler}
        moveTrack={moveTrackHandler}
        replaceTrack={replaceTrackHandler}
      />
    </div>
  )
}

export default App
