interface IMaterialIconProps extends React.HTMLProps<HTMLSpanElement> {
  icon: string;
  outline?: boolean;
}

const MaterialIcon = ({
  icon,
  outline = false,
  className,
  ...rest
}: IMaterialIconProps) => {
  const iconClass =
    `${className}` + (outline ? " material-icons-outlined" : " material-icons");
  return (
    <span {...rest} className={iconClass}>
      {icon}
    </span>
  );
};

export default MaterialIcon;
