import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const IslamiNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=islam&apiKey=5a8e05dd62434f94860ada8bb20170ba`
        );
        const data = await response.json();
        
        // Check if response is successful and contains articles
        if (data.status === 'error') {
          throw new Error(data.message || 'Failed to fetch news');
        }
        
        if (!data.articles || !Array.isArray(data.articles)) {
          throw new Error('Invalid response format');
        }

        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('News API Error:', error);
        setError(
          error instanceof Error 
            ? error.message 
            : 'Gagal mengambil berita. Silakan coba lagi.'
        );
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-center text-gray-600 p-5">Memuat berita...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-center text-red-500 p-4">{error}</p>
      </div>
    );
  }

  // Ensure articles exists before rendering
  if (!articles || articles.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-center text-gray-600 p-4">Tidak ada berita yang tersedia.</p>
      </div>
    );
  }

  return (
    <div className="bg-main mx-auto px-4 py-6">
      <div className="flex gap-5">
        <span className="md:text-3xl text-xl font-bold text-center mb-6 text-gray-800 dark:text-purple-500 cursor-pointer hover:text-red-500">
          <a href="/"><i className="fa-solid fa-arrow-left"></i></a>
        </span>
        <h1 className="md:text-3xl text-xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Berita Islami Terkini
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div 
            key={`${article.title}-${index}`} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-md"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-image.jpg'; // Add a placeholder image
                }}
              />
            )}
            <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
              {article.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
              {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-500 hover:underline"
            >
              Baca Selengkapnya
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslamiNews;