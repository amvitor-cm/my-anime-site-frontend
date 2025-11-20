'use client'

import { motion } from 'framer-motion'
import Navbar from './components/ui/Navbar'
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import ThreeJSScene from './components/sections/ThreeJSScene'
import CharacterShowcase from './components/sections/CharacterShowcase'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <FeaturesSection />
        <ThreeJSScene />
        <CharacterShowcase />
      </motion.div>
    </main>
  )
}
