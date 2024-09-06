"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useToast } from "@/components/ui/use-toast";
import { getUserByUsername } from "@/utils/queries";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const UserProfile = (params: any) => {
  const [formData, setFormData] = useState<any>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    home_address: "",
    date_of_birth: "",
    education: "",
    work_history: "",
    phone_number: "",
    job_title: "",
    x: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    linkedin: "",
    info: "",
    imageUrl: "",
    skills: ["UI/UX", "DevOps", "FrontEnd Dev"],
  });
  const { toast } = useToast();
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };
    fetchCountryCode();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        let userInfo = (await getUserByUsername(params.param)) as any;
        setFormData({
          ...formData,
          first_name: userInfo.basicInfo.firstName,
          last_name: userInfo.basicInfo.lastName,
          username: params.param,
          email: userInfo.basicInfo.email,
          home_address: userInfo.basicInfo.homeAddress,
          date_of_birth: userInfo.basicInfo.dateOfBirth,
          education: userInfo.professionalInfo.education,
          work_history: userInfo.professionalInfo.workHistory,
          phone_number: userInfo.basicInfo.phoneNumber,
          job_title: userInfo.professionalInfo.jobTitle,
          x: userInfo.socialLinks.x,
          instagram: userInfo.socialLinks.instagram,
          tiktok: userInfo.socialLinks.tiktok,
          youtube: userInfo.socialLinks.youtube,
          linkedin: userInfo.socialLinks.linkedin,
          info: userInfo.professionalInfo.info,
          skills: userInfo.professionalInfo.skills,
          imageUrl: userInfo.professionalInfo.imageURL,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "User Doesn't exist",
        });
      }
    };
    getUserInfo();
  }, []);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex flex-col w-full items-center">
      <Toaster />
      {/* Main Profile Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 bg-gray-100 shadow-lg rounded-lg p-5">
          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 object-cover rounded-full ring-4 ring-gray-300"
              src={formData.imageUrl || "/images/avatar.jpeg"}
              alt="Profile Avatar"
            />
            <p className="font-bold text-xl text-gray-700 mt-4">
              @{`${formData.username}` || `UserNotFound`}
            </p>
            <p className="text-gray-500">{formData.info || "User Bio"}</p>
          </div>

          {/* Basic Info */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <IconBriefcase className="text-gray-500" />
              <span>{formData.job_title || "Job Title"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconMapPin className="text-gray-500" />
              <span>{countryCode || "Country"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconMail className="text-gray-500" />
              <span>{formData.email || "email@domain.com"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconPhone className="text-gray-500" />
              <span>{formData.phone_number || "+00 123 456 789"}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="font-semibold text-gray-700">Social Links</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {formData.x && (
                <Link href={formData.x}>
                  <IconBrandX className="text-black hover:text-gray-800" />
                </Link>
              )}
              {formData.instagram && (
                <Link href={formData.instagram}>
                  <IconBrandInstagram className="text-[#5b51d8] hover:text-[#3f3ab2]" />
                </Link>
              )}
              {formData.youtube && (
                <Link href={formData.youtube}>
                  <IconBrandYoutube className="text-red-600 hover:text-red-500" />
                </Link>
              )}
              {formData.tiktok && (
                <Link href={formData.tiktok}>
                  <IconBrandTiktok className="text-[#69c9d0] hover:text-[#55a8b3]" />
                </Link>
              )}
              {formData.linkedin && (
                <Link href={formData.linkedin}>
                  <IconBrandLinkedin className="text-[#2867b2] hover:text-[#1d4c8d]" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0 md:ml-8 space-y-6">
          {/* General Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="font-semibold text-lg text-gray-800">General Information</p>
            <p className="mt-2 text-gray-600">
              {formData.info || "We make digital identity easier..."}
            </p>
          </div>

          {/* Education and Work History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="font-semibold text-lg text-gray-800">Education</p>
              <p className="mt-2 text-gray-600">
                {formData.education || "No education details provided"}
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="font-semibold text-lg text-gray-800">Work History</p>
              <p className="mt-2 text-gray-600">
                {formData.work_history || "No work history provided"}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="font-semibold text-lg text-gray-800">Skills</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {formData.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
