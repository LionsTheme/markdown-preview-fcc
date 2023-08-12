import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import classNames from "classnames";
import GetBundleScript from "@/components/GetBundleScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

// Define the Poppins font with specific subsets and weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

// Define metadata for the page
export const metadata: Metadata = {
  title: "FCC Markdown Previewer",
  description:
    "This project is part of the Free Code Camp Front-End Development Libraries Certification. Built with Next.js",
};

/**
 * RootLayout component serves as the main layout for a Next.js project.
 *
 * @description This code represents a component called  RootLayout  that serves as the main layout for a Next.js project. It imports various dependencies such as  Metadata  from "next",  Poppins  font from "next/font/google",  classNames  for conditional CSS classes,  GetBundleScript  component,  Header  component,  Footer  component, and a global CSS file.
 *
 * The  poppins  variable is assigned the Poppins font with specific subsets and weights.
 *
 * The  metadata  object defines the title and description for the page.
 *
 * The  RootLayout  component takes a  children  prop which represents the content to be rendered within the layout.
 *
 * Inside the component, an HTML structure is defined with a  <html>  and  <body>  tag. The  lang  attribute of the  <html>  tag is set to "en" for English language.
 *
 * The  <body>  tag has a  className  that combines the "prose max-w-none bg-white" classes with the  poppins.className  class.
 *
 * The main content is wrapped within a  <main>  tag. It includes a  Header  component, a  <div>  element with an  id  of "content" that contains the  children  prop, and a  Footer  component.
 *
 * Finally, the  GetBundleScript  component is rendered.
 *
 * @module RootLayout
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={classNames("prose max-w-none bg-white", poppins.className)}
      >
        <main className="flex flex-col min-h-screen w-full px-0 prose-p:text-base 2xl:prose-p:text-lg">
          <Header className="z-10" />
          <div
            id="content"
            className={
              "relative flex-1 overflow-auto z-0 pt-8 md:pt-10 lg:pt-12 pb-6 sm:pb-8 md:pb-10"
            }
          >
            {children}
          </div>
          <Footer className="z-10" />
        </main>
        <GetBundleScript />
      </body>
    </html>
  );
}
