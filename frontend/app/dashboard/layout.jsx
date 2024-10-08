import AuthProvider from '@/components/authComponents/AuthProvider';

export const metadata = {
    title: "Taskify-Dashboard",
    description: "Under Development",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
