"use client"

import { motion } from 'framer-motion'
import { 
  Code, Database, Server, Smartphone, Globe, 
  Shield, Cloud, LineChart, Headphones, Cpu
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Veb İnkişaf",
    description: "Ən son texnologiyalarla hazırlanmış xüsusi veb saytlar və veb tətbiqlər.",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Mobil İnkişaf",
    description: "iOS və Android üçün yerli və çarpaz platformalı mobil tətbiqlər.",
    icon: Smartphone,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Backend İnkişaf",
    description: "Tətbiqləriniz üçün miqyaslanan server tərəfli həllər və API-lər.",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Verilənlər Bazası İdarəsi",
    description: "Verilənlər bazası sistemlərinin dizaynı, tətbiqi və optimallaşdırılması.",
    icon: Database,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "IT İnfrastruktur",
    description: "Şirkətlər üçün etibarlı IT infrastrukturunun qurulması və idarə edilməsi.",
    icon: Cloud,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    title: "Kibertəhlükəsizlik",
    description: "Təhdidlərə qarşı qorunma və təhlükəsizlik tədbirlərinin həyata keçirilməsi.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "IT Məsləhət",
    description: "Biznes əməliyyatlarınızı optimallaşdırmaq üçün strateji texnologiya məsləhətləri.",
    icon: LineChart,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "Texniki Dəstək",
    description: "Bütün IT sistemləriniz üçün 24/7 dəstək və texniki xidmət.",
    icon: Headphones,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bizim <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Xidmətlərimiz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Şirkətlərə rəqəmsal dünyada uğur qazanmağa kömək etmək üçün hərtərəfli IT xidmətləri təklif edirik.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", service.bgColor)}>
                    <service.icon className={cn("h-6 w-6", service.color)} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}