type HeaderProps = {
  greeting: string;
  subtitle?: string;
  breadcrumbs?: React.ReactNode;
};

const Header = ({ greeting, subtitle, breadcrumbs }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 --font-roboto">
        {greeting}
      </span>
      {breadcrumbs ? (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {breadcrumbs}
        </div>
      ) : (
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default Header;
