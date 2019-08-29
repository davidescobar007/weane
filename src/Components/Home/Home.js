import React from 'react'
import './Home.css';

function Home() {
    return (
        <div>
            <section>
                <div className="home_weather container">
                    <a href="#!" className="home_card child">
                        <article>
                            <header>
                                <h2>Bucaramanga</h2>
                            </header>
                            <div>
                                <h4>29°c</h4>
                                <h4>Sunny</h4>
                            </div>
                        </article>
                    </a>
                    <a href="#!" className="home_card child">
                        <article>
                            <header>
                                <h2>Bucaramanga</h2>
                            </header>
                            <div>
                                <h4>29°c</h4>
                                <h4>Sunny</h4>
                            </div>
                        </article>
                    </a>
                    <a href="#!" className="home_card child">
                        <article>
                            <header>
                                <h2>Bucaramanga</h2>
                            </header>
                            <div>
                                <h4>29°c</h4>
                                <h4>Sunny</h4>
                            </div>
                        </article>
                    </a>
                </div>
            </section>
            <section>
                <div className="home_news cointainer">
                    <div className="child news container">
                        News
                    </div>
                    <div className="child container">
                        <a className="child home_card" href="#!">
                            <article >
                                <h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
                                <p>lorem ipsum lorlorem ipsum lorem ipsum lorem ipsum</p>
                            </article>
                        </a>
                        <a className="child home_card" href="#!">
                            <article >
                                <h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
                                <p>lorem ipsum lorlorem ipsum lorem ipsum lorem ipsum</p>
                            </article>
                        </a>
                        <a className="child home_card" href="#!">
                            <article >
                                <h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
                                <p>lorem ipsum lorlorem ipsum lorem ipsum lorem ipsum</p>
                            </article>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Home;
