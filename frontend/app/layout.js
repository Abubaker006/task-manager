import LandingPageHeader from "@/components/LandingPage/LandingPageHeader";
import "./globals.css";

export const metadata = {
  title: "Task-Manager",
  description: "Under Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <LandingPageHeader/>
        {children}
      </body>
    </html>
  );
}
