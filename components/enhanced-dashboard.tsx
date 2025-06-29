"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Bell,
  Calendar,
  CreditCard,
  FileText,
  MapPin,
  Users,
  Zap,
  Droplets,
  Wind,
  Thermometer,
  TrendingUp,
  CheckCircle,
  Star,
  BarChart3,
  PieChart,
  Car,
  Shield,
  Building,
} from "lucide-react"

export function EnhancedDashboard() {
  const [activeMetric, setActiveMetric] = useState("overview")
  const [weatherData, setWeatherData] = useState({
    temperature: "22°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "12 km/h",
    aqi: "Good (45)",
    uvIndex: "3 (Moderate)",
  })

  const quickStats = [
    {
      title: "Active Requests",
      value: "3",
      change: "+2 this week",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      trend: "up",
    },
    {
      title: "Pending Bills",
      value: "$245.50",
      change: "Due in 2 days",
      icon: CreditCard,
      color: "text-red-600",
      bgColor: "bg-red-100",
      trend: "urgent",
    },
    {
      title: "Completed Tasks",
      value: "12",
      change: "+4 this month",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      trend: "up",
    },
    {
      title: "Notifications",
      value: "5",
      change: "3 unread",
      icon: Bell,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      trend: "neutral",
    },
  ]

  const cityServices = [
    {
      category: "Utilities",
      services: [
        { name: "Water Bill", status: "paid", amount: "$45.50", dueDate: "Dec 20" },
        { name: "Electricity", status: "overdue", amount: "$125.30", dueDate: "Dec 18" },
        { name: "Gas Bill", status: "pending", amount: "$67.80", dueDate: "Dec 25" },
      ],
    },
    {
      category: "Transportation",
      services: [
        { name: "Bus Pass", status: "active", validUntil: "Jan 31, 2025" },
        { name: "Parking Permit", status: "pending", application: "APP-2024-0123" },
      ],
    },
    {
      category: "Permits",
      services: [
        { name: "Building Permit", status: "approved", reference: "BP-2024-0456" },
        { name: "Business License", status: "in-review", application: "BL-2024-0789" },
      ],
    },
  ]

  const upcomingEvents = [
    {
      title: "City Council Meeting",
      date: "Dec 15, 2024",
      time: "7:00 PM",
      location: "City Hall",
      type: "Government",
      attendees: 45,
    },
    {
      title: "Community Clean-up Drive",
      date: "Dec 18, 2024",
      time: "9:00 AM",
      location: "Central Park",
      type: "Community",
      attendees: 120,
    },
    {
      title: "Digital Literacy Workshop",
      date: "Dec 20, 2024",
      time: "2:00 PM",
      location: "Community Center",
      type: "Education",
      attendees: 30,
    },
    {
      title: "Holiday Festival",
      date: "Dec 22, 2024",
      time: "6:00 PM",
      location: "Downtown Square",
      type: "Cultural",
      attendees: 500,
    },
  ]

  const recentActivities = [
    {
      title: "Water Bill Payment Successful",
      description: "Payment of $45.50 completed via credit card",
      time: "2 hours ago",
      status: "completed",
      icon: Droplets,
      color: "text-blue-600",
    },
    {
      title: "Building Permit Approved",
      description: "Your construction permit application has been approved",
      time: "1 day ago",
      status: "approved",
      icon: Building,
      color: "text-green-600",
    },
    {
      title: "Pothole Report Submitted",
      description: "Issue reported on Main Street - Reference #RPT-2024-001234",
      time: "3 days ago",
      status: "in-progress",
      icon: MapPin,
      color: "text-orange-600",
    },
    {
      title: "Community Event Registration",
      description: "Successfully registered for Holiday Festival",
      time: "5 days ago",
      status: "completed",
      icon: Calendar,
      color: "text-purple-600",
    },
  ]

  const cityMetrics = [
    {
      title: "Air Quality Index",
      value: "45",
      status: "Good",
      icon: Wind,
      color: "text-green-600",
      description: "Excellent air quality today",
    },
    {
      title: "Traffic Flow",
      value: "92%",
      status: "Smooth",
      icon: Car,
      color: "text-blue-600",
      description: "Minimal congestion citywide",
    },
    {
      title: "Public Safety",
      value: "98%",
      status: "Secure",
      icon: Shield,
      color: "text-green-600",
      description: "All systems operational",
    },
    {
      title: "Energy Usage",
      value: "87%",
      status: "Efficient",
      icon: Zap,
      color: "text-yellow-600",
      description: "15% below average consumption",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`${stat.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge
                  variant={stat.trend === "up" ? "default" : stat.trend === "urgent" ? "destructive" : "secondary"}
                  className="text-xs"
                >
                  {stat.trend === "up" ? "↗" : stat.trend === "urgent" ? "⚠" : "→"}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Tabs */}
      <Tabs value={activeMetric} onValueChange={setActiveMetric} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <Activity className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span className="hidden sm:inline">Services</span>
          </TabsTrigger>
          <TabsTrigger value="bills" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Bills</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Events</span>
          </TabsTrigger>
          <TabsTrigger value="city" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">City Data</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Recent Activities</span>
                  </CardTitle>
                  <CardDescription>Your latest interactions with city services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-xl border hover:bg-muted/50 transition-colors duration-300"
                      >
                        <div className={`p-2 rounded-lg bg-muted`}>
                          <activity.icon className={`h-5 w-5 ${activity.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>Frequently used services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: CreditCard, label: "Pay Bills", color: "bg-blue-500" },
                      { icon: FileText, label: "New Request", color: "bg-emerald-500" },
                      { icon: MapPin, label: "Report Issue", color: "bg-orange-500" },
                      { icon: Calendar, label: "Book Service", color: "bg-purple-500" },
                    ].map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-20 flex-col space-y-2 hover:scale-105 transition-all duration-300 bg-transparent"
                      >
                        <div className={`${action.color} p-2 rounded-lg`}>
                          <action.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xs">{action.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Weather Widget */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Thermometer className="h-5 w-5" />
                    <span>Weather & Environment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{weatherData.temperature}</div>
                      <div className="text-muted-foreground">{weatherData.condition}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Droplets className="h-4 w-4 text-blue-500" />
                        <span>{weatherData.humidity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wind className="h-4 w-4 text-gray-500" />
                        <span>{weatherData.windSpeed}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <div className="text-sm font-medium text-green-800 dark:text-green-200">
                          Air Quality: {weatherData.aqi}
                        </div>
                      </div>
                      <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                        <div className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          UV Index: {weatherData.uvIndex}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* City Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>City Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cityMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <metric.icon className={`h-5 w-5 ${metric.color}`} />
                          <div>
                            <div className="font-semibold text-sm">{metric.title}</div>
                            <div className="text-xs text-muted-foreground">{metric.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{metric.value}</div>
                          <Badge variant="secondary" className="text-xs">
                            {metric.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-6">
          <div className="grid gap-6">
            {cityServices.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <h4 className="font-semibold">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.amount && `Amount: ${service.amount}`}
                            {service.dueDate && ` • Due: ${service.dueDate}`}
                            {service.validUntil && `Valid until: ${service.validUntil}`}
                            {service.application && `Application: ${service.application}`}
                            {service.reference && `Reference: ${service.reference}`}
                          </p>
                        </div>
                        <Badge
                          variant={
                            service.status === "paid" || service.status === "approved" || service.status === "active"
                              ? "default"
                              : service.status === "overdue"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {service.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Upcoming Events</span>
              </CardTitle>
              <CardDescription>Community events and city meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-lg">{event.title}</h4>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {event.date} at {event.time}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-transparent" variant="outline">
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* City Data Tab */}
        <TabsContent value="city" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>City Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { label: "Service Efficiency", value: 94, color: "bg-blue-500" },
                    { label: "Citizen Satisfaction", value: 87, color: "bg-green-500" },
                    { label: "Digital Adoption", value: 78, color: "bg-purple-500" },
                    { label: "Response Time", value: 92, color: "bg-orange-500" },
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{metric.label}</span>
                        <span className="text-muted-foreground">{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Service Usage</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { service: "Bill Payments", usage: 45, color: "bg-blue-500" },
                    { service: "Permit Applications", usage: 25, color: "bg-green-500" },
                    { service: "Issue Reports", usage: 20, color: "bg-orange-500" },
                    { service: "Event Registration", usage: 10, color: "bg-purple-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.service}</span>
                          <span className="font-medium">{item.usage}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <p className="text-lg">John Doe</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Citizen ID</label>
                      <p className="text-lg">#12345</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-lg">john.doe@email.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <p className="text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Address</label>
                    <p className="text-lg">123 Main Street, Smart City, SC 12345</p>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Account Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Verification Status</span>
                    <Badge variant="default">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Account Type</span>
                    <Badge variant="secondary">Resident</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Member Since</span>
                    <span className="text-sm font-medium">Jan 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Services Used</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
