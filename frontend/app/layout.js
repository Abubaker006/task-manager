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
        {children}
      </body>
    </html>
  );
}
