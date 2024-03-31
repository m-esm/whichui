import { useEffect, useState, ReactNode, FC } from "react";
import {
  UiComponents,
  UiFrameworks,
  supportedComponents,
  frameworkDetails,
  UiComponentsDescription,
} from "../lib/data";
import Head from "next/head";
import { FrameworkDetailCard } from "whichui/components/FrameworkDetailCard";
import { GitHubStatsComponent } from "whichui/components/GithubStats";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "whichui/components/Table";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Which UI Framework Should You Use For React?</title>
        <meta
          name="description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Which UI Framework Should You Use?"
        />
        <meta
          property="og:description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://whichui.com/favicon.svg" />
        <meta property="og:url" content="https://whichui.com" />
        <meta name="twitter:card" content="https://whichui.com/screenshot.png" />
        <meta
          name="twitter:title"
          content="Which UI Framework Should You Use?"
        />
        <meta
          name="twitter:description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta name="twitter:image" content="https://whichui.com/screenshot.png" />
      </Head>
      <main className="p-4 md:p-8 md:py-4 min-h-screen text-blue-900 bg-gray-200">
        <section className="text-center py-12 mb-12 bg-gray-200">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
            Which UI Framework Should You Use For React?
          </h1>
          <p className="text-md md:text-md mx-auto mb-12 text-blue-900">
            Selecting the right UI framework can be a daunting task. This
            comparison chart will help you make an informed decision.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {UiFrameworks.map((framework) => (
              <div key={framework} className="flex flex-col items-center">
                <img
                  src={frameworkDetails[framework].logo}
                  alt={framework}
                  className="h-20 w-20 object-contain"
                />
                <span className="mt-2 text-sm font-semibold text-blue-900">
                  {framework}

                  <GitHubStatsComponent
                    framework={framework}
                    repoUrl={frameworkDetails[framework].github}
                  />
                </span>
              </div>
            ))}
          </div>
        </section>
        <div className="overflow-x-auto">
          <p className="text-lg font-semibold mb-4 text-blue-900">
            Component Support Comparison
          </p>
          <Table className="w-full">
            <TableHead isSticky={isSticky}>
              <TableRow>
                <TableHeader>Component</TableHeader>
                {UiFrameworks.map((framework) => {
                  const supportedComponentsCount = `${
                    Object.keys(supportedComponents[framework]).length
                  }/${Object.keys(UiComponents).length}`;
                  return (
                    <TableHeader key={framework}>
                      {frameworkDetails?.[framework]?.logo && (
                        <img
                          src={frameworkDetails[framework].logo}
                          alt={framework}
                          className="h-6 w-6 inline-block mr-2"
                        />
                      )}
                      {`${framework} (${supportedComponentsCount})`}
                    </TableHeader>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {UiComponents.map((component) => (
                <TableRow key={component}>
                  <TableCell>
                    {component}
                    {UiComponentsDescription[component] && (
                      <div className="text-xs text-gray-500 max-w-64 text-wrap">
                        {UiComponentsDescription[component]}
                      </div>
                    )}
                  </TableCell>
                  {UiFrameworks.map((framework) => (
                    <TableCell key={framework}>
                      <div
                        className={`w-full h-full absolute top-0 left-0 z-10 ${
                          supportedComponents[framework] &&
                          supportedComponents[framework][component]
                            ? "bg-green-500"
                            : "bg-orange-500"
                        } opacity-50`}
                      ></div>
                      <span className="relative z-20">
                        {supportedComponents[framework] &&
                        supportedComponents[framework][component] ? (
                          <i className="fas fa-check"></i>
                        ) : (
                          <i className="fas fa-times"></i>
                        )}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <hr className="my-8" />
        <div className="block md:hidden">
          {Object.entries(frameworkDetails).map(([name, details]) => (
            <FrameworkDetailCard key={name} name={name} details={details} />
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">
          <p className="text-lg font-semibold mb-4 text-blue-900">
            Detailed Framework Information
          </p>
          <Table className="w-full">
            <TableHead isSticky={isSticky}>
              <TableRow>
                <TableHeader>Framework</TableHeader>
                <TableHeader>Configuration Methods</TableHeader>
                <TableHeader>Special Installation Requirements</TableHeader>
                <TableHeader>License</TableHeader>
                <TableHeader>Pricing</TableHeader>
                <TableHeader>RTL Support</TableHeader>
                <TableHeader>Github</TableHeader>
                <TableHeader>Website</TableHeader>
                <TableHeader>Docs</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(frameworkDetails).map(([name, details]) => (
                <TableRow key={name}>
                  <TableCell>
                    <div className="flex items-center">
                      <img
                        src={details.logo}
                        alt={name}
                        className="h-6 w-6 mr-2"
                      />
                      {name}
                    </div>
                  </TableCell>
                  <TableCell>{details.configurationMethods}</TableCell>
                  <TableCell>
                    {details.specialInstallationRequirements}
                  </TableCell>
                  <TableCell>{details.license}</TableCell>
                  <TableCell>{details.pricing}</TableCell>
                  <TableCell>{details.RTLsupport}</TableCell>
                  <TableCell>
                    <a href={details.github} className="text-green-500">
                      {details.github}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href={details.website} className="text-green-500">
                      {details.website}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href={details.docs} className="text-green-500">
                      {details.docs}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
