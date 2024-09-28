import Image from "next/image";
import BoardImage from "@/assets/JiraBoard.webp";
import TimelineImage from "@/assets/JiraTimeline.webp";
import DoneImage from "@/assets/JiraByeBye.webp";
import SpotifyLogo from "@/assets/spotifyLogo.svg";
import SquareLogo from "@/assets/squareLogo.svg";
import CiscoLogo from "@/assets/ciscoLogo.svg";
import ebayLogo from "@/assets/ebayLogo.svg";
import SliderComponent from "@/components/LandingPage/SliderComponent";
import Link from "next/link";
import ButtonHandler from "@/components/LandingPage/ButtonHandler";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-gradient-to-b from-[#CAE1FF] to-white min-h-screen">
          <div className="pt-32 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                Connect every team, task, and project together with
                <span className="text-[#0000ff]">Taskify</span>.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your workflow and enhance collaboration with our
                powerful project management tool.
              </p>

              <form className="flex flex-col sm:flex-row items-center mb-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full sm:w-auto flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 sm:ml-4 px-6 py-3 bg-[#0000ff] text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </button>
              </form>
              <p className="text-sm text-gray-500 mb-8">
                By signing up, you agree to our{" "}
                <Link
                  href="/termsandConditions"
                  className="text-blue-600 underline"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacyPolicy" className="text-blue-600 underline">
                  Privacy Policy
                </Link>
                .
              </p>

              <p className="text-base text-gray-700">
                Already have an account?{" "}
                <Link
                  href="/signIn"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Log in here.
                </Link>
              </p>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <Image
                src={BoardImage.src}
                alt="Taskify Board"
                width={500}
                height={500}
                priority
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16 px-6 md:px-12 lg:px-24">
            <SliderComponent />
          </div>
        </div>

        {/*Dynamic Content Rendered Here */}
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Discover the features that make Taskify so easy to use
          </h1>
          <ButtonHandler />
        </div>

        <div className="bg-[#E5F0FF] py-16 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <Image
                src={BoardImage.src}
                alt="Taskify Board"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Customize how your team's work flows
              </h1>
              <hr className="border-t-2 border-[#B2D4FF] w-full" />
              <p className="text-lg text-gray-600">
                Set up, clean up, and automate even the most complicated project
                workflows.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 mt-[100px]">
            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Stay on track – even when the track changes
              </h1>
              <hr className="border-t-2 border-[#B2D4FF] w-full" />
              <p className="text-lg text-gray-600">
                Use the timeline view to map out the big picture, communicate
                updates to stakeholders, and ensure your team stays on the same
                page.
              </p>
            </div>

            <div className="lg:w-1/2">
              <Image
                src={TimelineImage.src}
                alt="Taskify Board"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 mt-[100px]">
            <div className="lg:w-1/2">
              <Image
                src={DoneImage.src}
                alt="Taskify Board"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Bye-bye, spreadsheets
              </h1>
              <hr className="border-t-2 border-[#B2D4FF] w-full" />
              <p className="text-lg text-gray-600">
                Keep every detail of a project centralized in real time so
                up-to-date info can flow freely across people, teams, and tools.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600">
          <div class="relative z-10 flex flex-col justify-center items-center text-center py-20 space-y-6">
            <h1 class="text-white text-4xl lg:text-6xl font-bold">
              Move fast, stay aligned, and build better - together
            </h1>
            <button class="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-yellow-600 transition-all">
              Get it free
            </button>
          </div>
          <div class="bg-gray-50 py-12">
            <h1 class="text-3xl font-semibold text-center text-gray-800 mb-8">
              Trusted by over 1,000,000 Customers Worldwide
            </h1>

            <div class="flex flex-wrap justify-center items-center space-x-6 md:space-x-10 lg:space-x-16">
              <div class="flex justify-center items-center w-24 h-24">
                <Image
                  src={SpotifyLogo.src}
                  alt="Spotify Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div class="flex justify-center items-center w-24 h-24">
                <Image
                  src={SquareLogo.src}
                  alt="Square Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div class="flex justify-center items-center w-24 h-24">
                <Image
                  src={CiscoLogo.src}
                  alt="Cisco Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div class="flex justify-center items-center w-24 h-24">
                <Image
                  src={ebayLogo.src}
                  alt="Ebay Logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-gray-900 text-white py-10">
        <div class="container mx-auto px-6 md:px-12 lg:px-24">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div class="md:w-1/3 text-center md:text-left">
              <h1 class="text-3xl font-bold">Taskify</h1>
              <p class="text-gray-400 mt-2">
                Empower your team to collaborate and stay organized with ease.
              </p>
            </div>
            <div class="flex justify-center md:w-1/3 space-x-8">
              <a href="/features" class="hover:underline">
                Features
              </a>
              <a href="/pricing" class="hover:underline">
                Pricing
              </a>
              <a href="/about" class="hover:underline">
                About Us
              </a>
              <a href="/contact" class="hover:underline">
                Contact
              </a>
            </div>

            <div class="md:w-1/3 flex justify-center md:justify-end space-x-6">
              <a href="#" class="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.723-.951.566-2.005.974-3.127 1.195-.896-.959-2.173-1.557-3.591-1.557-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.13 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.725-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.229-.617v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.848.171-1.296.171-.316 0-.623-.03-.922-.086.631 1.953 2.445 3.377 4.6 3.416-1.68 1.316-3.809 2.101-6.115 2.101-.398 0-.79-.023-1.175-.069 2.188 1.401 4.786 2.217 7.584 2.217 9.101 0 14.077-7.544 14.077-14.08 0-.215-.004-.43-.014-.643.967-.697 1.8-1.56 2.462-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" class="hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .732.591 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.765v2.308h3.587l-.467 3.622h-3.12v9.293h6.112c.732 0 1.325-.591 1.325-1.324v-21.35c0-.734-.593-1.325-1.326-1.325z" />
                </svg>
              </a>
              <a href="#" class="hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.976.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.976 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.012-4.947.071-1.546.07-2.916.346-4.027 1.457-1.112 1.112-1.387 2.482-1.457 4.027-.059 1.28-.071 1.69-.071 4.947s.012 3.667.071 4.947c.07 1.546.346 2.916 1.457 4.027 1.112 1.112 2.482 1.387 4.027 1.457 1.28.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.546-.07 2.916-.346 4.027-1.457 1.112-1.112 1.387-2.482 1.457-4.027.059-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.07-1.546-.346-2.916-1.457-4.027-1.112-1.112-2.482-1.387-4.027-1.457-1.28-.059-1.69-.071-4.947-.071zm0 5.838a6.161 6.161 0 1 0 0 12.322 6.161 6.161 0 0 0 0-12.322zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-10 text-center text-gray-500">
            <p>&copy; 2024 Taskify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
