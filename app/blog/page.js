import PostCard from '@/components/PostCard';
import { listPublishedPosts } from '@/lib/store';
import { notFound } from 'next/navigation';
import { BACKEND, SHOW_BLOG } from '@/lib/modules';
import { staticPosts } from '@/lib/content-posts';

export const revalidate = 60;
export const metadata = {
  title: 'Blog',
  description: 'Notes and write-ups.',
};

export default async function BlogIndex() {
  if (!SHOW_BLOG) notFound();
  const posts = BACKEND ? await listPublishedPosts() : staticPosts();
  return (
    <main className="page">
      <div className="w">
        <div className="sh">
          <span className="lab">Blog</span>
          <div>
            <h2>Notes on cloud and endpoint security.</h2>
            <p>Practical write-ups from real projects.</p>
          </div>
        </div>
        {posts.length === 0 ? (
          <p className="empty">No posts yet. Check back soon.</p>
        ) : (
          <div className="g3">{posts.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        )}
      </div>
    </main>
  );
}
