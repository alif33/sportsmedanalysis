import React from "react";
import db from "../../utils/db";
import Blog from "../../models/Blog";


const _Blog = ({ blogs }) => {

  const _blogs = JSON.parse(blogs);

  return (
    <>
        <h1 style={{ textAlign: "center" }}>Blogs</h1>
        {
            _blogs && _blogs.map((item, index)=>{
                return(
                    <div key={ index }>
                        <span>{index}</span>
                        <h4>{item.title}</h4>
                    </div>
                )
                
            })
        }
    </>
  );
};

export default _Blog;


export async function getStaticProps(context) {
    await db.connect();

    const blogs = await Blog.find({})
        .lean()
        .limit(50);

    await db.disconnect();

    return {
      props: {
        blogs: JSON.stringify(blogs)
      },
      revalidate: 60, // will be passed to the page component as props
    }
  }
// export const getServerSideProps = __Auth((context) => {
//   return {
//     props: {},
//   };
// });
