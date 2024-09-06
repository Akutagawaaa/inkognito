import React from "react";
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
import Link from "next/link";

interface UserProfileDisplayProps {
  formData: any;
  countryCode: string;
}

const UserProfileDisplay: React.FC<UserProfileDisplayProps> = ({
  formData,
  countryCode,
}) => (
  <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[900px]">
    {/* Laptop screen frame */}
    {/* <div className="h-[14px] w-[120px] bg-gray-800 dark:bg-gray-800 absolute -top-[28px] left-1/2 transform -translate-x-1/2 rounded-t-lg"></div> */}
    <div className="h-[8px] w-[8px] bg-gray-600 dark:bg-gray-600 absolute top-[6px] left-1/2 transform -translate-x-1/2 rounded-full"></div>
    <div className="rounded-[2rem] overflow-hidden w-[872px] h-[572px] bg-white dark:bg-gray-800">
      <div className="flex h-full">
        {/* Left column */}
        <div className="w-1/3 p-6 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-start">
          <img
            className="w-40 h-40 object-cover object-center p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={formData.imageUrl || "/images/avatar.jpeg"}
            alt="Profile avatar"
          />
          <p className="font-medium text-xl text-gray-700 dark:text-gray-200 py-4">
            @{formData.username || "stephen_simon"}
          </p>
        
          <div className="w-full space-y-4">
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-600 px-4 py-2 rounded-lg">
              <IconBriefcase width={20} height={20} />
              <p className="text-sm">{formData.job_title || "Company"}</p>
            </div>
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-600 px-4 py-2 rounded-lg">
              <IconMapPin width={20} height={20} />
              <p className="text-sm">{countryCode}</p>
            </div>
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-600 px-4 py-2 rounded-lg">
              <IconMail width={20} height={20} />
              <p className="text-sm">{formData.email || "stephensimongmail.com"}</p>
            </div>
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-600 px-4 py-2 rounded-lg">
              <IconPhone width={20} height={20} />
              <p className="text-sm">{formData.phone_number || "+91 99929 XXXXX"}</p>
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="w-2/3 p-6 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Skills</h2>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {Array.isArray(formData.skills) && formData.skills.map((skill: string, index: number) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg"
              >
                <p className="text-sm">{skill}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold  text-gray-800 dark:text-gray-200">Bio</h2>
       <div>   <pre className="text-md text-gray-600 dark:text-gray-300 mx-4 mb-6">
            {formData.info || "Hey, I am Stephen Simon! "}
          </pre>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Socials</h2>
          <div className="flex space-x-4">
            {formData.x && (
              <Link href={formData.x}>
                <div className="flex w-12 h-12 cursor-pointer items-center justify-center bg-black rounded-full">
                  <IconBrandX width={24} height={24} color="white" />
                </div>
              </Link>
            )}
            {formData.instagram && (
              <Link href={formData.instagram}>
                <div className="flex w-12 h-12 cursor-pointer items-center justify-center bg-black rounded-full">
                  <IconBrandInstagram width={24} height={24} color="white" />
                </div>
              </Link>
            )}
            {formData.youtube && (
              <Link href={formData.youtube}>
                <div className="flex w-12 h-12 cursor-pointer items-center justify-center bg-black rounded-full">
                  <IconBrandYoutube width={24} height={24} color="white" />
                </div>
              </Link>
            )}
            {formData.tiktok && (
              <Link href={formData.tiktok}>
                <div className="flex w-12 h-12 cursor-pointer items-center justify-center bg-black rounded-full">
                  <IconBrandTiktok width={24} height={24} color="white" />
                </div>
              </Link>
            )}
            {formData.linkedin && (
              <Link href={formData.linkedin}>
                <div className="flex w-12 h-12 cursor-pointer items-center justify-center bg-black rounded-full">
                  <IconBrandLinkedin width={24} height={24} color="white" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserProfileDisplay;