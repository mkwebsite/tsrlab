import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticleDetail from '../../components/article/ArticleDetail';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Header />
        <ArticleDetail slug={slug} />
        <Footer />
      </main>
    </PageWrapper>
  );
}