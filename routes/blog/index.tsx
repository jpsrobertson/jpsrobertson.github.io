import { Head } from "$fresh/runtime.ts";
import { Header } from "../../components/Header.tsx";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

// This would typically come from your data source
const posts: BlogPost[] = [
  {
    slug: "data-driven-decision-making",
    title: "The Art of Data-Driven Decision Making",
    excerpt: "How to leverage data analytics to make better business decisions",
    date: "2023-12-13",
  },
  {
    slug: "economics-in-product-strategy",
    title: "Economics in Product Strategy",
    excerpt: "Applying economic principles to product development and strategy",
    date: "2023-12-10",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Writings - Josh Robertson</title>
        <meta name="description" content="Thoughts on data science, consulting, product strategy, and economics" />
      </Head>
      <div class="min-h-screen bg-slate-900">
        <Header />
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="space-y-8">
            <section class="text-center">
              <p class="mt-4 text-xl text-slate-300 font-sans font-medium">
                Thoughts on data science, consulting, product strategy, and economics
              </p>
            </section>

            <div class="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} class="bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-700">
                  <a href={`/blog/${post.slug}`} class="block">
                    <h2 class="text-2xl font-semibold text-slate-100 hover:text-slate-200 font-display">
                      {post.title}
                    </h2>
                    <time class="text-sm text-slate-400 mt-2 block font-sans font-normal">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <p class="mt-3 text-slate-300 font-sans font-normal">
                      {post.excerpt}
                    </p>
                    <span class="inline-flex items-center mt-4 text-sm font-medium text-slate-200 hover:text-slate-100 font-sans">
                      Read more →
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 