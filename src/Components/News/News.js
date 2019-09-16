import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


function News() {

    const news = useSelector(state => state.news.news[0] === undefined ? [] : state.news.news[0].news);
    console.log(news);

    return (
        <div className="child container">
            {news.map(news => (
                <a key={news.title} className="child home_card" href="#!">
                    <article>
                        <h1>{news.title}</h1>
                        <p>{news.description}</p>
                    </article>
                </a>
            ))}
        </div>
    )
}

export default News;