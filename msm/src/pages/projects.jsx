import { Navbar } from "../components/navbar"
import "../styles/projects.css"
import Fishing from "../assets/imgs/Fishing.png"
import { Link } from "react-router-dom"

export const Projects = () => {
  return (
    <>
    <Navbar />
    <div className="projects-main">
        <div className="header">
            <h1>Projects</h1>
        </div>
        <div className="boxes">
        <div class="box-l">
                <img src={Fishing} alt="" />
                <div class="overlay">
                    <div class="overlay-text">
                        <h2>First Project</h2>
                        <p>Project Date</p>
                    </div>
                </div>
            </div>
            <div class="box-r">
                <img src={Fishing} alt="" />
                <div class="overlay">
                    <div class="overlay-text">
                        <h2>First Project</h2>
                        <p>Project Date</p>
                    </div>
                </div>
            </div>
            <div class="box-l">
                <img src={Fishing} alt="" />
                <div class="overlay">
                    <div class="overlay-text">
                        <h2>First Project</h2>
                        <p>Project Date</p>
                    </div>
                </div>
            </div>
            <div class="box-r">
                <img src={Fishing} alt="" />
                <div class="overlay">
                    <div class="overlay-text">
                        <h2>First Project</h2>
                        <p>Project Date</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}


