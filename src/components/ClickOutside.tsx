import { useCallback, useEffect, useRef } from "react";

interface ICloseClickOutsideProps {
  onClose: (e?: any) => void;
  children: React.ReactElement;
  className?: string;
  onClick?: (e: any) => void;
}

const CloseClickOutside = ({
  onClose,
  children,
  className,
  onClick,
}: ICloseClickOutsideProps) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        ref.current &&
        e.target instanceof HTMLElement &&
        !ref.current.contains(e.target)
      ) {
        onClose(e);
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div onClick={onClick} className={className} ref={ref}>
      {children}
    </div>
  );
};

export default CloseClickOutside;
