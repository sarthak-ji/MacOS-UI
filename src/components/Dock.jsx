import React from 'react'
import "./dock.scss";

const Dock = ({setWindowState}) => {
  return (
    <footer className='dock'>
        <div 
          onClick={() => { setWindowState(state => ({...state, github: true}))}} 
          className='icon github'><img src="/public/dock-icons/github.svg" alt="" />
        </div>
        <div 
          onClick={()=>{window.open("https://calendar.google.com/","_blank")}} 
          className='icon calender'><img src="/public/dock-icons/calender.svg" alt="" />
        </div>
        <div 
          onClick={() => { setWindowState(state => ({...state, cli: true}))}} 
          className='icon cli'><img src="/public/dock-icons/cli.svg" alt="" /></div>
        <div 
          onClick={()=>{window.open("https://www.linkedin.com/in/sarthak-srivastava-5a2487278/","_blank")}}
          className='icon link'><img src="/public/dock-icons/link.svg" alt="" />
        </div>
        <div 
          onClick={()=>{window.open("mailto:ankur@example.com","_blank")}}
          className='icon mail'><img src="/public/dock-icons/mail.svg" alt="" />
        </div>
        <div 
          onClick={() => { setWindowState(state => ({...state, notes: true}))}} 
          className='icon note'><img src="/public/dock-icons/note.svg" alt="" />
        </div>
        <div 
          onClick={() => { setWindowState(state => ({...state, resume: true}))}} 
          className='icon pdf'><img src="/public/dock-icons/pdf.svg" alt="" />
        </div>
        <div 
          onClick={() => { setWindowState(state => ({...state, spotify: true}))}} 
          className='icon spotify'><img src="/public/dock-icons/spotify.svg" alt="" />
        </div>
    </footer>
  )
}

export default Dock