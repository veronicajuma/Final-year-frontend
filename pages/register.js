import Head from 'next/head';
import styles from '../styles/Register.module.css';
export default function register() {
    return (
        <div>
            <Head>
	<title>Register</title>
</Head>
<main className = {styles.registration}>
    <div className = {styles.registration__page}>
<p>Missing Child Kenya registration</p>
<form className = {styles.registration__form}>
    <div className = {styles.personal__information}>
	<label>Name</label>
	<input id="first_name" type="text" name="name"/>
    </div>
    
    <div  className = {styles.personal__information}>
	<label>Email</label>
	<input id="email" type="email" name="email"/>
    </div>
    <div  className = {styles.personal__information}>
    <label>Password</label>
	<input id="password" type="password" name="password"/>
    </div>
    
    <div className = {styles.registration__submit}>
	<button type="submit">Submit</button>
    </div>
</form>
</div>
    </main>
        </div>
    )
}
