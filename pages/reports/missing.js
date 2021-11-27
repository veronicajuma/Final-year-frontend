import React from 'react'
import Dashboard from '../dashboard';
import styles from '../../styles/Missing.module.css';
export default function missing() {
    return (
        <div>
            <Dashboard/>
            <main className = {styles.missing__styles}>
                <div className = {styles.maininfo}>
                    <span>Report a missing child</span>
                </div>
                <div className = {styles.full__info}>
                    <div className = {styles.personal__info}>
                       <span> Your personal details</span>
                        <div className= {styles.data__entry}>
                            <label>Name</label>
                            <input type ="text"/>
                        </div>
                        <div className= {styles.data__entry}>
                            <label>E_mail</label>
                            <input type ="text" className = {styles.input__deco}/>
                        </div>
                        <div className= {styles.data__entry}>
                            <label>Phone_Number</label>
                            <input type ="text"/>
                        </div>
                        </div>
                        <div className={styles.middle__line}></div>
                        <div className = {styles.personal__info}>
                       <span> Missing Child's details</span>
                        <div className= {styles.data__entry}>
                            <label>Name</label>
                            <input type ="text"/>
                        </div>
                        <div className= {styles.data__entry}>
                            <label>Gender</label>
                            <select name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                            </select>
                        </div>
                        <div className= {styles.data__entry}>
                            <label>Age</label>
                            <input type ="text"/>
                        </div>
                        <div className= {styles.data__entry}>
                            <label>Date went missing</label>
                            <input type ="date"/>
                            <div className= {styles.data__entry}>
                            <label>Location</label>
                            <select name="cars" id="cars">
                                    <option value="volvo">Nairobi</option>
                                    <option value="saab">Kiambu</option>
                                    <option value="mercedes">Machakos</option>
                                  
                            </select>
                        </div>
                        </div>
                        </div>  
                </div>
                <div className = {styles.submit__button}>
                            <button>
                                Submit
                            </button>
                            </div>
                <div className = {styles.child__footer}>
                     <span>&copy;copyright 2021,</span>
                     <span>Missing Child KE</span>
                 </div>
            </main>
        </div> 
    )
}
