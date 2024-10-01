import React from "react";

const FooterLandingPage = () => {
    return (<>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="md:w-1/3 text-center md:text-left">
                    <h1 className="text-3xl font-bold">Taskify</h1>
                    <p className="text-gray-400 mt-2">
                        Empower your team to collaborate and stay organized with ease.
                    </p>
                </div>
                <div className="flex justify-center md:w-1/3 space-x-8">
                    <a href="/features" className="hover:underline">
                        Features
                    </a>
                    <a href="/pricing" className="hover:underline">
                        Pricing
                    </a>
                    <a href="/about" className="hover:underline">
                        About Us
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end space-x-6">
                    <a href="#" className="hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.723-.951.566-2.005.974-3.127 1.195-.896-.959-2.173-1.557-3.591-1.557-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.13 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.725-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.229-.617v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.848.171-1.296.171-.316 0-.623-.03-.922-.086.631 1.953 2.445 3.377 4.6 3.416-1.68 1.316-3.809 2.101-6.115 2.101-.398 0-.79-.023-1.175-.069 2.188 1.401 4.786 2.217 7.584 2.217 9.101 0 14.077-7.544 14.077-14.08 0-.215-.004-.43-.014-.643.967-.697 1.8-1.56 2.462-2.548l-.047-.02z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-blue-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .732.591 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.765v2.308h3.587l-.467 3.622h-3.12v9.293h6.112c.732 0 1.325-.591 1.325-1.324v-21.35c0-.734-.593-1.325-1.326-1.325z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.976.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.976 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.012-4.947.071-1.546.07-2.916.346-4.027 1.457-1.112 1.112-1.387 2.482-1.457 4.027-.059 1.28-.071 1.69-.071 4.947s.012 3.667.071 4.947c.07 1.546.346 2.916 1.457 4.027 1.112 1.112 2.482 1.387 4.027 1.457 1.28.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.546-.07 2.916-.346 4.027-1.457 1.112-1.112 1.387-2.482 1.457-4.027.059-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.07-1.546-.346-2.916-1.457-4.027-1.112-1.112-2.482-1.387-4.027-1.457-1.28-.059-1.69-.071-4.947-.071zm0 5.838a6.161 6.161 0 1 0 0 12.322 6.161 6.161 0 0 0 0-12.322zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="mt-10 text-center text-gray-500">
                <p>&copy; 2024 Taskify. All rights reserved.</p>
            </div>
        </div>
    </>);
};

export default FooterLandingPage;