"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  CreditCard,
  FileText,
  Bus,
  Wrench,
  BarChart3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Bell,
  User,
  Menu,
  Sun,
  Moon,
  TrendingUp,
  Users,
  Building,
  Zap,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Smartphone,
  Headphones,
  MessageCircle,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AuthModal } from "@/components/auth-modal"

export default function SmartCityPortal() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const heroSlides = [
    {
      title: "Smart City Initiative 2024",
      description: "Building a sustainable future with cutting-edge technology and innovation",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Explore Innovation",
      gradient: "from-blue-600 via-purple-600 to-emerald-600",
    },
    {
      title: "Digital Services 24/7",
      description: "Access all city services anytime, anywhere with our intelligent platform",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Start Digital Journey",
      gradient: "from-emerald-600 via-teal-600 to-blue-600",
    },
    {
      title: "Connected Community",
      description: "Join thousands of citizens in building a smarter, more connected city",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Join Community",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
  ]

  const quickServices = [
    {
      icon: CreditCard,
      title: "Pay Bills",
      description: "Utilities, taxes, and fees",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      count: "12K+ monthly",
    },
    {
      icon: FileText,
      title: "Apply Permits",
      description: "Building, business licenses",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      count: "2.5K+ approved",
    },
    {
      icon: Bus,
      title: "Public Transport",
      description: "Real-time tracking & passes",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      count: "50K+ daily users",
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "24/7 emergency response",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      count: "99.9% uptime",
    },
    {
      icon: Wrench,
      title: "Report Issues",
      description: "Infrastructure problems",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      count: "98% resolved",
    },
    {
      icon: BarChart3,
      title: "City Analytics",
      description: "Real-time city insights",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      count: "Live data",
    },
    {
      icon: Calendar,
      title: "Events & News",
      description: "Community calendar",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      count: "200+ events",
    },
    {
      icon: Building,
      title: "City Services",
      description: "All government services",
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      count: "50+ services",
    },
  ]

  const cityStats = [
    { label: "Active Citizens", value: "125,847", icon: Users, trend: "+12.5%", description: "Registered users" },
    { label: "Digital Services", value: "52", icon: Building, trend: "+8.3%", description: "Available online" },
    { label: "Issues Resolved", value: "98.7%", icon: TrendingUp, trend: "+2.1%", description: "Success rate" },
    { label: "Energy Saved", value: "2.3MW", icon: Zap, trend: "+15.2%", description: "This month" },
    { label: "Response Time", value: "< 2hrs", icon: Clock, trend: "-23%", description: "Average" },
    { label: "Satisfaction", value: "4.8/5", icon: Star, trend: "+0.3", description: "User rating" },
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimized for mobile devices with native app experience",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-level security with end-to-end encryption",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant responses with real-time data synchronization",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Globe,
      title: "Always Available",
      description: "24/7 access to all services with 99.9% uptime",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Local Business Owner",
      content: "The permit application process used to take weeks. Now it's done in minutes!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Resident",
      content: "Paying bills and tracking city services has never been easier. Truly revolutionary!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Community Leader",
      content: "The transparency and efficiency of this platform is exactly what our city needed.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        {/* Enhanced Header */}
        <header
          className={`fixed top-0 pl-10 pr-10 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-background/80 backdrop-blur-xl border-b shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="h-full w-full rounded-2xl bg-background flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    SmartCity
                  </span>
                  <div className="text-xs text-muted-foreground">Digital Portal</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Services", href: "/services" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "About", href: "/about" },
                { name: "Admin Panel", href: "/admin" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>


            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hidden md:flex hover:scale-110 transition-transform duration-300"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex relative hover:scale-110 transition-transform duration-300"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
              </Button>

              <Button
                onClick={() => {
                  setAuthMode("login")
                  setShowAuthModal(true)
                }}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 hover:scale-105 transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>

              {/* Enhanced Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="space-y-4">
                      {["Services", "Dashboard", "Community", "Support"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="flex items-center space-x-3 text-sm font-medium p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600"></div>
                          {item}
                        </a>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600"
                      onClick={() => {
                        setAuthMode("login")
                        setShowAuthModal(true)
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen pl-10 pr-10 flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-40 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container relative z-10 py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <Badge
                  variant="secondary"
                  className="w-fit bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 border-0 hover:scale-105 transition-transform duration-300"
                >
                  <Star className="h-3 w-3 mr-1" />🌟 Award-Winning Platform 2024
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    Your Smart City
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient">
                      Digital Hub
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    Experience the future of civic engagement with our AI-powered platform. Access services, connect
                    with community, and shape your city's tomorrow.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 h-14 px-8 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-lg hover:scale-105 transition-all duration-300 border-2 bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">125K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98.7%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900 dark:to-emerald-900">
                    <img
                      src="https://thedailyplaniot.com/wp-content/uploads/2023/04/Smart-City.jpg"
                      alt="Smart City Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Updates</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float animation-delay-1000">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">99.9% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Quick Access Services */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                Quick Access
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Just One Click Away
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access all city services instantly with our intelligent platform designed for modern citizens
              </p>
            </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  {quickServices.map((service, index) => (
    <Card
      key={index}
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer 
                 border-0 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm 
                 text-gray-900 dark:text-white animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div
          className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 
                      group-hover:scale-110 transition-all duration-300 shadow-lg`}
        >
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-bold mb-2 text-lg">{service.title}</h3>
        <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">{service.description}</p>
        <Badge variant="secondary" className="text-xs">
          {service.count}
        </Badge>
      </CardContent>
    </Card>
  ))}
