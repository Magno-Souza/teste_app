import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Registrar() {
    return (
      <div className="cadastro-form-wrap">
            <div>
                 <h1 className="h1cadastro">Cadastro</h1>
                 <h5>Já Cadastrado? <a>Entrar</a></h5>
                <form className='cadastro-form'>
                <input type="usuario" 
                        name="usuario" 
                        placeholder="Usuario" 
                        required
                        />
                <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        />
                <input type="senha" 
                        name="senha" 
                        placeholder="Senha" 
                        required
                        />
                <button type="submit" 
                        className='btn-cadastro'>Cadastrar</button>
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
export default Registrar;