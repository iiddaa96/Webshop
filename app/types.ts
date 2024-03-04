import { ReactNode } from "react";

export type PageProps = Readonly<{ params: { slug: string } }>;
export type LayoutProps = Readonly<{ children: ReactNode }>;
