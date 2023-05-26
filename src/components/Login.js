import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Login() {
    return (
      <div className="login-form-wrap">
            <div>
                 <h1 className="h1login">Login</h1>
                 <h5>Novo Usuário? <a>Criar Conta</a></h5>
                
                <form className='login-form'>
                <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        />
                <input type="senha" 
                        name="senha" 
                        placeholder="Senha" 
                        required />
                <button type="submit" 
                        className='btn-login'>Login</button>
                
                
                </form>
                <ul className="SocialMidiaLogin">
                   <li><FaGoogle/></li>
                   <li><FaFacebook/></li>
                   <li><FaGithub/></li>
               </ul>
            </div>
      </div>
    );
  }
export default Login;