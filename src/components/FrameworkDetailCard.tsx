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
  <div className="mb-4 p-4 rounded-lg shadow-lg bg-white leading-normal">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
      {frameworkDetails?.[name]?.logo && (
        <img src={frameworkDetails[name].logo} alt={name} className="h-8 w-8" />
      )}
    </div>
    <p className="text-sm text-gray-600">
      <i className="fas fa-cogs fa-fw"></i> <strong>Configuration Methods:</strong> 
      <br />
      {details.configurationMethods}
    </p>
    <p className="text-sm text-gray-600">
      <i className="fas fa-tools fa-fw"></i> <strong>Special Installation Requirements:</strong>{" "}
      {details.specialInstallationRequirements}
    </p>
    <p className="text-sm text-gray-600">
      <i className="fas fa-file-alt fa-fw"></i> <strong>License:</strong> {details.license}
    </p>
    <p className="text-sm text-gray-600">
      <i className="fas fa-tag fa-fw"></i> <strong>Pricing:</strong> {details.pricing}
    </p>
    <p className="text-sm text-gray-600">
      <i className="fas fa-globe fa-fw"></i> <strong>RTL Support:</strong> {details.RTLsupport}
    </p>
    <p className="text-sm text-gray-600">
      <i className="fab fa-github fa-fw"></i> <strong>Github:</strong>
      <a href={details.github} className="text-blue-500 hover:underline">
        {details.github}
      </a>
    </p>
    <p className="text-sm text-gray-600">
      <i className="fas fa-link fa-fw"></i> <strong>Website:</strong>
      <a href={details.website} className="text-blue-500 hover:underline">
        {details.website}
      </a>
    </p>
    <p className="text-sm text-gray-600">
      <i className="fas fa-book fa-fw"></i> <strong>Docs:</strong>
      <a href={details.docs} className="text-blue-500 hover:underline">
        {details.docs}
      </a>
    </p>
  </div>
);
