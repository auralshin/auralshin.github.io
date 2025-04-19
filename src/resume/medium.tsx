import React, { useEffect, useState } from "react";
import { PiMediumLogoBold } from "react-icons/pi";

interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  pubDate: string;
}

export const MediumFeed: React.FC<{ username: string }> = ({ username }) => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    )
      .then(res => res.json())
      .then(data => {
        const latest = data.items.slice(0, 3).map((item: any) => {
          let img = item.thumbnail;
          if (!img) {
            const html = item.content || item.description || '';
            const match = html.match(/<img[^>]+src=\"([^\">]+)\"/i);
            img = match ? match[1] : '';
          }
          const rawDesc = item.description || '';
          const stripped = rawDesc.replace(/<[^>]+>/g, '');

          return {
            title: item.title as string,
            link: item.link as string,
            thumbnail: img as string,
            description: stripped,
            pubDate: item.pubDate as string,
          };
        });
        setPosts(latest);
      })
      .catch(console.error);
  }, [username]);

  return (
    <section className="w-full max-w-5xl mt-16">
      <h2 className="text-xl font-sans font-bold mb-4">Latest on Medium</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          >
            {post.thumbnail ? (
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center bg-gray-200">
                <PiMediumLogoBold className="w-12 h-12 text-gray-500" />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-serif text-lg text-gray-900 mb-2 line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                {post.description}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {new Date(post.pubDate).toLocaleDateString(undefined, {
                  month: 'short', day: 'numeric'
                })}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
