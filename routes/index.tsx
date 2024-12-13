import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Robertson - Data, Consulting & Product Expert</title>
        <meta name="description" content="Personal website of Josh Robertson - Expert in Data, Consulting, Product, and Economics" />
      </Head>
      <div class="min-h-screen bg-slate-900">
        <Header />
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="space-y-12">
            <section class="text-center">
              <h1 class="text-4xl font-bold text-slate-100 sm:text-5xl font-display">
I'm Josh              </h1>
              <p class="mt-4 text-xl text-slate-300 max-w-2xl mx-auto font-sans font-medium">
                Data scientist, consultant, and product strategist with a strong foundation in economics.
              </p>
            </section>

            <section class="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-semibold text-slate-100 mb-6 font-display">About Me</h2>
              <div class="prose prose-lg max-w-none text-slate-300 font-sans">
                <p class="font-normal">
                  I specialize in bridging the gap between data science, business strategy, and product development. 
                  With experience across multiple industries, I help organizations make data-driven decisions 
                  that drive real business value.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 class="text-xl font-semibold text-slate-100 mb-3 font-display">Expertise</h3>
                    <ul class="list-disc list-inside space-y-2 font-normal text-slate-300">
                      <li>Data Analysis & Strategy</li>
                      <li>Business Consulting</li>
                      <li>Product Management</li>
                      <li>Economic Analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-slate-100 mb-3 font-display">Focus Areas</h3>
                    <ul class="list-disc list-inside space-y-2 font-normal text-slate-300">
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
