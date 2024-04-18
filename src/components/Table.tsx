import { ReactNode, FC } from "react";
import { cn } from "whichui/lib/utils";

interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

type TableHeaderProps = { children: ReactNode; className?: string } & (
  | {
      sticky?: false;
      // stickyToLeft?: false;
      // stickyToTop?: false;
    }
  | { sticky: true; stickyToTop?: boolean; stickyToLeft?: boolean }
);

interface TableBodyProps {
  children: ReactNode;
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export const Table: FC<TableProps> = ({ children, className = "" }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    {children}
  </table>
);

export const TableHead: FC<TableHeadProps> = ({ children, className }) => (
  <thead
    className={cn("bg-white text-xs font-medium text-gray-700", className)}
  >
    {children}
  </thead>
);

export const TableRow: FC<TableRowProps> = ({ children, className }) => (
  <tr className={className}>{children}</tr>
);

export const TableHeader: FC<TableHeaderProps> = (props) => {
  return (
    <th
      className={cn("px-6 py-3 text-left bg-white", props.className, {
        "left-0": props.sticky && props.stickyToLeft,
        "sticky z-[1] bg-white": props.sticky,
        "top-0": props.sticky && props.stickyToTop,
        "z-[2]": props.sticky && props.stickyToTop && props.stickyToLeft,
      })}
    >
      {props.children}
    </th>
  );
};

export const TableBody: FC<TableBodyProps> = ({ children }) => (
  <tbody className="divide-y divide-gray-200 bg-white [&>tr:hover]:bg-gray-300 [&>tr:hover]:shadow-md [&>tr]:transition-colors [&>tr]:duration-200 [&>tr]:ease-in-out">
    {children}
  </tbody>
);

export const TableCell: FC<TableCellProps> = ({ children, className }) => (
  <td
    className={cn(
      "relative px-6 py-4 text-sm font-medium text-gray-900",
      className,
    )}
  >
    {children}
  </td>
);
