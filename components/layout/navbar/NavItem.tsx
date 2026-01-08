import Link from "next/link";

interface NavItemProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

export function NavItem({ href, active = false, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`min-w-[126px] flex justify-center relative pb-1 text-sm font-medium transition-colors font-semibold ${
        active ? "text-red-600" : "text-neutral-800"
      }`}
    >
      {children}
      {active && (
        <span className="absolute left-0 -bottom-[23px] h-[4px] w-full bg-red-600" />
      )}
    </Link>
  );
}
