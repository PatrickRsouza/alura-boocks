import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt='Logo do Alura Book'
                className='logo-img'>
            </img>
            <p><strong>Alura</strong>Book</p>
        </div>
    )
}

export default Logo