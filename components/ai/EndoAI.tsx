import React, { useState, useEffect } from 'react';
import { Bot, PenSquare, Tags, Clock, User } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import BlogEditor from './BlogEditor';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
  };
  created_at: string;
  categories: string[];
}

const EndoAI = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          id,
          title,
          excerpt,
          created_at,
          author:author_id(name),
          categories:blog_post_categories(
            category:blog_categories(name)
          )
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          EndoAI Blog
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Explore the latest updates, tutorials, and insights about artificial intelligence in the creative space.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button className="glass-card px-4 py-2 text-blue-200 hover:text-purple-400 transition-colors">
            All Posts
          </button>
          <button className="glass-card px-4 py-2 text-blue-200 hover:text-purple-400 transition-colors">
            Tutorials
          </button>
          <button className="glass-card px-4 py-2 text-blue-200 hover:text-purple-400 transition-colors">
            Updates
          </button>
        </div>
        <button 
          onClick={() => setShowEditor(true)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <PenSquare className="w-4 h-4" />
          New Post
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto"></div>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="glass-card p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all">
              <h2 className="text-2xl font-semibold text-white mb-3">
                {post.title}
              </h2>
              <p className="text-blue-200 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-blue-200">
                    <User className="w-4 h-4" />
                    <span>{post.author?.name || 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Clock className="w-4 h-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Tags className="w-4 h-4" />
                    <span>{post.categories?.map(c => c.category.name).join(', ')}</span>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {showEditor && (
        <BlogEditor
          onClose={() => setShowEditor(false)}
          onSave={fetchPosts}
        />
      )}
    </div>
  );
};

export default EndoAI;