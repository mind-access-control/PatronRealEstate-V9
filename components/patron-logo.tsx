import Image from "next/image";
import Link from "next/link";

interface PatronLogoProps {
  size?: "small" | "medium" | "large";
  showLink?: boolean;
  className?: string;
}

export function PatronLogo({
  size = "medium",
  showLink = true,
  className = "",
}: PatronLogoProps) {
  const sizeClasses = {
    small: "h-6 w-auto",
    medium: "h-10 w-auto",
    large: "h-16 w-auto",
  };

  const logoSrc = {
    small: "/patron-logo-simple.svg",
    medium: "/patron-logo-simple.svg",
    large: "/patron-logo-large.svg",
  };

  const logoWidth = {
    small: 80,
    medium: 200,
    large: 700,
  };

  const logoHeight = {
    small: 24,
    medium: 60,
    large: 200,
  };

  const LogoImage = () => (
    <Image
      src={logoSrc[size]}
      alt="Patrón Real Estate"
      width={logoWidth[size]}
      height={logoHeight[size]}
      className={`${sizeClasses[size]} ${className}`}
    />
  );

  if (showLink) {
    return (
      <Link href="/" className="flex items-center">
        <LogoImage />
      </Link>
    );
  }

  return <LogoImage />;
}
