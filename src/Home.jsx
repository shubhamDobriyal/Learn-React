import { Outlet, Link } from "react-router-dom";
import './App.css';

export default function Home(){
  return (
    <>
        <div className="nav-container">           
            <nav>
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/form">Form</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/ludo">Ludo</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/events">Events</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/challenge1">Challenge1</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/UseEffectHook">Use Effect</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/IdentityCard">Identity Card</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/UseContext">Use Context</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/MusicPlayer">Music Player</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/FormSubmit">Form Submit</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet />
    </>
  )
};

