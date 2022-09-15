import React from 'react';
import Team from "../models/Team";
import Layout from '../src/components/Layout';
import TeamsFollowing from '../src/section/TeamsFollowing';
import db from '../utils/db';

const Teams = ({ teams }) => {
    return (
        <Layout navheader={ true }>
            <div className="container-fluid2">
                <h3 className="mt-3">Team Lists</h3>
            </div>
            <div className="container mb-4">
                <TeamsFollowing 
                    title="Teams Following" 
                    teams={ JSON.parse(teams) }
                />
            </div>
        </Layout>
    );
};

export default Teams;

export async function getStaticProps(context) {
    await db.connect();
    const teams = await Team.find({})
      .sort()
      .lean()
      .limit(50);
  
    await db.disconnect();
  
    return {
      props: {
        teams: JSON.stringify(teams),
      },
      revalidate: 60,
    };
  }
  