import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { useBlog } from '../../Context/BlogContext';
import image1 from '../../Assets/Blogs/1.webp';
import image2 from '../../Assets/Blogs/2.webp';
import image3 from '../../Assets/Blogs/3.webp';     
import image4 from '../../Assets/Blogs/4.png';
import image5 from '../../Assets/Blogs/5.webp';
import image6 from '../../Assets/Blogs/6.webp';
import image7 from '../../Assets/Blogs/7.webp';
import image8 from '../../Assets/Blogs/8.webp';
import { FaUser } from 'react-icons/fa';


export default function BlogList() {
  const { filteredPosts, selectedCategory } = useBlog();
  const blogImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const randomImage = blogImages[Math.floor(Math.random() * blogImages.length)];

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
<>
<section className="w-full h-[480px] relative overflow-hidden group">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
    style={{ backgroundImage: `url(${randomImage})` }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
      Explore with <span className="text-blue-400 group-hover:text-white">SAM Luxury Tourism</span>
    </h1>
    <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
      Explore expert insights on SAM Luxury Tourism, elite destinations, and high-end experiences.
      Discover curated blogs to inspire your next exclusive getaway.
    </p>
  </div>
</section>



<div className="space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl pt-10 mt-6 mx-auto">
 
  {selectedCategory !== 'All' && (
    <div className="flex justify-center">
      <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
        <span className="text-blue-700 font-medium text-sm sm:text-base">
          Showing articles in: {selectedCategory}
        </span>
      </div>
    </div>
  )}

  {/* Featured Posts */}
  {featuredPosts.length > 0 && (
    <section>
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Blogs</h2>
        <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex-1 ml-4 max-w-24 sm:max-w-32" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {featuredPosts.map((post, index) => (
          <article
            key={post.id}
            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 sm:h-64 lg:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 p-4 sm:p-6 text-white">
              <div className="flex justify-end">
            <div className="flex flex-wrap items-center gap-2 bg-black/40 px-3 py-2 rounded mb-3 text-xs sm:text-sm w-fit ml-auto">
                 <span className="hidden sm:inline bg-white/20 px-2 py-1 rounded text-white">
                    {post.category}
                </span>
                <div className="flex items-center gap-1 text-white">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
                </div>
            </div>
            </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 bg-black/50 px-2 py-1 rounded">
                <Link
                to={`/blog/${post.slug}`}
                className="text-white group-hover:text-blue-200 transition-colors sm:text-lg text-sm"
                aria-label={`Read blog titled ${post.title}`}
                title={post.title}
              >
                {post.title}
              </Link>
              </h3>
              <p className="hidden sm:block text-gray-200 mb-4 text-sm sm:text-base line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaUser  className="text-xl text-gray-700" />
                </div>
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
                <Link
                to={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                aria-label={`Read more about ${post.title}`}
              >
                <span>Read more<span className="sr-only"> about {post.title}</span></span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )}

  {/* Regular Posts */}
  {regularPosts.length > 0 && (
    <section>
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Blogs</h2>
        <div className="h-1 bg-gradient-to-r from-teal-600 to-orange-600 rounded-full flex-1 ml-4 max-w-24 sm:max-w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {regularPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-4 mb-3 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaUser  className="text-xl text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    {post.author.name}
                  </span>
                </div>
                <Link
                to={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                aria-label={`Read more about ${post.title}`}
              >
                <span>Read more<span className="sr-only"> about {post.title}</span></span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )}

  {/* No Results */}
  {filteredPosts.length === 0 && (
    <div className="text-center py-12">
      <BookOpen className="h-14 w-14 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No blogs found</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Try adjusting your search or filter criteria to find what you're looking for.
      </p>
    </div>
  )}
</div>
</>

  );
}