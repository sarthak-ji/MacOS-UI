import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'

const Cli = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="cli-window">
            <Terminal 
                className="terminal"
                commands={{}}
                welcomeMessage={"Welcome to the terminal!"}
                promptLabel={"sarthaksrivastava:~$"}
            />
        </div>
    </MacWindow>
  )
}

export default Cli