'use client'
 
import { use } from 'react'
import { useBlogContext } from './blog-context'
 
export function randomInt(max) {
  return   Math.floor(Math.random() * max);
}

export function BlogPosts() {
  const blogPromise = useBlogContext()
  const posts = use(blogPromise)
  const postsEnd = 5

  return (
    <div>
      <div>{postsEnd}/{posts.length} blog posts</div>
      <section>
        <ul>
          {posts?.slice(0,postsEnd)?.map((post, index) => (
            <li key={post.id}>
              {index + 1}. {post.title}. {post.author}. {post.category}. {post.date}
            </li>
          ))}
        </ul>        
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: '';
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    </div>  
  )
}