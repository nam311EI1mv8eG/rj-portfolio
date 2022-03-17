import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
            <div className="wrapper row0">
                <div id="topbar" className="hoc clear">
                    <div className="fl_left">
                        <ul className="nospace">
                            <li>
                                <i className="fas fa-phone rgtspace-5"></i> +00 (123) 456 7890
                            </li>
                            <li>
                                <i className="far fa-envelope rgtspace-5"></i> info@domain.com
                            </li>
                        </ul>
                    </div>
                    <div className="fl_right">
                        <ul className="nospace">
                            <li>
                                <a title="Login" href="/#">
                                    <i className="fas fa-sign-in-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a title="Sign Up" href="/#">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </li>
                            <li id="searchform">
                                <div>
                                    <form action="#" method="post">
                                        <fieldset>
                                            <legend>Quick Search:</legend>
                                            <input type="text" placeholder="Enter search term&hellip;" />
                                            <button type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bgded">
                <div className="wrapper row1">
                    <header id="header" className="hoc clear">
                        <div id="logo" className="fl_left">
                            <h1>
                                <a href="/#">Nocobot</a>
                            </h1>
                        </div>
                        <nav id="mainav" className="fl_right">
                            <ul className="clear">
                                <li className="active">
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <a className="drop" href="/#">
                                        Dropdown
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="/#">Level 2</a>
                                        </li>

                                        <li>
                                            <a href="/#">Level 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Header
