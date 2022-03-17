function About() {
    return (
        <div>
            <div className="wrapper row2">
                <div className="hoc container clear">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Vel lorem quis arcu euismod faucibus</p>
                        <p className="heading underline font-x2">Quisque luctus nullam eget</p>
                    </div>
                    <ul className="nospace group team">
                        <li className="one_quarter first">
                            <figure>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/300x300.png"} alt="" />
                                </a>
                                <figcaption>
                                    <strong>A. Doe</strong> <em>Job Title Here</em>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="one_quarter">
                            <figure>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/300x300.png"} alt="" />
                                </a>
                                <figcaption>
                                    <strong>B. Doe</strong> <em>Job Title Here</em>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="one_quarter">
                            <figure>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/300x300.png"} alt="" />
                                </a>
                                <figcaption>
                                    <strong>C. Doe</strong> <em>Job Title Here</em>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="one_quarter">
                            <figure>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/300x300.png"} alt="" />
                                </a>
                                <figcaption>
                                    <strong>D. Doe</strong> <em>Job Title Here</em>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="wrapper row3">
                <figure className="hoc container clear clients">
                    <figcaption className="sectiontitle">
                        <p className="nospace font-xs">Nisl donec eu neque nisi molestie</p>
                        <p className="heading underline font-x2">Pellentesque donec ut dolor</p>
                    </figcaption>
                    <ul className="nospace group">
                        <li className="one_quarter first">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter first">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                        <li className="one_quarter">
                            <a className="imgover" href="/#">
                                <img src={process.env.PUBLIC_URL + "img/249x100.png"} alt="" />
                            </a>
                        </li>
                    </ul>
                </figure>
            </div>

            <div className="wrapper bgded overlay">
                <section id="testimonials" className="hoc container clear">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Imperdiet at rhoncus vitae ante sed</p>
                        <p className="heading underline font-x2">Eu felis etiam et risus at</p>
                    </div>
                    <article className="btmspace-80">
                        <blockquote>
                            Pellentesque ipsum pede malesuada non vulputate at euismod et lorem nullam tincidunt urna eget nisl eleifend vulputate sed vitae risus sed enim fermentum venenatis sed
                            augue eros tempor sit amet.
                        </blockquote>
                        <figure className="clear">
                            <img src={process.env.PUBLIC_URL + "img/60x60.png"} alt="" />
                            <figcaption>
                                <h6 className="heading">John Doe</h6>
                                <em>CEO</em>
                            </figcaption>
                        </figure>
                    </article>
                    <footer className="center">
                        <a className="btn" href="/#">
                            More Testimonials
                        </a>
                    </footer>
                </section>
            </div>

            <div className="wrapper row3">
                <section className="hoc container clear">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Felis dictum viverra mauris dui</p>
                        <p className="heading underline font-x2">Phasellus nunc erat cursus</p>
                    </div>
                    <ul id="latest" className="nospace group">
                        <li className="one_third first">
                            <article>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/348x261.png"} alt="" />
                                </a>
                                <ul className="nospace meta clear">
                                    <li>
                                        <i className="fas fa-user"></i> <a href="/#">Admin</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-comments"></i> <a href="/#">Comments (10)</a>
                                    </li>
                                </ul>
                                <div className="excerpt clear">
                                    <h6 className="heading">Aliquet tincidunt vel vulputate egestas leo</h6>
                                    <time datetime="2045-04-05T08:15+00:00">
                                        <strong>05</strong> <em>Apr</em>
                                    </time>
                                    <p>Integer id justo ut diam suscipit laoreet quisque bibendum dolor at ultricies vestibulum risus&hellip;</p>
                                </div>
                                <footer>
                                    <a className="btn" href="/#">
                                        Read More
                                    </a>
                                </footer>
                            </article>
                        </li>
                        <li className="one_third">
                            <article>
                                <a className="imgover" href="/#">
                                    <img src={process.env.PUBLIC_URL + "img/348x261.png"} alt="" />
                                </a>
                                <ul className="nospace meta clear">
                                    <li>
                                        <i className="fas fa-user"></i> <a href="/#">Admin</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-comments"></i> <a href="/#">Comments (10)</a>
                                    </li>
                                </ul>
                                <div className="excerpt clear">
                                    <h6 className="heading">Dui eleifend elit ac ullamcorper libero tellus</h6>
                                    <time datetime="2045-04-04T08:15+00:00">
                                        <strong>04</strong> <em>Apr</em>
                                    </time>
                                    <p>Vel turpis quisque blandit metus ut tellus in mauris vivamus faucibus vivamus egestas lobortis&hellip;</p>
                                </div>
                                <footer>
                                    <a className="btn" href="/#">
                                        Read More
                                    </a>
                                </footer>
                            </article>
                        </li>
                        <li className="one_third">
                            <article>
                                <a className="imgover" href="/#">
                                    <img src={`${process.env.PUBLIC_URL}/img/348x261.png`} alt="" />
                                </a>
                                <ul className="nospace meta clear">
                                    <li>
                                        <i className="fas fa-user"></i> <a href="/#">Admin</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-comments"></i> <a href="/#">Comments (10)</a>
                                    </li>
                                </ul>
                                <div className="excerpt clear">
                                    <h6 className="heading">Odio curabitur id neque sed urna facilisis blandit</h6>
                                    <time datetime="2045-04-03T08:15+00:00">
                                        <strong>03</strong> <em>Apr</em>
                                    </time>
                                    <p>Donec quis metus vel tortor porttitor pretium cras at justo nullam at lacus id metus pulvinar&hellip;</p>
                                </div>
                                <footer>
                                    <a className="btn" href="/#">
                                        Read More
                                    </a>
                                </footer>
                            </article>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="wrapper coloured">
                <section id="ctdetails" className="hoc clear">
                    <ul className="nospace clear">
                        <li className="one_quarter first">
                            <div className="block clear">
                                <a href="/#">
                                    <i className="fas fa-phone"></i>
                                </a>{" "}
                                <span>
                                    <strong>Give us a call:</strong> +00 (123) 456 7890
                                </span>
                            </div>
                        </li>
                        <li className="one_quarter">
                            <div className="block clear">
                                <a href="/#">
                                    <i className="fas fa-envelope"></i>
                                </a>{" "}
                                <span>
                                    <strong>Send us a mail:</strong> support@domain.com
                                </span>
                            </div>
                        </li>
                        <li className="one_quarter">
                            <div className="block clear">
                                <a href="/#">
                                    <i className="fas fa-clock"></i>
                                </a>{" "}
                                <span>
                                    <strong> Monday - Saturday:</strong> 08.00am - 18.00pm
                                </span>
                            </div>
                        </li>
                        <li className="one_quarter">
                            <div className="block clear">
                                <a href="/#">
                                    <i className="fas fa-map-marker-alt"></i>
                                </a>{" "}
                                <span>
                                    <strong>Come visit us:</strong> Directions to <a href="/#">our location</a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default About
