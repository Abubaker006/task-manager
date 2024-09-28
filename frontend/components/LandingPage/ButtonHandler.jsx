"use client";
import React, { useState } from "react";
import BoardsImage from "@/assets/JiraBoard.webp";
import TimelineImage from "@/assets/JiraTimeline.webp";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
const ButtonHandler = () => {
    const [buttonName, setButtonName] = useState("Boards");

    const handleOnClick = (buttonName) => {
        setButtonName(buttonName);
    };


    return (
        <>
            <div className="bg-gray-50 dark:bg-[#1a1a1a] py-12 px-6 min-h-screen">
                {/* Button Group */}
                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        onClick={() => handleOnClick("Boards")}
                        className={`px-6 py-2 rounded-md text-lg font-semibold transition-colors duration-300 ${buttonName === "Boards"
                            ? "bg-[#0000ff] text-white"
                            : " text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        Boards
                    </button>
                    <button
                        onClick={() => handleOnClick("Timeline")}
                        className={`px-6 py-2 rounded-md text-lg font-semibold transition-colors duration-300 ${buttonName === "Timeline"
                            ? "bg-[#0000ff] text-white"
                            : " text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        Timeline
                    </button>
                    <button
                        onClick={() => handleOnClick("Report")}
                        className={`px-6 py-2 rounded-lg text-lg font-semibold transition-colors duration-300 ${buttonName === "Report"
                            ? "bg-[#0000ff] text-white"
                            : " text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        Report
                    </button>
                </div>

                
                <div className="flex flex-col items-center">
                    {buttonName === "Boards" && (
                        <div className="text-center space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                                    Powerful agile boards
                                </h1>
                                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-4 mt-6">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Scrum boards:
                                            </h2>
                                            <p>
                                                Help agile teams break large, complex projects into
                                                manageable pieces of work so focused teams ship faster.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Kanban Boards:
                                            </h2>
                                            <p>
                                                Help teams visualize work in progress and identify
                                                bottlenecks, so they can improve their process and
                                                productivity.
                                            </p>
                                        </div>

                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Choose your own adventure:
                                            </h2>
                                            <p>
                                                Our boards are designed to be flexible and adaptable, so
                                                you can use them to suit your team's needs.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={BoardsImage.src}
                                    width={500}
                                    height={500}
                                    alt="Taskify Boards"
                                    className="rounded-lg shadow-lg"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    {buttonName === "Timeline" && (
                        <div className="text-center space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                                    Timeline
                                </h1>
                                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-4 mt-6">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Keep teams aligned:
                                            </h2>
                                            <p>
                                                Give your team the visibility they need to make fast and informed decisions while staying aligned with the bigger goals.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Get ahead of dependencies:
                                            </h2>
                                            <p>
                                                Visualize dependencies within your team to account for them when making plans.
                                            </p>
                                        </div>

                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Plan with team capacity in mind (Advanced only):
                                            </h2>
                                            <p>
                                                Ensure your teams have bandwidth to complete the work they’ve scoped. See multiple teams' capacity on a sprint-by-sprint basis.
                                            </p>
                                        </div>

                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Choose your own adventure:
                                            </h2>
                                            <p>
                                                Our boards are designed to be flexible and adaptable, so
                                                you can use them to suit your team's needs.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={TimelineImage.src}
                                    width={500}
                                    height={500}
                                    alt="Taskify Boards"
                                    className="rounded-lg shadow-lg"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    {buttonName === "Report" && (
                        <div className="text-center space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                                    Reports and Insigts
                                </h1>
                                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-4 mt-6">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Ready to go Reporting:
                                            </h2>
                                            <p>
                                                Out-of-the-box reports and dashboards in Jira Software offer critical insights within the context of your work to ensure your teams are always up to date and set up for success.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Sprint reporting
                                            </h2>
                                            <p>
                                                Determine where your team is overcommitted to reduce excessive scope creep and better understand completed work in each sprint.
                                            </p>
                                        </div>

                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Burndown chart:
                                            </h2>
                                            <p>
                                                Track work towards sprint goals to manage progress and respond accordingly.
                                            </p>
                                        </div>

                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#333]"><CheckCheck /></span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Release Burndown:
                                            </h2>
                                            <p>
                                                Track and monitor the projected release date for versions and take action if work is falling behind schedule.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={TimelineImage.src}
                                    width={500}
                                    height={500}
                                    alt="Taskify Boards"
                                    className="rounded-lg shadow-lg"
                                    priority
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ButtonHandler;
