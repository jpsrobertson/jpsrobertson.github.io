import { JSX } from "preact";

export function Header(): JSX.Element {
  return (
    <header class="w-full py-6 px-4 sm:px-6 lg:px-8 bg-slate-800 border-b border-slate-700">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <a href="/" class=" text-slate-300 hover:text-slate-200 ">
          Josh Robertson
        </a>
        <nav class="flex space-x-8">
          <a href="/blog" class="text-slate-300 hover:text-slate-100 font-sans text-weight-100">Writings</a>
        </nav>
      </div>
    </header>
  );
} 