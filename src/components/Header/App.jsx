import './App.css'

// Assets
import Logo from '../../assets/Logo.svg'
import ru from '../../assets/ru.svg'

function Header() {
    return (
        <header>
            <div className="container flex">
                <img src={Logo} alt="" />

                <div className="flex wrapper">

                    <div className="lang-num flex">
                        <select name="lang" id="">
                            <option value="ru">
                                Ru
                            </option>

                            <option value="uz">
                                Uz
                            </option>

                            <option value="en">
                                En
                            </option>
                        </select>

                        <a href="tel:++998906066666">
                            +998 (90)-606-66-66
                        </a>
                    </div>

                    <button>
                        оставить заявку
                    </button>
                </div>

                </div>
        </header>
    )
}

export default Header;