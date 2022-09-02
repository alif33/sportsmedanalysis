import React from 'react';
import ArticleCard from '../../components/sectionCard/ArticleCard';

const Article = ({posts}) => {
    return (
        <div className="bg-black container-fluid py-1">
        <div className="d-flex _smd_headers_article flex-column flex-md-row gap-2 gap-md-0">
            {
                posts.slice(0, 4).map((item, index) => <ArticleCard 
                    index={ index }
                    post={ item }
                />)
            }
        </div>
    </div>
    );
};

export default Article;