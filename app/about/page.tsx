"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building,
  Users,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  GraduationCap,
  Calendar,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function AboutPage() {
  const features = [
    {
      icon: Building,
      title: "Digital Services",
      description: "Streamlined access to all city services through a unified digital platform",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Connect citizens with their local government and community initiatives",
    },
    {
      icon: Target,
      title: "Efficient Operations",
      description: "Optimized workflows and automated processes for better service delivery",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Continuous monitoring and improvement of service quality and user experience",
    },
  ]

  const technologies = [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/ui",
    "Lucide Icons",
    "Framer Motion",
    "Node.js",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 p-0.5">
              <div className="h-full w-full rounded-3xl bg-background flex items-center justify-center">
                <Building className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            About SmartCity Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing urban governance through digital innovation, connecting citizens with their city services in
            a seamless, efficient, and transparent manner.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-3 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create a comprehensive digital ecosystem that empowers citizens, streamlines government operations,
                and fosters transparent communication between the public and municipal services. We strive to make city
                services accessible, efficient, and user-friendly for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-emerald-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading platform for smart city initiatives, setting the standard for digital governance and
                citizen engagement. We envision cities where technology bridges the gap between government and citizens,
                creating more livable, sustainable, and connected communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Developer Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Developer Information</h2>
          <Card className="max-w-4xl mx-auto border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 p-1">
                    <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                      <Code className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Harsh Sarvakar</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center md:justify-start">
                      <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">L.D. College of Engineering</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Badge variant="secondary" className="mr-2">
                        Enrollment: 220280116116
                      </Badge>
                      <Badge variant="outline">Sem 6 IT Branch</Badge>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">Academic Year 2024</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Full-stack developer passionate about creating innovative solutions for smart city initiatives.
                    Specializing in modern web technologies and user-centered design to build applications that make a
                    positive impact on communities.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contact@smartcity.gov</p>
                <p className="text-muted-foreground">support@smartcity.gov</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">+1 (555) 987-6543</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">123 Government Plaza</p>
                <p className="text-muted-foreground">Smart City, SC 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of citizens already using SmartCity Portal to access city services efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/support">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
