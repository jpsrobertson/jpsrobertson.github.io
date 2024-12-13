import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Robertson - Data, Consulting & Product Expert</title>
        <meta name="description" content="Personal website of Josh Robertson - Expert in Data, Consulting, Product, and Economics" />
      </Head>
      <div class="min-h-screen bg-slate-900 flex flex-col">
        <Header />
        <main class="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-8">
          <div class="space-y-12">
            <section class="text-center">
              <h1 class="font-bold text-slate-100 sm:text-4xl font-display">
                I'm Josh
              </h1>
              <p class="mt-4 text-xl text-slate-300 max-w-2xl mx-auto font-sans">
                Co-Founder of {" "}
                <a href="https://usecolumns.com" class="text-slate-300 hover:text-slate-100">
                  <img src="/icon3.svg" alt="Columns icon" class="w-4 h-4 inline-block ml-1 mb-[4px]" /> Columns
                </a>. <p>
                  We're building an app for simple data analysis.</p>Formerly Consultant @ Ashurst, Data Scientist, Economics Grad Student.
              </p>
            </section>

            <section class="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-semibold text-slate-100 mb-6 font-display">About Me</h2>
              <div class="prose prose-lg max-w-none text-slate-300 font-sans space-y-6">
                <p class="font-normal">
                  G'day! I'm a Melbourne native with a passion for data, economics, and building solutions that matter. 
                  My journey started with a Commerce degree from the University of Melbourne, which led me into financial 
                  services where I spent four years as a superannuation consultant.
                </p>
                <p class="font-normal">
                  After cutting my teeth in super, I moved to Ashurst where I took on a more technical data-focused role. 
                  This experience opened my eyes to some profound challenges organisations face with data empowerment, 
                  which ultimately inspired me to co-found Columns in March 2024.
                </p>
                <p class="font-normal">
                  I'm also a whisker away from completing my Masters in Applied Economics and Econometrics at Monash - 
                  just one subject to go! Though it's currently on hold while I pour my energy into the startup. My thesis 
                  explored how the legal and regulatory implementation of superannuation impacts household wealth and its distribution.
                </p>
                <p class="font-normal">
                  My academic interests centre around monetary policy, development economics, and the retirement income 
                  sector - particularly superannuation. I'm fascinated by how these systems shape our society and economy.
                </p>
                <p class="font-normal">
                  When I'm not knee-deep in data or economics, you'll find me cheering on Arsenal (through thick and thin!), 
                  diving into films, or exploring music and various other media. I might even write about these passions 
                  from time to time.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 class="text-xl font-semibold text-slate-100 mb-3 font-display">Background</h3>
                    <ul class="list-disc list-inside space-y-2 font-normal text-slate-300">
                      <li>Commerce Graduate (UniMelb)</li>
                      <li>Superannuation Consultant</li>
                      <li>Data Scientist @ Ashurst</li>
                      <li>Economics Postgrad (Monash)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-slate-100 mb-3 font-display">Interests</h3>
                    <ul class="list-disc list-inside space-y-2 font-normal text-slate-300">
                      <li>Monetary Policy</li>
                      <li>Development Economics</li>
                      <li>Retirement Income Systems</li>
                      <li>Data & Technology</li>
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
