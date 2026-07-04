import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowState}>
        <div className="resume-window">
            <iframe src="/public/sample-resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume