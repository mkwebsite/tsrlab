import React from 'react';
import Image from 'next/image';

interface BlogContentProps {
  image: string;
  imageAlt: string;
}

export default function BlogContent({ image, imageAlt }: BlogContentProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In today's rapidly evolving digital landscape, staying ahead of technology trends is crucial for business success. This comprehensive guide explores the most significant technological advancements that will shape the future of business operations, customer engagement, and competitive positioning.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Understanding the Digital Revolution
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              The digital revolution has fundamentally transformed how businesses operate, communicate, and deliver value to customers. Organizations that embrace these changes are better positioned to innovate, scale, and maintain competitive advantages in their respective markets.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              From artificial intelligence and machine learning to cloud computing and data analytics, modern technologies offer unprecedented opportunities for optimization, automation, and growth. Understanding these trends is not just beneficial—it's essential for survival in today's business environment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Key Technology Trends
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Artificial Intelligence & Machine Learning
            </h3>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              AI and ML are revolutionizing business processes across all industries. From predictive analytics to automated customer service, these technologies enable organizations to make data-driven decisions faster and more accurately than ever before.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Cloud Computing & Infrastructure
            </h3>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Cloud technologies provide scalable, flexible, and cost-effective solutions for businesses of all sizes. Modern cloud platforms enable remote collaboration, data storage, and application deployment with enhanced security and reliability.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Data Analytics & Business Intelligence
            </h3>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Advanced analytics tools transform raw data into actionable insights. Organizations leveraging comprehensive data analysis can identify market opportunities, optimize operations, and deliver personalized customer experiences.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Implementation Strategies
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Successfully implementing new technologies requires careful planning, stakeholder buy-in, and a clear understanding of business objectives. Organizations should start with pilot projects, measure results, and scale gradually based on proven outcomes.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              It's also crucial to invest in employee training and change management to ensure smooth adoption and maximize the return on technology investments.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Conclusion
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              The future of business is inherently tied to technological advancement. Organizations that proactively embrace innovation, invest in the right technologies, and cultivate a culture of continuous learning will be best positioned to thrive in the digital age.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Whether you're a startup or an established enterprise, understanding and leveraging these technology trends is essential for sustainable growth and competitive advantage.
            </p>
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#ff3333] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#ff3333] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#ff3333] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <a 
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}