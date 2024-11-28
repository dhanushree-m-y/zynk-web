import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const Posts = ({ post, onLike, onSave }) => {
  const [comment, setComment] = useState('');

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComment('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img 
              src={post.user.avatar}
              alt={post.user.username}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium">{post.user.username}</span>
        </div>
        <button className="text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      <div className="aspect-square w-full bg-gray-100">
        <img 
          src={post.event.image}
          alt="Event"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button onClick={() => onLike(post.id)}>
              <Heart className={`w-6 h-6 ${post.liked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
            </button>
            <button>
              <MessageCircle className="w-6 h-6 text-gray-700" />
            </button>
            <button>
              <Share2 className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <button onClick={() => onSave(post.id)}>
            <Bookmark className={`w-6 h-6 ${post.saved ? 'fill-current text-gray-700' : 'text-gray-700'}`} />
          </button>
        </div>

        {/* Likes */}
        <div className="font-medium mb-2">{post.event.likes} likes</div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-medium mr-2">{post.user.username}</span>
          <span className="text-gray-800">{post.event.caption}</span>
        </div>

        {/* Comments */}
        <div className="text-gray-500 text-sm mb-2">
          View all comments
        </div>
        {post.event.comments.map((comment, index) => (
          <div key={index} className="mb-1">
            <span className="font-medium mr-2">{comment.username}</span>
            <span>{comment.text}</span>
          </div>
        ))}
        <div className="text-gray-400 text-xs uppercase mt-1">
          {post.event.timestamp}
        </div>

        {/* Comment Input */}
        <form onSubmit={handleComment} className="mt-3 border-t pt-3">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full text-sm outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

const EventFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        username: 'techie_sarah',
        avatar: '/api/placeholder/40/40'
      },
      event: {
        image: '/api/placeholder/400/400',
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
        image: '/api/placeholder/400/400',
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
    },
    {
      id: 3,
      user: {
        username: 'data_ninja',
        avatar: '/api/placeholder/40/40'
      },
      event: {
        image: '/api/placeholder/400/400',
        likes: 89,
        caption: 'Day 2 at #DataSummit2024! Leading a workshop on advanced ML techniques. Join us in Room 42 for hands-on practice with real-world datasets! 📊 #MachineLearning #DataScience',
        timestamp: '1 DAY AGO',
        comments: [
          {
            username: 'ml_expert',
            text: 'Great insights on model optimization!'
          },
          {
            username: 'data_scientist',
            text: 'Those visualization techniques were game-changing 📈'
          }
        ]
      },
      liked: false,
      saved: false
    },
    {
      id: 4,
      user: {
        username: 'devops_pro',
        avatar: '/api/placeholder/40/40'
      },
      event: {
        image: '/api/placeholder/400/400',
        likes: 76,
        caption: 'Wrapping up the Cloud Native DevOps Summit! Incredible discussions on kubernetes and microservices architecture. Thanks everyone who attended my session! ☁️ #DevOps #Cloud #k8s',
        timestamp: '2 DAYS AGO',
        comments: [
          {
            username: 'cloud_architect',
            text: 'Your monitoring setup demo was excellent!'
          },
          {
            username: 'k8s_lover',
            text: 'Can you share the slides? Really valuable content 🙏'
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
    <div className="max-w-md mx-auto p-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-3">Event Highlights</h1>
        <p className="text-gray-600 mb-4">
          Discover the latest tech events and hackathons shared by our community
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#Hackathons</span>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#TechTalks</span>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#Workshops</span>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#Innovation</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-8"></div>
      </div>

      {/* Event Posts */}
      {posts.map(post => (
        <EventPost
          key={post.id}
          post={post}
          onLike={handleLike}
          onSave={handleSave}
        />
      ))}
    </div>
  );
};

export default Posts;