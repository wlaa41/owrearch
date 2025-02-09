import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";

export const metadata: Metadata = {
  title: 'OW London: Electrician & Home Automation Engineer',
  description: `Discover more about OW London, a trusted provider of electrical and smart home services in London. Read our latest updates and insights.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function BlogPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      
      {/* <div>
        <header className="">
          <div className=" mx-auto">
            <h1 className="text-3xl font-bold">OW London Blog</h1>
          </div>
        </header>
        <main className=" mx-auto flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-3/4 "> */}
            {children}
          {/* </div>
          <aside className="w-full md:w-1/4 p-4 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-xl font-bold">Categories</h2> */}
            {/* Add categories or other sidebar content here */}
          {/* </aside>
        </main>
      </div> */}

      <JoinOurTeam/>

      <Footer />
    </>
  );
}
