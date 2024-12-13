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
        <title>Blog - Josh Robertson</title>
        <meta name="description" content="Thoughts on data science, consulting, product strategy, and economics" />
      </Head>
      <div class="min-h-screen bg-gray-50">
        <Header />
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="space-y-8">
            <section class="text-center">
              <h1 class="text-4xl font-bold text-gray-900 font-display">Blog</h1>
              <p class="mt-4 text-xl text-gray-600 font-sans font-medium">
                Thoughts on data science, consulting, product strategy, and economics
              </p>
            </section>

            <div class="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <a href={`/blog/${post.slug}`} class="block">
                    <h2 class="text-2xl font-semibold text-gray-900 hover:text-gray-700 font-display">
                      {post.title}
                    </h2>
                    <time class="text-sm text-gray-500 mt-2 block font-sans font-normal">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <p class="mt-3 text-gray-600 font-sans font-normal">
                      {post.excerpt}
                    </p>
                    <span class="inline-flex items-center mt-4 text-sm font-medium text-blue-600 hover:text-blue-500 font-sans">
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