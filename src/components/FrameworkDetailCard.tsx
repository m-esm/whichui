import { frameworkDetails } from "whichui/lib/data";

export const FrameworkDetailCard = ({
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
    github: string;
    website: string;
    docs: string;
  };
}) => (
  <div className="mb-4 p-4 rounded-lg shadow-lg bg-white">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold ">{name}</h3>
      {frameworkDetails?.[name]?.logo && (
        <img src={frameworkDetails[name].logo} alt={name} className="h-6 w-6" />
      )}
    </div>
    <p className="">
      <strong>Configuration Methods:</strong> {details.configurationMethods}
    </p>
    <p className="">
      <strong>Special Installation Requirements:</strong>{" "}
      {details.specialInstallationRequirements}
    </p>
    <p className="">
      <strong>License:</strong> {details.license}
    </p>
    <p className="">
      <strong>Pricing:</strong> {details.pricing}
    </p>
    <p className="">
      <strong>RTL Support:</strong> {details.RTLsupport}
    </p>
    <p className="">
      <strong>Github:</strong>
      <a href={details.github} className="">
        {details.github}
      </a>
    </p>
    <p className="">
      <strong>Website:</strong>
      <a href={details.website} className="">
        {details.website}
      </a>
    </p>
    <p className="">
      <strong>Docs:</strong>
      <a href={details.docs} className="">
        {details.docs}
      </a>
    </p>
  </div>
);
