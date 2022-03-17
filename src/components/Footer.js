function Footer() {
    return (
        <div>
            <div className="bgded overlay row4">
                <footer id="footer" className="hoc clear">
                    <div className="one_quarter first">
                        <h6 className="heading">Pellentesque dictum</h6>
                        <ul className="nospace linklist">
                            <li>
                                <a href="/#">Ultricies in molestie sed</a>
                            </li>
                            <li>
                                <a href="/#">Consectetuer nam sodales</a>
                            </li>
                            <li>
                                <a href="/#">Euismod tellus sed non</a>
                            </li>
                            <li>
                                <a href="/#">Est etiam in eros curabitur</a>
                            </li>
                            <li>
                                <a href="/#">Viverra dui nec arcu sed</a>
                            </li>
                        </ul>
                    </div>
                    <div className="one_quarter">
                        <h6 className="heading">Fermentum pellentesque</h6>
                        <p className="nospace btmspace-15">Pede ullamcorper facilisis bibendum nulla elit gravida elit vel suscipit urna.</p>
                        <form action="#" method="post">
                            <fieldset>
                                <legend>Newsletter:</legend>
                                <input className="btmspace-15" type="text" value="" placeholder="Name" />
                                <input className="btmspace-15" type="text" value="" placeholder="Email" />
                                <button type="submit" value="submit">
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="one_quarter">
                        <h6 className="heading">Nisi nunc velit aliquam</h6>
                        <ul className="nospace linklist">
                            <li>
                                <article>
                                    <p className="nospace btmspace-10">
                                        <a href="/#">Sapien sit amet tortor nulla vulputate odio in varius tristique nisi urna.</a>
                                    </p>
                                    <time className="block font-xs" datetime="2045-04-06">
                                        Friday, 6<sup>th</sup> April 2045
                                    </time>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <p className="nospace btmspace-10">
                                        <a href="/#">Consequat erat id rutrum nisi magna vel tellus phasellus malesuada bibendum.</a>
                                    </p>
                                    <time className="block font-xs" datetime="2045-04-05">
                                        Thursday, 5<sup>th</sup> April 2045
                                    </time>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <div className="one_quarter">
                        <h6 className="heading">Lacinia iaculis nunc</h6>
                        <ul className="nospace clear latestimg">
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/100x100.png"} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
            <div className="wrapper row5">
                <div id="copyright" className="hoc clear">
                    <p className="fl_left">
                        Copyright &copy; 2018 - All Rights Reserved - <a href="/#">Domain Name</a>
                    </p>
                    <p className="fl_right">
                        Template by{" "}
                        <a target="_blank" rel="noreferrer" href="https://www.os-templates.com/" title="Free Website Templates">
                            OS Templates
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
