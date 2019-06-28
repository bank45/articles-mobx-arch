import React from 'react';
import NewNews from './new-news';
import InteresNews from './interes-news'
import './articles.css'

const Articles = () => {
    return (
        <div className="content">
            <InteresNews />
            <NewNews />
        </div>
    )
}

export default Articles;
