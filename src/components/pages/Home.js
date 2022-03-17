function Home() {
    return (
        <div>
            <div className="overlay">
                <div id="pageintro" className="hoc clear">
                    <article>
                        <h3 className="heading">Dapibus ligula convallis</h3>
                        <p>A massa etiam augue nunc lectus duis eget libero non nisi lobortis suscipit praesent viverra nam dapibus orci non erat aliquam erat volutpat.</p>
                        <footer>
                            <a className="btn" href="/#">
                                Gravida sem neque
                            </a>
                        </footer>
                    </article>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <section id="introblocks">
                        <ul className="nospace group btmspace-80">
                            <li className="one_third first">
                                <figure>
                                    <a className="imgover" href="/asd">
                                        <img src={process.env.PUBLIC_URL + "img/348x400.png"} alt="" />
                                    </a>
                                    <figcaption>
                                        <h6 className="heading">Mollis suscipit</h6>
                                        <div>
                                            <p>Eu adipiscing sit amet ante donec vulputate magna duis posuere tellus vel fringilla auctor nisi arcu.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li className="one_third">
                                <figure>
                                    <a className="imgover" href="/asd">
                                        <img src={process.env.PUBLIC_URL + "img/348x400.png"} alt="" />
                                    </a>
                                    <figcaption>
                                        <h6 className="heading">Vestibulum maecenas</h6>
                                        <div>
                                            <p>Urna at congue lectus nisi ac neque suspendisse vitae sapien eu mi placerat tincidunt sed eget elit in.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li className="one_third">
                                <figure>
                                    <a className="imgover" href="/asd">
                                        <img src={process.env.PUBLIC_URL + "img/348x400.png"} alt="" />
                                    </a>
                                    <figcaption>
                                        <h6 className="heading">Pellentesque enim</h6>
                                        <div>
                                            <p>Imperdiet pede sit amet elit aenean sollicitudin eros quis cursus feugiat lacus diam tempor tortor vel.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </section>

                    <hr className="btmspace-80" />

                    <section className="group">
                        <div className="one_half first">
                            <img className="inspace-15 borderedbox" src={process.env.PUBLIC_URL + "img/474x356.png"} alt="" />
                        </div>
                        <div className="one_half">
                            <ul className="nospace group inspace-15">
                                <li className="one_half first btmspace-50">
                                    <article>
                                        <h6 className="heading">
                                            <a href="/asd">Posuere ultricies</a>
                                        </h6>
                                        <p className="nospace">Sed tellus fusce velit orci aliquet et condimentum sit amet dapibus eget odio vivamus urna pellentesque felis&hellip;</p>
                                    </article>
                                </li>
                                <li className="one_half btmspace-50">
                                    <article>
                                        <h6 className="heading">
                                            <a href="/asd">Pellentesque ipsum</a>
                                        </h6>
                                        <p className="nospace">Ut quam imperdiet tincidunt vestibulum eget magna eget sem imperdiet tincidunt praesent sit amet adipiscing&hellip;</p>
                                    </article>
                                </li>
                                <li className="one_half first">
                                    <article>
                                        <h6 className="heading">
                                            <a href="/asd">Risus auctor vel</a>
                                        </h6>
                                        <p className="nospace">Accumsan curabitur cursus porta lectus nam posuere orci in elementum molestie purus erat volutpat ullamcorper&hellip;</p>
                                    </article>
                                </li>
                                <li className="one_half">
                                    <article>
                                        <h6 className="heading">
                                            <a href="/asd">Volutpat vitae</a>
                                        </h6>
                                        <p className="nospace">Elit purus non odio etiam dictum euismod lectus vestibulum tincidunt erat vel molestie gravida ligula lacus&hellip;</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="clear"></div>
                </main>
            </div>
        </div>
    )
}

export default Home
