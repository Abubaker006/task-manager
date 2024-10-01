import MainBodyLandingPage from "@/components/LandingPage/MainBodyLandingPage";
import FooterLandingPage from "@/components/LandingPage/FooterLandingPage";
import LandingPageHeader from "@/components/LandingPage/LandingPageHeader";

export default function Home() {
  return (
    <>
      <header>
        <LandingPageHeader />
      </header>
      <main>
        <MainBodyLandingPage />
      </main>
      <footer className="bg-gray-900 text-white py-10">
        <FooterLandingPage />
      </footer>
    </>
  );
}
