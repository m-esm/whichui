import { useEffect, useState, ReactNode, FC } from "react";
import {
  UiComponents,
  UiFrameworks,
  antDesignSupportedComponents,
  chakraUiSupportedComponents,
  frameworkDetails,
  materialUiSupportedComponents,
  nextUiSupportedComponents,
  radixUiSupportedComponents,
  shadcnUiSupportedComponents,
} from "../lib/data";
import Head from "next/head";

interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableHeadProps {
  isSticky: boolean;
  children: ReactNode;
}

interface TableRowProps {
  children: ReactNode;
}

interface TableHeaderProps {
  children: ReactNode;
}

interface TableBodyProps {
  children: ReactNode;
}

interface TableCellProps {
  children: ReactNode;
}

const Table: FC<TableProps> = ({ children, className = "" }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    {children}
  </table>
);

const TableHead: FC<TableHeadProps> = ({ isSticky, children }) => (
  <thead
    className={`${
      isSticky ? "sticky top-0 z-10 bg-white" : ""
    } text-xs font-medium uppercase tracking-wider text-gray-700`}
  >
    {children}
  </thead>
);

const TableRow: FC<TableRowProps> = ({ children }) => <tr>{children}</tr>;

const TableHeader: FC<TableHeaderProps> = ({ children }) => (
  <th className="px-6 py-3 text-left">{children}</th>
);

const TableBody: FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

const TableCell: FC<TableCellProps> = ({ children }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    {children}
  </td>
);

const colorPalette = {
  orange: "#FF6700",
  lightGray: "#EBEBEB",
  gray: "#C0C0C0",
  lightBlue: "#3A6EA5",
  darkBlue: "#004E98",
  green: "#16A173",
};

const FrameworkDetailCard = ({
  name,
  details,
}: {
  name: string;
  details: {
    configurationMethods: string;
    specialInstallationRequirements: string;
    license: string;
    pricing: string;
    RTLsupport: string;
  };
}) => (
  <div
    className="mb-4 p-4 rounded-lg shadow-lg"
    style={{
      backgroundColor: colorPalette.lightBlue,
      color: colorPalette.orange,
    }}
  >
    <h3 className="text-lg font-semibold">{name}</h3>
    <p>
      <strong>Configuration Methods:</strong> {details.configurationMethods}
    </p>
    <p>
      <strong>Special Installation Requirements:</strong>{" "}
      {details.specialInstallationRequirements}
    </p>
    <p>
      <strong>License:</strong> {details.license}
    </p>
    <p>
      <strong>Pricing:</strong> {details.pricing}
    </p>
    <p>
      <strong>RTL Support:</strong> {details.RTLsupport}
    </p>
  </div>
);

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
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
      </Head>
      <main
        className="p-4 md:p-12 min-h-screen"
        style={{
          color: colorPalette.darkBlue,
          backgroundColor: colorPalette.lightGray,
        }}
      >
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHead isSticky={isSticky}>
              <TableRow>
                <TableHeader>Component</TableHeader>
                {UiFrameworks.map((framework) => {
                  const supportedComponents = Object.keys(frameworkDetails[framework]).length;
                  const totalComponents = UiComponents.length;
                  const supportedComponentsCount = `${supportedComponents}/${totalComponents}`;
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
                  <TableCell>{component}</TableCell>
                  {UiFrameworks.map((framework) => (
                    <TableCell key={framework}>
                      {nextUiSupportedComponents[component] &&
                      framework === "NextUI" ? (
                        <i className="fas fa-check text-green-500"></i>
                      ) : radixUiSupportedComponents[component] &&
                        framework === "RadixUI" ? (
                        <i className="fas fa-check text-green-500"></i>
                      ) : shadcnUiSupportedComponents[component] &&
                        framework === "ShadcnUI" ? (
                        <i className="fas fa-check text-green-500"></i>
                      ) : materialUiSupportedComponents[component] &&
                        framework === "MaterialUI" ? (
                        <i className="fas fa-check text-green-500"></i>
                      ) : chakraUiSupportedComponents[component] &&
                        framework === "ChakraUI" ? (
                        <i className="fas fa-check text-green-500"></i>
                      ) : antDesignSupportedComponents[component] &&
                        framework === "AntDesign" ? (
                        <i className="fas fa-check text-green-500"></i>
                      ) : (
                        <i className="fas fa-times text-red-500"></i>
                      )}
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
          <Table className="w-full">
            <TableHead isSticky={isSticky}>
              <TableRow>
                <TableHeader>Framework</TableHeader>
                <TableHeader>Configuration Methods</TableHeader>
                <TableHeader>Special Installation Requirements</TableHeader>
                <TableHeader>License</TableHeader>
                <TableHeader>Pricing</TableHeader>
                <TableHeader>RTL Support</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(frameworkDetails).map(([name, details]) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{details.configurationMethods}</TableCell>
                  <TableCell>
                    {details.specialInstallationRequirements}
                  </TableCell>
                  <TableCell>{details.license}</TableCell>
                  <TableCell>{details.pricing}</TableCell>
                  <TableCell>{details.RTLsupport}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
