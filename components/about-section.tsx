"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const stats = [
    { value: "50+", label: "Tamamlanmış Layihə" },
    { value: "15+", label: "Peşəkar Komanda Üzvü" },
    { value: "5+", label: "İl Təcrübə" },
    { value: "99%", label: "Müştəri Məmnuniyyəti" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="WebTech.az Komandası"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">WebTech.az</span> Haqqında
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              İlham Dosdiyev tərəfindən qurulan WebTech.az, xüsusi proqram təminatı və hərtərəfli IT xidmətləri sahəsində ixtisaslaşan aparıcı IT həlləri təminatçısıdır. Peşəkar komandamızla müştərilərimizin unikal ehtiyaclarını qarşılamaq üçün innovativ həllər təqdim edirik.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Missiyamız şirkətlərə texnologiyadan istifadə edərək hədəflərinə çatmağa, əməliyyatları sadələşdirməyə və bugünkü rəqabətli rəqəmsal mühitdə irəlidə olmağa kömək etməkdir.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Bütün proqramlaşdırma dillərində müxtəlif texniki bacarıqlara malik peşəkar komanda</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Sizin xüsusi biznes tələblərinizə uyğunlaşdırılmış həllər</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Keyfiyyət, təhlükəsizlik və vaxtında çatdırılmaya sadiqliyimiz</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Uzunmüddətli uğuru təmin etmək üçün davamlı dəstək və texniki xidmət</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}