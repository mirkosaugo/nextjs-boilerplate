import dynamic from "next/dynamic";

export const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
});

export const Logo = dynamic(() => import("./Logo"), {
  loading: () => <p>Loading...</p>,
});
