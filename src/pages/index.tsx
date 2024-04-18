import Head from "next/head";
import { useEffect } from "react";
import { FrameworkDetailCard } from "whichui/components/FrameworkDetailCard";
import { GitHubStatsComponent } from "whichui/components/GithubStats";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "whichui/components/Table";
import {
  UiComponents,
  UiComponentsDescription,
  UiFrameworks,
  frameworkDetails,
  supportedComponents,
} from "../lib/data";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { cn } from "whichui/lib/utils";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

export default function Home() {
  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
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
        <meta
          name="twitter:card"
          content="https://whichui.com/screenshot.png"
        />
        <meta
          name="twitter:title"
          content="Which UI Framework Should You Use?"
        />
        <meta
          name="twitter:description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta
          name="twitter:image"
          content="https://whichui.com/screenshot.png"
        />
      </Head>
      <main className="min-h-screen bg-gray-200 p-4 text-blue-900 md:p-8 md:py-4">
        <section className="mb-12 bg-gray-200 py-12 text-center">
          <h1 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
            Which UI Framework Should You Use For React?
          </h1>
          <p className="text-md md:text-md mx-auto mb-12 text-blue-900">
            Selecting the right UI framework can be a daunting task. This
            comparison chart will help you make an informed decision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
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
        <p className="mb-4 text-lg font-semibold text-blue-900">
          Component Support Comparison
        </p>
        <div className="max-h-[80vh] overflow-x-auto">
          <Table className="w-full">
            <TableHead className="uppercase tracking-wider">
              <TableRow>
                <TableHeader sticky stickyToLeft stickyToTop>
                  Component
                </TableHeader>
                {UiFrameworks.map((framework) => {
                  const supportedComponentsCount = `${
                    Object.keys(supportedComponents[framework]).length
                  }/${Object.keys(UiComponents).length}`;
                  return (
                    <TableHeader key={framework} sticky stickyToTop>
                      {frameworkDetails?.[framework]?.logo && (
                        <img
                          src={frameworkDetails[framework].logo}
                          alt={framework}
                          className="mr-2 inline-block h-6 w-6"
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
                <TableRow key={component} className="group">
                  <TableHeader
                    sticky
                    stickyToLeft
                    className="bg-white text-sm font-medium group-hover:bg-gray-300"
                  >
                    {component}
                    {UiComponentsDescription[component] && (
                      <div className="max-w-64 text-wrap text-xs font-medium tracking-normal text-gray-500">
                        {UiComponentsDescription[component]}
                      </div>
                    )}
                  </TableHeader>
                  {UiFrameworks.map((framework) => {
                    const supportsComponent =
                      supportedComponents[framework]?.[component];
                    return (
                      <TableCell
                        key={framework}
                        className={cn(
                          "text-center",
                          supportsComponent
                            ? "bg-green-500/50"
                            : "bg-orange-500/50",
                        )}
                      >
                        <span>
                          {supportsComponent ? (
                            <i className="fas fa-check"></i>
                          ) : (
                            <i className="fas fa-times"></i>
                          )}
                        </span>
                      </TableCell>
                    );
                  })}
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
        <p className="mb-4 text-lg font-semibold text-blue-900">
          Detailed Framework Information
        </p>
        <div className="hidden max-h-[80vh] overflow-x-auto md:block">
          <Table className="w-full">
            <TableHead>
              <TableRow>
                {[
                  "Framework",
                  "Configuration Methods",
                  "Special Installation Requirements",
                  "License",
                  "Pricing",
                  "RTL Support",
                  "Github",
                  "Website",
                  "Docs",
                ].map((header, index) => (
                  <TableHeader
                    key={header}
                    sticky
                    stickyToLeft={index == 0}
                    stickyToTop
                  >
                    {header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(frameworkDetails).map(([name, details]) => (
                <TableRow key={name}>
                  <TableHeader sticky stickyToLeft>
                    <div className="flex items-center">
                      <img
                        src={details.logo}
                        alt={name}
                        className="mr-2 h-6 w-6"
                      />
                      {name}
                    </div>
                  </TableHeader>
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
