import React from 'react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (<>
    <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Find out more</span> 
    <a className="link link-hover">About CASA RIPA</a>
    <a className="link link-hover">Route to Us</a>
    <a className="link link-hover"><Link to="/FAQ">FAQ's</Link></a>
    <a className="link link-hover"><Link to="/GalleryImages">Gallery</Link></a>
    <a className="link link-hover"><Link to="/AdminLogin">Admin</Link></a>
  </div> 
  <div>
    <span className="footer-title">Contacts</span> 
    <a className="">Ferienhaus Casa Ripa</a>
    <a className="">Jasmin Ghubbar</a>
    <a className="">Tannenweg 46</a>
    <a className="">85399 Hallbergmoos</a>
    <a className="link link-hover h-4 w-4">{/* <CIcon icon={icon.cilEnvelopeClosed} size="sm"/> */}casaripa.cupra@gmail.com</a>
    <a className="">(0049) 179 294 64 32</a><br />

    <div><p>Copy right @ CASA RIPA, Italy - Created with ReDI Lab, 2024</p></div>
  </div> 
  <div>
    <span className="footer-title">Follow Us</span> 
    <div className="grid grid-flow-col gap-4">

      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current link link-hover"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current link link-hover"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

      
    </div><br />
  </div>
</footer>
 
 </>
  )
}

export default Footer