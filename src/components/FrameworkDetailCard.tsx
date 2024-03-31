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
  <div className="mb-4 p-4 rounded-lg shadow-lg bg-blue-500 text-orange-500">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
      {frameworkDetails?.[name]?.logo && (
        <img src={frameworkDetails[name].logo} alt={name} className="h-6 w-6" />
      )}
    </div>
    <p className="text-blue-900">
      <strong>Configuration Methods:</strong> {details.configurationMethods}
    </p>
    <p className="text-blue-900">
      <strong>Special Installation Requirements:</strong>{" "}
      {details.specialInstallationRequirements}
    </p>
    <p className="text-blue-900">
      <strong>License:</strong> {details.license}
    </p>
    <p className="text-blue-900">
      <strong>Pricing:</strong> {details.pricing}
    </p>
    <p className="text-blue-900">
      <strong>RTL Support:</strong> {details.RTLsupport}
    </p>
    <p className="text-blue-900">
      <strong>Github:</strong>
      <a href={details.github} className="text-green-500">
        {details.github}
      </a>
    </p>
    <p className="text-blue-900">
      <strong>Website:</strong>
      <a href={details.website} className="text-green-500">
        {details.website}
      </a>
    </p>
    <p className="text-blue-900">
      <strong>Docs:</strong>
      <a href={details.docs} className="text-green-500">
        {details.docs}
      </a>
    </p>
  </div>
);
