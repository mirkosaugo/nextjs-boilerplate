import dynamic from "next/dynamic";

export const Header = dynamic(() => import("@/components/shared/Header"), {
  loading: () => <p>Loading...</p>,
});

export const Logo = dynamic(() => import("@/components/shared/Logo"), {
  loading: () => <p>Loading...</p>,
});
