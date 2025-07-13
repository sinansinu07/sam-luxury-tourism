import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import { useBlog } from '../../Context/BlogContext';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUser } from 'react-icons/fa';


export default function BlogPost() {
  const { slug } = useParams();
  const { posts } = useBlog();
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/" replace />;
  }

  const relatedPosts = posts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

 
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
  
    <div className="space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6">
      <Helmet>
        <title>{post.title} | SAM Luxury Tourism </title>
        <meta name="description" content={`Test description for ${post.title}`} />
      </Helmet>
      {/* Back Button */}
      <Link
        to="/blogs"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors pt-12 sm:pt-8"
      >
    <ArrowLeft className="h-5 w-5 pt-2" />
    <span className="text-sm sm:text-base">Back to blogs</span>
  </Link>

  {/* Article Header */}
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="relative">
      <img
      src={post.image}
      alt={post.title}
      loading="lazy"
      decoding="async"
      className="w-full h-48 sm:h-64 md:h-96 object-cover object-center rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {post.category}
          </span>
          {post.featured && (
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Featured
            </span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-4 leading-snug">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <FaUser  className="text-xl text-gray-700" />
                            </div>
            <p className="font-medium">{post.author.name}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Article Actions */}
    <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
      <p className="text-base text-gray-600">{post.excerpt}</p>
    </div>

    {/* Article Content */}
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="prose prose-sm sm:prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>

    {/* Tags */}
    <div className="px-4 sm:px-6 py-4 border-t border-gray-200">
      <div className="flex items-center space-x-2 mb-3">
        <Tag className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700 font-medium text-sm">Tags:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Author Bio */}
    <div className="px-4 sm:px-6 py-6 bg-gray-50 border-t border-gray-200">
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <FaUser  className="text-xl text-gray-700" />
                        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
            {post.author.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">{post.author.bio}</p>
        </div>
      </div>
    </div>
  </article>

  {/* Related Posts */}
  {relatedPosts.length > 0 && (
    <section className="mt-12 sm:mt-16">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Related Articles</h2>
        <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex-1 ml-4 max-w-24 sm:max-w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {relatedPosts.map((relatedPost) => (
          <article
            key={relatedPost.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={relatedPost.image}
                alt={relatedPost.title}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {relatedPost.category}
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-6 sm:mb-4">
              <div className="flex items-center space-x-4 mb-3 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(relatedPost.publishedAt)}</span>
                </div>
                {/* <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{relatedPost.readTime} min read</span>
                </div> */}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                <Link
                  to={`/blog/${relatedPost.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {relatedPost.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {relatedPost.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )}
  
    </div>

  );
}