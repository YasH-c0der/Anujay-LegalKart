import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Property Registration Process in India',
      excerpt: 'A comprehensive guide to property registration procedures, documentation requirements, and legal considerations in India.',
      date: 'March 15, 2023',
      category: 'Property Law'
    },
    {
      id: 2,
      title: 'Startup Legal Essentials: What Every Founder Should Know',
      excerpt: 'Important legal aspects that startup founders should consider from incorporation to intellectual property protection.',
      date: 'April 22, 2023',
      category: 'Startup Law'
    },
    {
      id: 3,
      title: 'How to Draft a Legally Sound Employment Contract',
      excerpt: 'Key components of an employment contract that protects both employer and employee interests while ensuring legal compliance.',
      date: 'May 10, 2023',
      category: 'Employment Law'
    },
    {
      id: 4,
      title: 'Navigating Divorce Proceedings: A Legal Perspective',
      excerpt: 'Legal steps involved in divorce proceedings, including property division, alimony, and child custody considerations.',
      date: 'June 5, 2023',
      category: 'Family Law'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Legal Insights Blog</h1>
      <p className="text-gray-600 mb-12 max-w-3xl">
        Stay updated with the latest legal trends, case analyses, and expert insights from our team of experienced legal professionals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
            <div className="h-48 bg-gray-200" />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-secondary">{post.category}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-secondary font-medium text-sm hover:text-secondary-dark transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
