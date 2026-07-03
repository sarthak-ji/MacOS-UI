import React, { useState } from 'react'
import "../src/app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import Github from './components/windows/Github'
import Spotify from './components/windows/Spotify'
// import Cli from './components/windows/Cli'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'


const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    cli: false,
    spotify: false,
    resume: false
  })
  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState}/>
      <Github />
      <Notes />
      <Resume />
      <Spotify />
      {/* { windowState.github && <Github windowName="github" setWindowState={setWindowState} /> }
      { windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} /> }
      { windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} /> }
      { windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} /> }
      { windowState.notes && <Notes windowName="notes" setWindowState={setWindowState} /> } */}
    </main>
  )
}

export default App