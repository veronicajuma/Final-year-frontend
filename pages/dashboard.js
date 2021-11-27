import styles from '../styles/Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUsers, faFlag, faHome, faChartLine, faSearch, faPaperPlane, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import missingchild from '../public/missingchild.png';
import Image from 'next/image';
import Link from 'next/link';
export default function dashboard() {
    return (
        <div className = {styles.main__dashboard}>
      <main >
      <div className = {styles.dashboard__menu}>
        <div className = {styles.dashboard__sidebar}>
          <div className = {styles.dashboard__logo}>
            <Image src={missingchild} alt = "Company logo"/>
            
          </div>
          <ul>
            <li>
            <FontAwesomeIcon icon={faHome} className = {styles.homeicon}/>
              <Link href = "/home">Dashboard</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faFlag} className = {styles.homeicon}/>
              <a href ="#" >Report a case</a>
            </li>
            <div id = "tenants__dropdown">
                          <ul c>
                          <li ><Link href = "../reports/missing">Missing child</Link></li>
                          <li ><Link href="../reports/rescued">Rescued child</Link></li>
                         </ul>
                        </div>
            <li>
            <FontAwesomeIcon icon={faUsers} className = {styles.homeicon}/>
              <Link href = "/missingchildren">Missing children</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faChartLine} className = {styles.homeicon}/>
              <Link href = "#">County reports</Link>
            </li>
            </ul>
            <div className = {styles.accounts}>
            <span >ACCOUNT SETTINGS</span>
            </div>
            <ul>
            <li>
            <FontAwesomeIcon icon={faUser} className = {styles.homeicon}/>
              <a href = "#">Profile</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faSignOutAlt} className = {styles.homeicon}/>
              <a href = "#">Logout</a>
            </li>
          </ul>
        </div>
        <div className ={styles.dashboard__header}>
           <div className ={styles.dashboard__headersearch}>
             <input placeholder = "Search using keyword" className = {styles.dashboard__headerinput}/>
              <div>
              <FontAwesomeIcon icon ={faSearch} className = {styles.searchicon}/>
              </div>
           </div>
           <div className = {styles.dashboard__headerprofile}>
             <div className = {styles.dashboard__headerlanguage}>
          
           </div>
             <Image src={missingchild} alt = "profile picture" width = {50} height = {50} className = {styles.profile__pic}/>
             <div className = {styles.user__information}>
             <span>Veronica</span>
             <span>User</span>
             </div>
           </div>
        </div>
      </div>
      </main>
                
                </div>
        
    )
}
