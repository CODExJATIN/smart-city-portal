"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  CreditCard,
  FileText,
  Bus,
  AlertTriangle,
  Wrench,
  BarChart3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Bell,
  User,
  Menu,
  Sun,
  Moon,
  TrendingUp,
  Users,
  Building,
  Zap,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AuthModal } from "@/components/auth-modal"

export default function SmartCityPortal() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  const heroSlides = [
    {
      title: "Smart City Initiative 2024",
      description: "Building a sustainable future with technology",
      image: "/placeholder.svg?height=400&width=800",
      cta: "Learn More",
    },
    {
      title: "Digital Services Available 24/7",
      description: "Access city services anytime, anywhere",
      image: "/placeholder.svg?height=400&width=800",
      cta: "Explore Services",
    },
    {
      title: "Community Events This Month",
      description: "Join us for exciting community activities",
      image: "/placeholder.svg?height=400&width=800",
      cta: "View Events",
    },
  ]

  const quickServices = [
    { icon: CreditCard, title: "Pay Bills", description: "Utilities, taxes, and fees", color: "bg-blue-500" },
    { icon: FileText, title: "Apply for Permits", description: "Building, business licenses", color: "bg-emerald-500" },
    { icon: Bus, title: "Track Transport", description: "Real-time bus tracking", color: "bg-purple-500" },
    { icon: AlertTriangle, title: "Emergency Alerts", description: "Safety notifications", color: "bg-red-500" },
    { icon: Wrench, title: "Report an Issue", description: "Infrastructure problems", color: "bg-orange-500" },
    { icon: BarChart3, title: "City Dashboard", description: "Analytics and insights", color: "bg-indigo-500" },
    { icon: Calendar, title: "Events & News", description: "Community calendar", color: "bg-pink-500" },
    { icon: Building, title: "City Services", description: "All government services", color: "bg-teal-500" },
  ]

  const cityStats = [
    { label: "Active Citizens", value: "125,000+", icon: Users, trend: "+12%" },
    { label: "Services Available", value: "50+", icon: Building, trend: "+5%" },
    { label: "Issues Resolved", value: "98.5%", icon: TrendingUp, trend: "+2.1%" },
    { label: "Energy Saved", value: "2.3MW", icon: Zap, trend: "+15%" },
  ]

  const recentNews = [
    {
      title: "New Smart Traffic System Launched",
      description: "AI-powered traffic management reduces congestion by 30%",
      date: "2 hours ago",
      category: "Infrastructure",
    },
    {
      title: "Digital Permit System Goes Live",
      description: "Apply for building permits online in under 10 minutes",
      date: "1 day ago",
      category: "Services",
    },
    {
      title: "Community Clean-up Drive Success",
      description: "Over 500 volunteers participated in city-wide cleanup",
      date: "3 days ago",
      category: "Environment",
    },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="sticky pl-10 pr-10 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                <span className="font-bold text-xl">SmartCity</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Events
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)} className="hidden md:flex">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bell className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-4 w-4" />
              </Button>

              <Button
                onClick={() => {
                  setAuthMode("login")
                  setShowAuthModal(true)
                }}
              >
                Sign In
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <a href="/services" className="text-sm font-medium">
                      Services
                    </a>
                    <a href="/dashboard" className="text-sm font-medium">
                      Dashboard
                    </a>
                    <a href="/events" className="text-sm font-medium">
                      Events
                    </a>
                    <a href="/contact" className="text-sm font-medium">
                      Contact
                    </a>
                    <Button
                      className="w-full"
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

        {/* Hero Section */}
        <section className="relative pl-10 pr-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  🌟 New Features Available
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Your Smart City
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    {" "}
                    Portal
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Access all city services, track your requests, and stay connected with your community through our
                  intelligent platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg"
                   className="bg-blue-600 hover:bg-blue-700">
                    Explore Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://thedailyplaniot.com/wp-content/uploads/2023/04/Smart-City.jpg"
                    alt="Smart City Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Services */}
        <section className="py-16 bg-white dark:bg-gray-900 pl-10 pr-10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Access Services</h2>
              <p className="text-xl text-muted-foreground">Everything you need, just a click away</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* City Statistics */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 pl-10 pr-10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">City at a Glance</h2>
              <p className="text-xl text-muted-foreground">Real-time insights into our smart city</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cityStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                        <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                    <Badge variant="secondary" className="text-green-600">
                      {stat.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News & Updates */}
        <section className="py-16 pl-10 pr-10">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
                <p className="text-xl text-muted-foreground">Stay informed about city developments</p>
              </div>
              <Button variant="outline">View All News</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentNews.map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{news.category}</Badge>
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{news.description}</CardDescription>
                    <Button variant="ghost" size="sm">
                      Read More <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 pl-10 pr-10">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest updates on city services, events, and important announcements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 pl-10 pr-10">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                  <span className="font-bold text-xl">SmartCity</span>
                </div>
                <p className="text-gray-400 mb-4">Building a smarter, more connected city for everyone.</p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pay Bills
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Apply Permits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Track Transport
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Report Issues
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Information</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Download App</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <div className="mr-3">📱</div>
                    Download for iOS
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <div className="mr-3">🤖</div>
                    Download for Android
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 SmartCity Portal. All rights reserved. | Government of Smart City</p>
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
