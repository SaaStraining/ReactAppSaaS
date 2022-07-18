import React from 'react'
import './pages.css'

function Login() {
  return (
    <div className='Login'>
        <div className='login_left'>
            <div className='log_left_top'>
                <a href="#" className='log_logo'>Logo</a>
                <a href="" className='log_ret'>
                    Retour
                </a>
            </div>
            <div className="log_left_body">
                <div className="log_bienv">
                    Bienvenue au <span style={{color:'#319CFF'}}>TNM</span> Admin<br/>Authentification.
                </div>
                <div className='log_form'>
                    <form className='log_inner_form'>
                        <input type="text" className='log_login' placeholder="Nom d'utilisateur..." name="" id="" /><br />
                        <input type="password" className='log_mdp' placeholder="Mot de passe..." name="" id="" /><br />
                        <button type='submit'>Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='login_right'></div>
    </div>
  )
}

export default Login