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

import LandingPageForm from "./LandingPageForm";

const MainBodyLandingPage = () => {

    return (
        <>
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
                        <div className="flex flex-col sm:flex-row items-center mb-4">
                        <Link href="/signup">
                            <button
                                type="submit"
                                className={`mt-4 sm:mt-0 sm:ml-4 px-6 py-3 bg-[#0000ff] text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300`}
                            >

                                Get Started

                            </button>
                        </Link>
                        </div>
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
                <div className="relative z-10 flex flex-col justify-center items-center text-center py-20 space-y-6">
                    <h1 className="text-white text-4xl lg:text-6xl font-bold">
                        Move fast, stay aligned, and build better - together
                    </h1>
                    <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-yellow-600 transition-all">
                        Get it free
                    </button>
                </div>
                <div className="bg-gray-50 py-12">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                        Trusted by over 1,000,000 Customers Worldwide
                    </h1>

                    <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-10 lg:space-x-16">
                        <div className="flex justify-center items-center w-24 h-24">
                            <Image
                                src={SpotifyLogo.src}
                                alt="Spotify Logo"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="flex justify-center items-center w-24 h-24">
                            <Image
                                src={SquareLogo.src}
                                alt="Square Logo"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="flex justify-center items-center w-24 h-24">
                            <Image
                                src={CiscoLogo.src}
                                alt="Cisco Logo"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="flex justify-center items-center w-24 h-24">
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
        </>
    );
};

export default MainBodyLandingPage;