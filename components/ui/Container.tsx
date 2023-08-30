interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="tw-mx-auto tw-max-w-[1250px] tw-px-7 md:tw-px-12">
      {children}
    </div>
  );
};
