type IconsWrapperPropsT = {
  children: React.ReactNode;
  className?: string;
};

export const IconsWrapper = ({ children, className }: IconsWrapperPropsT) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      {children}
    </svg>
  );
};
