import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header.jsx";
import {Profile} from "./components/Profile.jsx";
import {Skill} from "./components/Skill.jsx";

function App() {

const [show, setShow] = useState(false);

    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]

function changeShow() {
    setShow(!show);
}
  return (
    <>
        <Header/>

        <Profile name="Aida León Vila" age={30} profession="Web Developer"/>

        <button onClick={changeShow}>Skills</button>

        {show &&
        (<ul>
            {skills.map((skill , index) => (
                <Skill key={index} text={skill} />
            ))}
        </ul>)
        }

    </>
  )
}

export default App