</div>


            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Building className="mr-2 h-5 w-5" />
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced City Statistics */}
        <section className="py-24 pl-10 pr-10 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                <BarChart3 className="h-3 w-3 mr-1" />
                Real-Time Analytics
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                City Performance
                <span className="block">at a Glance</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Live data and insights powering smarter decisions for our community
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {cityStats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                    <div className="text-sm text-white/80 mb-2">{stat.label}</div>
                    <div className="text-xs text-white/60">{stat.description}</div>
                    <Badge variant="secondary" className="mt-2 bg-green-500/20 text-green-100 border-green-400/30">
                      {stat.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-24 bg-white pl-10 pr-10 dark:bg-gray-900">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <Badge variant="secondary" className="mb-4">
                  <Star className="h-3 w-3 mr-1" />
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Built for the
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    Future of Cities
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Experience next-generation civic technology designed with citizens at the center
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className={`${feature.bgColor} p-3 rounded-xl`}>
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Mobile App</div>
                          <div className="text-sm text-muted-foreground">iOS & Android</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">4.9★</div>
                    </Card>

                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Shield className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Security</div>
                          <div className="text-sm text-muted-foreground">Bank-level</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-green-600">100%</div>
                    </Card>
                  </div>

                  <div className="space-y-6 mt-12">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <Zap className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Speed</div>
                          <div className="text-sm text-muted-foreground">Response time</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">&lt;2s</div>
                    </Card>

                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Headphones className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Support</div>
                          <div className="text-sm text-muted-foreground">24/7 Available</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">Live</div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-24 bg-gradient-to-b pl-10 pr-10 from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">
                <MessageCircle className="h-3 w-3 mr-1" />
                Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Loved by Citizens
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Across the City
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our community members say about their experience
              </p>
            </div>

<div className="grid md:grid-cols-3 gap-8">
  {testimonials.map((testimonial, index) => (
    <Card
      key={index}
      className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 
                 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm 
                 text-gray-900 dark:text-white animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-lg mb-6 italic text-gray-700 dark:text-gray-300">
        "{testimonial.content}"
      </p>
      <div className="flex items-center space-x-3">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground dark:text-gray-400">
            {testimonial.role}
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>

          </div>
        </section>

        {/* Enhanced Newsletter */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                <Bell className="h-3 w-3 mr-1" />
                Stay Connected
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss an Update</h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest city news, service updates, and community events delivered to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pl-10 h-12"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 h-12 px-8 hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm opacity-70">Join 50,000+ citizens already subscribed. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 pl-10 pr-10 text-white py-20">
          <div className="container">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 p-0.5">
                    <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      SmartCity
                    </span>
                    <div className="text-sm text-gray-400">Digital Portal</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 text-lg">
                  Building smarter, more connected communities through innovative technology and citizen-centered
                  design.
                </p>
                <div className="flex space-x-4">
                  {[Phone, Mail, MapPin, MessageCircle].map((Icon, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>

              {[
                {
                  title: "Services",
                  links: ["Pay Bills", "Apply Permits", "Track Transport", "Report Issues", "City Analytics"],
                },
                {
                  title: "Support",
                  links: ["Help Center", "Contact Us", "Live Chat", "Documentation", "Community"],
                },
                {
                  title: "Legal",
                  links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Security"],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-4 text-lg">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">
                  &copy; 2024 SmartCity Portal. All rights reserved. | Government of Smart City
                </p>
                <div className="flex items-center space-x-6">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    All Systems Operational
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onModeChange={setAuthMode}
        />
      </div>
    </div>
  )
}
