import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PostCard from './PostCard'
import { generateMockPosts } from '../utils/mockData'

const PostFeed = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  useEffect(() => {
    loadInitialPosts()
  }, [])

  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMorePosts()
    }
  }, [inView, hasMore, loading])

  const loadInitialPosts = () => {
    const initialPosts = generateMockPosts(10)
    setPosts(initialPosts)
  }

  const loadMorePosts = async () => {
    setLoading(true)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newPosts = generateMockPosts(5)
    setPosts(prev => [...prev, ...newPosts])
    setLoading(false)
    
    // Stop loading after 50 posts for demo
    if (posts.length >= 45) {
      setHasMore(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Social Feed</h1>
        <p className="text-white/60">Your latest posts across all platforms</p>
      </motion.div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div ref={ref} className="flex justify-center py-8">
          {loading ? (
            <motion.div
              className="glass p-4 rounded-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <span className="text-white">Loading more posts...</span>
            </motion.div>
          ) : (
            <div className="text-white/60">Scroll to load more</div>
          )}
        </div>
      )}

      {!hasMore && (
        <div className="text-center py-8">
          <span className="text-white/60">You've reached the end!</span>
        </div>
      )}
    </div>
  )
}

export default PostFeed
