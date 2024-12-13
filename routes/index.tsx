import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Robertson - Data, Consulting & Product Expert</title>
        <meta name="description" content="Personal website of Josh Robertson - Expert in Data, Consulting, Product, and Economics" />
      </Head>
      <div class="min-h-screen bg-gray-50">
        <Header />
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="space-y-12">
            <section class="text-center">
              <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                Hi, I'm Josh Robertson
              </h1>
              <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Data scientist, consultant, and product strategist with a strong foundation in economics.
              </p>
            </section>

            <section class="bg-white rounded-xl shadow-sm p-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">About Me</h2>
              <div class="prose prose-lg max-w-none text-gray-600">
                <p>
                  I specialize in bridging the gap between data science, business strategy, and product development. 
                  With experience across multiple industries, I help organizations make data-driven decisions 
                  that drive real business value.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
                    <ul class="list-disc list-inside space-y-2">
                      <li>Data Analysis & Strategy</li>
                      <li>Business Consulting</li>
                      <li>Product Management</li>
                      <li>Economic Analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Focus Areas</h3>
                    <ul class="list-disc list-inside space-y-2">
                      <li>Strategic Decision Making</li>
                      <li>Data-Driven Solutions</li>
                      <li>Product Innovation</li>
                      <li>Market Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
