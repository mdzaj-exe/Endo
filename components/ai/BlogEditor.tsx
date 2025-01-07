import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface BlogEditorProps {
  onClose: () => void;
  onSave: () => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error('Not authenticated');

      // Create slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Insert blog post
      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .insert({
          title,
          slug,
          content,
          excerpt,
          author_id: user.id,
          published: true,
        })
        .select()
        .single();

      if (postError) throw postError;

      // Add categories
      if (selectedCategories.length > 0) {
        const { error: categoryError } = await supabase
          .from('blog_post_categories')
          .insert(
            selectedCategories.map((categoryId) => ({
              post_id: post.id,
              category_id: categoryId,
            }))
          );

        if (categoryError) throw categoryError;
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#1a1a2e] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Create New Post</h2>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent h-20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent h-64"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-blue-200 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Publish Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;