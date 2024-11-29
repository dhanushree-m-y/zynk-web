import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import Image1 from "../../assets/PostsImage/Image1.jpg"
import Image2 from "../../assets/PostsImage/Image2.jpg"

const EventPost = ({ post, onLike, onSave }) => {
  const [comment, setComment] = useState('');

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComment('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-primary-100 mb-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between p-3 bg-primary-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-200 rounded-full overflow-hidden border-2 border-primary-300">
            <img 
              src={post.user.avatar}
              alt={post.user.username}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-primary-800">{post.user.username}</span>
        </div>
        <button className="text-primary-600 hover:text-primary-700 p-1 rounded-full hover:bg-primary-100 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="aspect-[4/3] w-full bg-primary-50">
        <img 
          src={post.event.image}
          alt="Event"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button onClick={() => onLike(post.id)} className="hover:scale-110 transition-transform">
              <Heart className={`w-6 h-6 ${post.liked ? 'fill-primary-500 text-primary-500' : 'text-primary-600'}`} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-primary-600" />
            </button>
            <button className="hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6 text-primary-600" />
            </button>
          </div>
          <button onClick={() => onSave(post.id)} className="hover:scale-110 transition-transform">
            <Bookmark className={`w-6 h-6 ${post.saved ? 'fill-current text-primary-600' : 'text-primary-600'}`} />
          </button>
        </div>

        <div className="font-medium text-primary-800 mb-2">{post.event.likes} likes</div>

        <div className="mb-2">
          <span className="font-medium text-primary-800 mr-2">{post.user.username}</span>
          <span className="text-gray-800">{post.event.caption}</span>
          <div className="mt-1 space-x-2">
            {post.event.caption.match(/#\w+/g)?.map((tag, index) => (
              <span key={index} className="text-primary-600 hover:text-primary-700 cursor-pointer text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-primary-500 text-sm mb-2 cursor-pointer hover:text-primary-600">
          View all comments
        </div>
        {post.event.comments.map((comment, index) => (
          <div key={index} className="mb-1">
            <span className="font-medium text-primary-800 mr-2">{comment.username}</span>
            <span className="text-gray-800">{comment.text}</span>
          </div>
        ))}
        <div className="text-gray-400 text-xs uppercase mt-1">
          {post.event.timestamp}
        </div>

        <form onSubmit={handleComment} className="mt-3 border-t border-primary-100 pt-3">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full text-sm outline-none bg-transparent placeholder-primary-400 text-primary-800 focus:border-b-2 focus:border-primary-500 transition-colors"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

const Posts = () => {
  const tags = ['#Hackathons', '#TechTalks', '#Workshops', '#Innovation', '#AI', '#WebDev', '#BlockchainTech', '#CloudComputing'];
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        username: 'techie_sarah',
        avatar: '/api/placeholder/40/40'
      },
      event: {
        image: Image1,
        likes: 52,
        caption: 'Just wrapped up an amazing weekend at #AIHackathon2024! Built a cool project with @dev_team. Proud to win the Best Innovation award! 🏆 #TechEvents #Hackathon #Innovation',
        timestamp: '2 HOURS AGO',
        comments: [
          {
            username: 'dev_jake',
            text: 'Congrats on the win! Your project was incredible!'
          }
        ]
      },
      liked: false,
      saved: false
    },
    {
      id: 2,
      user: {
        username: 'code_master',
        avatar: '/api/placeholder/40/40'
      },
      event: {
        image: Image2,
        likes: 128,
        caption: 'Excited to share our workshop on Quantum Computing at #TechCon2024! Amazing turnout and great questions from everyone. Thanks for having me! 🚀 #QuantumComputing #Tech',
        timestamp: '5 HOURS AGO',
        comments: [
          {
            username: 'quantum_dev',
            text: 'Brilliant presentation! Looking forward to the next one.'
          },
          {
            username: 'tech_enthusiast',
            text: 'The practical examples were super helpful! 🙌'
          }
        ]
      },
      liked: false,
      saved: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          event: {
            ...post.event,
            likes: post.liked ? post.event.likes - 1 : post.event.likes + 1
          }
        };
      }
      return post;
    }));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          saved: !post.saved
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-700 to-primary-800 py-8">
      <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Event Highlights</h1>
        <p className="text-xl text-primary-100 mb-8">
          Discover the latest tech events and hackathons shared by our community
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-primary-600/30 backdrop-blur-sm px-6 py-2 rounded-full text-white hover:bg-primary-600/50 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-30 mt-8"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {posts.map(post => (
          <EventPost
            key={post.id}
            post={post}
            onLike={handleLike}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;