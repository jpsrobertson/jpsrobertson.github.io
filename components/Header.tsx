import { JSX } from "preact";

export function Header(): JSX.Element {
  return (
    <header class="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-gray-900 hover:text-gray-700 font-display">
          Josh Robertson
        </a>
        <nav class="flex space-x-8">
          <a href="/" class="text-gray-600 hover:text-gray-900 font-sans font-medium">About</a>
          <a href="/blog" class="text-gray-600 hover:text-gray-900 font-sans font-medium">Blog</a>
        </nav>
      </div>
    </header>
  );
} 