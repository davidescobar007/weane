import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './News.css'


function News() {

    const news = useSelector(state => state.news.news[0] === undefined ? [] : state.news.news[0].news);
    // console.log(news);

    return (
        <div className="container child">
            {news.slice(0, 4).map(news => (
                <a key={news.id} className="child home_card news_card" href="#!">
                    <article id="newsCard" style={{
                        backgroundImage: `url(${news.urlToImage})`                        
                    }}>
                        <h1>{news.title}</h1>
                        {/* <p>{news.description}</p> */}
                    </article>
                </a>
            ))}
        </div>
    )
}

export default News;