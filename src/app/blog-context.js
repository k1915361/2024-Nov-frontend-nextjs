'use client'
 
import { createContext, useContext } from 'react'
 
export const BlogContext = createContext(null)
 
export function BlogProvider({
  children,
  blogPromise,
}) {
  return (
    <BlogContext.Provider 
      value={blogPromise}
    >
      {children}
    </BlogContext.Provider>
  )
}
 
export function useBlogContext() {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider')
  }
  return context
}