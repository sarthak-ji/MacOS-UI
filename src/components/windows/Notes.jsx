import React, { useEffect } from 'react'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import { useState } from 'react'
import "./notes.scss"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'


// Note.txt/md file ko React.js me render karwane ke liye - "npm i react-markdown"
const Notes = ({ windowName, setWindowState }) => {

    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch('/public/note.txt')
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language='typescript' style={docco}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Notes