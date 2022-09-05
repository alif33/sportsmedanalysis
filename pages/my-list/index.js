import React from 'react';
import Layout from '../../src/components/Layout';
import TeamsFollowing from '../../src/section/TeamsFollowing';

const MyList = () => {
    return (
        <Layout>
            <div className="container-fluid2 mt-3">
                <h3>My Lists</h3>
            </div>
            <div className="container mb-4">
                <TeamsFollowing title="Teams Following" />
            </div>
            <div className="container mb-4">
                <TeamsFollowing title="Players Following" />
            </div>
        </Layout>
    );
};

export default MyList;