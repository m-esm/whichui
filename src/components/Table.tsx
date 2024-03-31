import { ReactNode, FC } from "react";

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

export const Table: FC<TableProps> = ({ children, className = "" }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    {children}
  </table>
);

export const TableHead: FC<TableHeadProps> = ({ isSticky, children }) => (
  <thead
    className={`${
      isSticky ? "sticky top-0 z-10 bg-white" : ""
    } text-xs font-medium uppercase tracking-wider text-gray-700`}
  >
    {children}
  </thead>
);

export const TableRow: FC<TableRowProps> = ({ children }) => (
  <tr className="hover:bg-gray-300 transition-colors duration-200 ease-in-out hover:shadow-md">
    {children}
  </tr>
);

export const TableHeader: FC<TableHeaderProps> = ({ children }) => (
  <th className="px-6 py-3 text-left">{children}</th>
);

export const TableBody: FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

export const TableCell: FC<TableCellProps> = ({ children }) => (
  <td className="px-6 py-4 text-sm font-medium text-gray-900 relative">
    {children}
  </td>
);
