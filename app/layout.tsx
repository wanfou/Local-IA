import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local IA | IA privée d'entreprise blip bloup",
  description:
    "Landing page premium pour une solution d'IA locale B2B, avec LLM privé, RAG interne et déploiement maîtrisé."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
