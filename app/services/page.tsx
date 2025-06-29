"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Bus,
  Wrench,
  Building,
  Users,
  Zap,
  Droplets,
  Car,
  Home,
  GraduationCap,
  Heart,
  Shield,
  Briefcase,
  FileText,
} from "lucide-react"
import { ServiceApplicationModal } from "@/components/service-application-modal"

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)

  const serviceCategories = [
    { id: "all", label: "All Services", count: 48 },
    { id: "utilities", label: "Utilities", count: 12 },
    { id: "permits", label: "Permits & Licenses", count: 8 },
    { id: "transport", label: "Transportation", count: 6 },
    { id: "health", label: "Health & Safety", count: 7 },
    { id: "education", label: "Education", count: 5 },
    { id: "business", label: "Business", count: 10 },
  ]

  const allServices = [
    {
      id: 1,
      title: "Water Bill Payment",
      description: "Pay your monthly water utility bills online with instant confirmation",
      category: "utilities",
      icon: Droplets,
      color: "bg-blue-500",
      rating: 4.8,
      processingTime: "Instant",
      fee: "Free",
      popular: true,
    },
    {
      id: 2,
      title: "Electricity Bill Payment",
      description: "Manage and pay your electricity bills with automated reminders",
      category: "utilities",
      icon: Zap,
      color: "bg-yellow-500",
      rating: 4.7,
      processingTime: "Instant",
      fee: "Free",
    },
    {
      id: 3,
      title: "Building Permit Application",
      description: "Apply for construction and renovation permits with digital document upload",
      category: "permits",
      icon: Building,
      color: "bg-emerald-500",
      rating: 4.5,
      processingTime: "7-14 days",
      fee: "$50-200",
    },
    {
      id: 4,
      title: "Business License Registration",
      description: "Register your new business and obtain required licenses",
      category: "business",
      icon: Briefcase,
      color: "bg-purple-500",
      rating: 4.6,
      processingTime: "3-5 days",
      fee: "$100-500",
    },
    {
      id: 5,
      title: "Public Transport Pass",
      description: "Purchase monthly or yearly public transportation passes",
      category: "transport",
      icon: Bus,
      color: "bg-indigo-500",
      rating: 4.4,
      processingTime: "Instant",
      fee: "$25-300",
    },
    {
      id: 6,
      title: "Parking Permit",
      description: "Apply for residential or commercial parking permits",
      category: "transport",
      icon: Car,
      color: "bg-gray-500",
      rating: 4.3,
      processingTime: "1-2 days",
      fee: "$20-100",
    },
    {
      id: 7,
      title: "Health Certificate",
      description: "Obtain health certificates for employment or travel purposes",
      category: "health",
      icon: Heart,
      color: "bg-red-500",
      rating: 4.7,
      processingTime: "2-3 days",
      fee: "$25",
    },
    {
      id: 8,
      title: "Fire Safety Inspection",
      description: "Schedule fire safety inspections for commercial properties",
      category: "health",
      icon: Shield,
      color: "bg-orange-500",
      rating: 4.5,
      processingTime: "5-7 days",
      fee: "$75-150",
    },
    {
      id: 9,
      title: "School Enrollment",
      description: "Enroll your child in public schools with online application",
      category: "education",
      icon: GraduationCap,
      color: "bg-teal-500",
      rating: 4.6,
      processingTime: "1-2 weeks",
      fee: "Free",
    },
    {
      id: 10,
      title: "Property Tax Payment",
      description: "Pay annual property taxes with installment options available",
      category: "utilities",
      icon: Home,
      color: "bg-pink-500",
      rating: 4.4,
      processingTime: "Instant",
      fee: "Free",
    },
    {
      id: 11,
      title: "Report Infrastructure Issue",
      description: "Report potholes, broken streetlights, or other infrastructure problems",
      category: "utilities",
      icon: Wrench,
      color: "bg-amber-500",
      rating: 4.2,
      processingTime: "1-3 days",
      fee: "Free",
      popular: true,
    },
    {
      id: 12,
      title: "Community Event Registration",
      description: "Register for city-sponsored community events and workshops",
      category: "education",
      icon: Users,
      color: "bg-cyan-500",
      rating: 4.8,
      processingTime: "Instant",
      fee: "Varies",
    },
  ]

  const filteredServices = allServices.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularServices = allServices.filter((service) => service.popular)

  const handleApplyNow = (service: any) => {
    setSelectedService(service)
    setShowApplicationModal(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"></div>
              <span className="font-bold text-xl">SmartCity</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/services" className="text-sm font-medium text-primary">
              Services
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button>Sign In</Button>
        </div>
      </header>

      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">City Services</h1>
          <p className="text-xl text-muted-foreground">
            Access all government services in one place. Fast, secure, and available 24/7.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filter
            </Button>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7">
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs">
                  {category.label}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Popular Services */}
        {selectedCategory === "all" && searchTerm === "" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Popular Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">Popular</Badge>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Processing Time:</span>
                        <span className="font-medium">{service.processingTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="font-medium">{service.fee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center">
                          <span className="font-medium mr-1">{service.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Services */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all"
                ? "All Services"
                : serviceCategories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-muted-foreground">
              {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    {service.popular && <Badge variant="secondary">Popular</Badge>}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Processing Time:</span>
                      <span className="font-medium">{service.processingTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Fee:</span>
                      <span className="font-medium">{service.fee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">{service.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xs ${i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button className="flex-1" onClick={() => handleApplyNow(service)}>
                        <FileText className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No services found</p>
                <p>Try adjusting your search terms or category filter</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        <ServiceApplicationModal
          isOpen={showApplicationModal}
          onClose={() => setShowApplicationModal(false)}
          service={selectedService}
        />
      </main>
    </div>
  )
}
