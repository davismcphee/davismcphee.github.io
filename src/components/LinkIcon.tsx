import React from "react";

const LinkIcon = ({
  icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) => {
  const Icon = icon;

  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex items-center text-blue-500 hover:underline focus:underline"
    >
      <Icon className="fill-blue-500" size={18} />

      <span className="ml-1">{label}</span>
    </a>
  );
};

export default LinkIcon;
