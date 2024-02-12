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
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/ludo">Ludo</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/clock">Clock</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/gallery">Gallery</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/IdentityCard">Identity Card</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/MusicPlayer">Music Player</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'black'}} to="/TodoList">To Do List</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet />
    </>
  )
};

