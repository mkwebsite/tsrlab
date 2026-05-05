import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogDetailHero from '../../components/blog/BlogDetailHero';
import BlogContent from '../../components/blog/BlogContent';

export default function BlogDetailPage() {
  // In a real application, this data would come from a CMS or database based on the slug
  const blogPost = {
    title: 'Top 10 Tech Trends Shaping 2024',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: '/images/project-1.jpg',
  };

  return (
    <main className="min-h-screen">
      <Header />
      <BlogDetailHero 
        title={blogPost.title}
        author={blogPost.author}
        date={blogPost.date}
        readTime={blogPost.readTime}
      />
      <BlogContent 
        image={blogPost.image}
        imageAlt={blogPost.title}
      />
      <Footer />
    </main>
  );
}