'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CalendarIcon from '../icons/calendar.svg';
import ArrowRightIcon from '../icons/arrow-right.svg';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Tech Trends Shaping 2024',
    excerpt: 'Explore the most impactful technology trends that will transform businesses and industries in the coming year.',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: '/images/project-1.jpg',
    slug: 'top-10-tech-trends-2024',
  },
  {
    id: 2,
    title: 'Digital Transformation: A Complete Guide',
    excerpt: 'Learn how to successfully implement digital transformation strategies to modernize your business operations.',
    author: 'Michael Chen',
    date: 'December 10, 2024',
    readTime: '8 min read',
    image: '/images/project-2.jpg',
    slug: 'digital-transformation-guide',
  },
  {
    id: 3,
    title: 'AI and Machine Learning in Business',
    excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing business decision-making.',
    author: 'Emily Rodriguez',
    date: 'December 5, 2024',
    readTime: '6 min read',
    image: '/images/project-3.jpg',
    slug: 'ai-machine-learning-business',
  },
  {
    id: 4,
    title: 'Market Research Best Practices',
    excerpt: 'Essential strategies and methodologies for conducting effective market research in today\'s data-driven world.',
    author: 'David Park',
    date: 'November 28, 2024',
    readTime: '7 min read',
    image: '/images/project-4.jpg',
    slug: 'market-research-best-practices',
  },
  {
    id: 5,
    title: 'Cloud Computing Security Essentials',
    excerpt: 'Best practices and strategies to secure your cloud infrastructure and protect sensitive business data.',
    author: 'Lisa Anderson',
    date: 'November 20, 2024',
    readTime: '6 min read',
    image: '/images/project-5.jpg',
    slug: 'cloud-computing-security',
  },
  {
    id: 6,
    title: 'Innovation Strategies for Growth',
    excerpt: 'Practical approaches to foster innovation culture and drive sustainable business growth.',
    author: 'James Wilson',
    date: 'November 15, 2024',
    readTime: '5 min read',
    image: '/images/project-6.jpg',
    slug: 'innovation-strategies-growth',
  },
];

export default function BlogList() {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const displayedPosts = blogPosts.slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Post Image */}
              <div className="relative h-56 md:h-64 bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5" style={{ color: '#6b7280' }} />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff3333] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-700">By {post.author}</span>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#ff3333] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRightIcon className="w-3 h-3" style={{ color: '#ff3333' }} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < blogPosts.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-12 py-4 bg-gray-100 text-gray-900 rounded-full font-bold text-base hover:bg-gray-200 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}