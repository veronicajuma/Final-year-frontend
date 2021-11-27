import Dashboard from "./dashboard";
import style from "../styles/Homepage.module.css";
import Casebarchart from "./casebarchart.js";
import Countypie from "./countypie";
import Gender from "./gender";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/free-solid-svg-icons';
export default function home() {
    return (
        <div>
                <Dashboard/>

            <main className = {style.main__styles}>
               <div className = {style.general__info}>
                   
                   <p>General overview</p>
                   </div>
                 <div className = {style.dashboard__summary}>
                     <div className = {style.dashboard__numbers}>
                      <span>593</span>
                      <div className = {style.dashboard__text}>
                      <span>Total</span> 
                          <span>cases</span>
                          </div>
                      </div>
                      <div className = {style.dashboard__numbers}>
                      <span>392</span>
                      <div className = {style.dashboard__text}>
                      <span>Solved</span> 
                          <span>cases</span>
                          </div>
                      </div>
                      <div className = {style.dashboard__numbers}>
                      <span>201</span>
                      <div className = {style.dashboard__text}>
                      <span>Open</span> 
                          <span>cases</span>
                          </div>
                      </div>
                 </div>
                 <div className = {style.bulletin__board}>
                          <p>Bulletin Board</p>
                          </div>
                 <div className = {style.bar__statistics}>
                   <div className = {style.chart__information}>
                       <Casebarchart/>
                   </div>
                   <div className = {style.pie__information}>
                       <Countypie/>
                   </div>
                 </div>
                 <div className = {style.line__statistics}>
                   <div className = {style.gender__information}>
                       <Gender/>
                   </div>
                   <div className = {style.twitter__information}>
                      <p>Social media stats</p>
                      <FontAwesomeIcon icon={faTwitter}/>
                   </div>
                 </div>
                 <div className = {style.footer}>
                     <span>&copy;copyright 2021,</span>
                     <span>Missing Child KE</span>
                 </div>
            </main>
        </div>
    )
}
