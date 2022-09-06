import React from 'react';
import Layout from '../src/components/Layout';
import TeamsFollowing from '../src/section/TeamsFollowing';

const Teams = () => {
    return (
        <Layout navheader={ true }>
            <div className="container-fluid2 mt-3">
                <h3>Team Lists</h3>
            </div>
            <div className="container mb-4">
                <TeamsFollowing title="Teams Following" />
            </div>
        </Layout>
    );
};

export default Teams;