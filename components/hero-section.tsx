"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Server, Smartphone, Globe } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              İdeyaları Rəqəmsal
            </span>
            <br /> Reallığa Çeviririk
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            WebTech.az müasir IT həlləri və xüsusi proqram təminatı təqdim edir. 
            Biz bütün proqramlaşdırma dillərində təcrübə ilə sizin vizyonunuzu həyata keçiririk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Xidmətlərimiz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Bizimlə Əlaqə
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-[400px]">
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut" 
              }}
              className="absolute top-0 left-0 bg-card p-6 rounded-lg shadow-lg"
            >
              <Code className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-bold">Veb İnkişaf</h3>
              <p className="text-sm text-muted-foreground">Xüsusi veb saytlar və tətbiqlər</p>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 7,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/4 right-0 bg-card p-6 rounded-lg shadow-lg"
            >
              <Server className="h-8 w-8 text-purple-500 mb-2" />
              <h3 className="font-bold">IT İnfrastruktur</h3>
              <p className="text-sm text-muted-foreground">Etibarlı və genişlənə bilən həllər</p>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-1/4 bg-card p-6 rounded-lg shadow-lg"
            >
              <Smartphone className="h-8 w-8 text-pink-500 mb-2" />
              <h3 className="font-bold">Mobil Tətbiqlər</h3>
              <p className="text-sm text-muted-foreground">iOS və Android inkişafı</p>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute bottom-1/4 right-1/4 bg-card p-6 rounded-lg shadow-lg"
            >
              <Globe className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-bold">IT Dəstək</h3>
              <p className="text-sm text-muted-foreground">24/7 texniki yardım</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}