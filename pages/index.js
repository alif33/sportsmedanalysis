import Navbar from "../src/components/headers/Navbar";
import TopHeading from "../src/components/headers/TopHeading";
import ScoreSlider from "../src/components/ScoreSlider";
import ArticleCard from "../src/components/sectionCard/Article";
import SMDFooter from "../src/components/SMDFooter";
import db from "../utils/db";
import _ from "lodash";
import Post from "../models/Post";
import Player from "../models/Player";
import TopStory from "../src/section/TopStory";
import PlayerSection from "../src/section/PlayerSection";
import TopPicks from "../src/section/TopPicks";
import BettingFantasy from "../src/section/BettingFantasy";
import RecentStories from "../src/section/RecentStories";
import Featured from "../src/section/Featured";
import Fannation from "../src/section/Fannation";
import Layout from "../src/components/Layout";


const LandingPage = ({ posts, players }) => {

    console.log(posts);
    return (

        <div className="_LandingPage">
            <Layout>

                <div className="bg-black container-fluid py-1">
                    <div className="d-flex _smd_headers_article flex-column flex-md-row gap-2 gap-md-0">
                        {
                            posts.slice(0, 4).map((item, index) => <ArticleCard key={index}
                                post={item}
                            />)
                        }
                    </div>
                </div>


                <ScoreSlider />


                <div className="container-fluid">
                    <div className='nfl_hr_line'></div>
                </div>


                <TopStory />

                <div className="container-fluid">
                    <div className='nfl_hr_line'></div>
                </div>

                <PlayerSection players={players} />

                <div className="container-fluid">
                    <div className='nfl_hr_line'></div>
                </div>

                {/* Top Picks */}
                <TopPicks />
                {/* Top Picks */}

                {/* Betting & Fantasy */}

                <BettingFantasy title="Betting & Fantasy" />

                {/* Betting & Fantasy */}

                {/* recent,feature,fannation */}
                <Fannation />
                {/* recent,feature,fannation */}

            </Layout>
        </div>
    );
};

export default LandingPage;


export async function getServerSideProps() {

    await db.connect();
    const posts = await Post.find()
        .lean()
        .limit(50);

    const players = await Player.find()
        .lean()
        .limit(50);
    await db.disconnect();
    // console.log(posts);

    return {
        props: {
            // adress: ['ismail', 'alif', 'hosen'],
            posts: posts.map(db.convertDocToObj),
            players: players.map(db.convertDocToObj),
            // mlbs,
        },
    };
}

















// import React from "react";
// import Link from "next/link";
// import Layout from "../src/components/Layout";


// const Home = () => {
//   return (
//     <Layout>
//       <div
//         className="mainBody"
//         data-aos="fade-in"
//         data-aos-easing="linear"
//         data-aos-duration="1200"
//       >
//         <div className="BannerWrapper">
//           <div className="container-md">
//             <div className="row Colum-reverse">
//               <div className="col-sm-12 col-md-6 col-lg-6 ">
//                 <div className="DuplicateMenuList pt-3">
//                   <ul>
//                     <li>
//                       <Link href="/nfl">NFL</Link>
//                     </li>
//                     <li>
//                       <Link href="/nba">NBA</Link>
//                     </li>
//                     <li>
//                       <Link href="/mlb">MLB</Link>
//                     </li>
//                     <li>
//                       <Link href="/watch">Watch</Link>
//                     </li>
//                     <li>
//                       <Link href="/podcast">Prodcast</Link>
//                     </li>
//                     <li className="SubcategoryWrapper">
//                       <Link href="/about">About</Link>
//                       <ul>
//                         <li>
//                           <Link href="#">Contact Us</Link>
//                         </li>
//                         <li>
//                           <Link href="/disclaimer">Desclimer</Link>
//                         </li>
//                         <li>
//                           <Link href="/terms-of-use">Terms of Us</Link>
//                         </li>
//                         <li>
//                           <Link href="/privacy-policy">Privacy Policy</Link>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="col-sm-12 col-md-6 col-lg-6">
//                 <div className="BannerMainLogo">
//                   <Link href="/">
//                     <img src="/images/UltimateLogo.png" alt="" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
