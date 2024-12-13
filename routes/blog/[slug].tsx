import { Head } from "$fresh/runtime.ts";
import { Header } from "../../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";
import MarkdownIt from "npm:markdown-it@13.0.2";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

interface Post {
  title: string;
  date: string;
  content: string;
}

interface Posts {
  [key: string]: Post;
}

// This would typically come from your data source
const posts: Posts = {
  "data-driven-decision-making": {
    title: "The Art of Data-Driven Decision Making",
    date: "2023-12-13",
    content: `
# The Art of Data-Driven Decision Making

Data-driven decision making is becoming increasingly crucial in today's business landscape. 
This post explores how organizations can effectively leverage data analytics to make better decisions.

## Why Data-Driven Decision Making Matters

In today's fast-paced business environment, making decisions based on gut feeling is no longer sufficient.
Data-driven decision making allows organizations to:

- Reduce bias in decision making
- Identify patterns and trends
- Measure and track outcomes
- Make more accurate predictions

## Key Components of Data-Driven Decision Making

1. Data Collection
2. Data Analysis
3. Insight Generation
4. Action Planning

The key is to not just collect data, but to turn it into actionable insights.
    `,
  },
  "economics-in-product-strategy": {
    title: "Economics in Product Strategy",
    date: "2023-12-10",
    content: `
# Economics in Product Strategy

Economic principles play a crucial role in product strategy and development.
This post explores how understanding economics can lead to better product decisions.

## Economic Principles in Product Development

Several key economic principles influence product strategy:

- Supply and demand dynamics
- Price elasticity
- Market equilibrium
- Opportunity costs

## Applying Economic Thinking

Understanding these principles helps in:

1. Pricing strategies
2. Feature prioritization
3. Market positioning
4. Resource allocation

The goal is to create products that not only solve problems but also make economic sense.
    `,
  },
};

export default function BlogPost(props: PageProps) {
  const post = posts[props.params.slug];
  
  if (!post) {
    return (
      <>
        <Header />
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 class="text-2xl font-bold text-slate-100">Post not found</h1>
        </main>
      </>
    );
  }

  const renderedContent = md.render(post.content);

  return (
    <>
      <Head>
        <title>{post.title} - Josh Robertson</title>
        <style>{`
          .markdown-body {
            color: rgb(226 232 240);
            font-family: Sono, monospace;
            font-size: 16px;
            line-height: 1.6;
          }
          .markdown-body h1 { font-size: 2em; margin: 0.67em 0; color: rgb(241 245 249); font-family: "Noto Serif", serif; font-weight: 200; }
          .markdown-body h2 { font-size: 1.5em; margin: 0.83em 0; color: rgb(241 245 249); font-family: "Noto Serif", serif; font-weight: 200; }
          .markdown-body h3 { font-size: 1.25em; margin: 1em 0; color: rgb(241 245 249); font-family: "Noto Serif", serif; font-weight: 200; }
          .markdown-body ul, .markdown-body ol { padding-left: 2em; margin: 1em 0; color: rgb(203 213 225); }
          .markdown-body li { margin: 0.25em 0; }
          .markdown-body p { margin: 1em 0; color: rgb(203 213 225); }
          .markdown-body a { color: rgb(226 232 240); text-decoration: none; }
          .markdown-body a:hover { color: rgb(241 245 249); text-decoration: underline; }
        `}</style>
      </Head>
      <div class="min-h-screen bg-slate-900">
        <Header />
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article class="prose prose-lg mx-auto">
            <header class="text-center mb-8">
              <h1 class="text-4xl font-light text-slate-100 font-display">{post.title}</h1>
              <time class="text-slate-400 mt-2 block font-sans">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </header>
            <div class="mt-8 bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700 markdown-body" 
                 dangerouslySetInnerHTML={{ __html: renderedContent }} />
          </article>
        </main>
      </div>
    </>
  );
} 