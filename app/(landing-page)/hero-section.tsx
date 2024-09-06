'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { IconBriefcase, IconIdBadge2, IconLockSquareRounded, IconShare } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const tabs = [
  {
    icon: <IconIdBadge2 className="w-6 h-6 text-emerald-600" />,
    name: 'Create DID',
    description: 'Get your DID on the blockchain.',
    color: 'bg-emerald-100',
    textColor: 'text-emerald-600',
    image: '/images/crete Did.png',
  },
  {
    icon: <IconShare className="w-6 h-6 text-indigo-600" />,
    name: 'Share DID',
    description: 'Create once, share and use everywhere',
    color: 'bg-indigo-100',
    textColor: 'text-indigo-600',
    image: '/images/share.png',
  },
  {
    icon: <IconLockSquareRounded className="w-6 h-6 text-rose-600" />,
    name: 'Privacy',
    description: 'Control who sees your information',
    color: 'bg-rose-100',
    textColor: 'text-rose-600',
    image: '/images/privacy1.jpeg',
  },
  {
    icon: <IconBriefcase className="w-6 h-6 text-amber-600" />,
    name: 'Find Jobs',
    description: 'Discover developer opportunities.',
    color: 'bg-amber-100',
    textColor: 'text-amber-600',
    image: '/images/find job.png',
  },
]

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-josefin sans text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Digital Identity,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Reinvented
              </span>
            </h1>
            <p className="font-sans text-xl md:text-2xl mb-8 text-gray-600">
              Create Once, Identify Everywhere with{' '}
              <span className="font-medium  text-purple-600">inKognito</span>
            </p>
            <Link href={"/onboard"}>
              <Button size="lg" className="text-lg rounded-full px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Create Identity
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="/assets/earth.gif"
              alt="hero image"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
            Discover inKognito Features
          </h2>
          <div className={`grid ${isSmallScreen ? 'grid-cols-1 gap-6' : 'grid-cols-2 md:grid-cols-4 gap-4'}`}>
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                  activeTab === tab ? 'ring-2 ring-offset-2 ' + tab.textColor : ''
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`${tab.color} p-3 rounded-full inline-block mb-4`}>
                  {tab.icon}
                </div>
                <h3 className="font-sans text-xl font-semibold mb-2">{tab.name}</h3>
                <p className="font-sans text-sm text-gray-600">{tab.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 bg-white rounded-xl shadow-lg p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Explore {activeTab.name}</h2>
              <p className="font-sans text-lg text-gray-600 mb-6">
                Learn more about how {activeTab.name.toLowerCase()} can revolutionize your digital identity experience.
              </p>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6">
                Discover {activeTab.name}
              </Button>
            </div>
            <div className="order-first md:order-last">
              <Image
                src={activeTab.image}
                alt={activeTab.name}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
