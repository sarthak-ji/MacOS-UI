import React from 'react'
import "./dock.scss";

const Dock = () => {
  return (
    <footer className='dock'>
        <div className='icon github'><img src="/public/dock-icons/github.svg" alt="" /></div>
        <div className='icon calender'><img src="/public/dock-icons/calender.svg" alt="" /></div>
        <div className='icon cli'><img src="/public/dock-icons/cli.svg" alt="" /></div>
        <div className='icon link'><img src="/public/dock-icons/link.svg" alt="" /></div>
        <div className='icon mail'><img src="/public/dock-icons/mail.svg" alt="" /></div>
        <div className='icon note'><img src="/public/dock-icons/note.svg" alt="" /></div>
        <div className='icon pdf'><img src="/public/dock-icons/pdf.svg" alt="" /></div>
        <div className='icon spotify'><img src="/public/dock-icons/spotify.svg" alt="" /></div>
    </footer>
  )
}

export default Dock