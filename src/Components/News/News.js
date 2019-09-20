import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';



function News() {

    const news = useSelector(state => state.news.news[0] === undefined ? [] : state.news.news[0].news);
    // console.log(news);

    return (
        <div className="container child">
            {news.slice(0, 4).map(news => (
                <a key={news.id} className="child home_card news_card" href={news.url} target="_blank">
                    <article className="child container">
                        <div>
                            <img id="image" src={news.urlToImage}></img>
                        </div>
                        <div>
                            <h1>{news.title}</h1>                            
                        </div>
                    </article>
                </a>
            ))}
        </div>
    )
}

export default News;