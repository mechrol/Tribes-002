export const generateMockPosts = (count) => {
  const platforms = ['twitter', 'instagram', 'facebook', 'linkedin']
  const contents = [
    "Just launched our new feature! 🚀 Excited to see how it transforms your workflow. What do you think?",
    "Behind the scenes of our creative process ✨ Sometimes the best ideas come from unexpected places.",
    "Grateful for our amazing community! Your feedback drives everything we do. Thank you! 🙏",
    "Monday motivation: Every expert was once a beginner. Keep pushing forward! 💪",
    "Coffee, code, and creativity ☕ What fuels your productive days?",
    "Throwback to our team retreat last month. Building connections beyond the screen! 🌟",
    "Pro tip: The best time to plant a tree was 20 years ago. The second best time is now. 🌱",
    "Celebrating small wins today! Progress isn't always about giant leaps. 🎉",
    "Question for the community: What's your favorite productivity hack? Share below! 💭",
    "Sunset views from the office today 🌅 Sometimes you need to pause and appreciate the moment.",
    "New blog post is live! Diving deep into the future of remote collaboration. Link in bio 📖",
    "Friday feeling: Ready to tackle new challenges and embrace the weekend! 🎯",
    "Shoutout to our incredible team for making magic happen every day! ⭐",
    "Learning something new every day. Today's lesson: patience is a superpower. 🧠",
    "Community spotlight: Amazing to see how you're using our platform creatively! 🎨"
  ]
  
  const images = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    null, null, null // Some posts without images
  ]

  return Array.from({ length: count }, (_, index) => ({
    id: Date.now() + index,
    platform: platforms[Math.floor(Math.random() * platforms.length)],
    content: contents[Math.floor(Math.random() * contents.length)],
    image: images[Math.floor(Math.random() * images.length)],
    likes: Math.floor(Math.random() * 500) + 50,
    comments: Math.floor(Math.random() * 100) + 10,
    shares: Math.floor(Math.random() * 50) + 5,
    engagement: (Math.random() * 5 + 3).toFixed(1),
    timestamp: getRandomTimestamp()
  }))
}

const getRandomTimestamp = () => {
  const now = new Date()
  const hoursAgo = Math.floor(Math.random() * 72) // Random time within last 3 days
  const randomTime = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000))
  
  if (hoursAgo < 1) return 'Just now'
  if (hoursAgo < 24) return `${hoursAgo}h ago`
  
  const daysAgo = Math.floor(hoursAgo / 24)
  return `${daysAgo}d ago`
}
