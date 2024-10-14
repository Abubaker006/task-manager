"use client";
import React, { useState, useEffect } from "react";
import ProtectedRoute from "../../components/authComponents/ProtectedRoute";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PackageOpen } from "lucide-react";
import { fetchWorkspaces } from "../api/apiServices";
import Cookies from "js-cookie";
import { Modal } from "antd";

const DashboardPage = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  const userId = Cookies.get("userId");
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWorkspaces(userId, token);
      if (response.success) {
        setWorkspaces(response.data.workspaces);
      } else {
        setWorkspaces([]);
      }
    };
    fetchData();
  }, [token, userId]);

  const handleClick = () => {};
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
        <div className="bg-white shadow-xl rounded-lg p-10 max-w-lg w-full text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-[#0000ff]">Taskify</span>
          </h1>
          <p className="text-gray-600 mb-8 text-[12px]">
            Get started by managing your workspaces and projects below.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Existing Workspaces
            </h3>
          </div>
          {Array.isArray(workspaces) && workspaces.length > 0 ? (
            <>
              {workspaces.map((workspace) => (
                <div
                  key={workspace._id}
                  className="border rounded-lg mb-6 p-6 bg-gradient-to-r from-blue-50 to-white shadow-sm flex justify-between items-center"
                >
                  <p className="text-gray-800 text-md font-semibold">
                    {workspace.name}
                  </p>

                  <button className="py-2 px-4 bg-[#0000ff] text-white font-semibold rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center">
                    <Link href={`/dashboard/${workspace._id}`}>
                      <span className="flex items-center">
                        <PackageOpen className="mr-2" />
                        Open
                      </span>
                    </Link>
                  </button>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="text-gray-600 mb-8 text-[12px]">
                No Existing Workspaces..
              </p>
            </>
          )}

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Create a New Workspace
            </h3>
            <div className="border rounded-lg mb-6 p-6 bg-gradient-to-r from-green-50 to-white shadow-sm">
              <button
                onClick={handleClick}
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all transform hover:scale-104 duration-300 ease-in-out"
              >
                Create Workspace
              </button>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-md font-semibold text-gray-600 mb-4">
              Quick Links
            </h3>
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/dashboard/settings">
                <button className="text-blue-500 hover:underline">
                  Settings
                </button>
              </Link>
              <Link href="/dashboard/help">
                <button className="text-blue-500 hover:underline">
                  Help Center
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal>
        
      </Modal>
    </>
  );
};

export default ProtectedRoute(DashboardPage);
