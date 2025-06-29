"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  CreditCard,
  FileText,
  MapPin,
  Calendar,
  CheckCircle,
  DollarSign,
  Activity,
  Users,
  Droplets,
  Thermometer,
  Wind,
  LogOut,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const userStats = [
    { label: "Active Requests", value: "3", icon: FileText, color: "text-blue-600" },
    { label: "Pending Bills", value: "$245", icon: CreditCard, color: "text-red-600" },
    { label: "Completed Tasks", value: "12", icon: CheckCircle, color: "text-green-600" },
    { label: "Notifications", value: "5", icon: Bell, color: "text-orange-600" },
  ]

  const recentActivities = [
    {
      title: "Water Bill Payment",
      description: "Payment of $45.50 completed",
      time: "2 hours ago",
      status: "completed",
      icon: Droplets,
    },
    {
      title: "Building Permit Application",
      description: "Application submitted for review",
      time: "1 day ago",
      status: "pending",
      icon: FileText,
    },
    {
      title: "Pothole Report",
      description: "Issue reported on Main Street",
      time: "3 days ago",
      status: "in-progress",
      icon: MapPin,
    },
  ]

  const upcomingEvents = [
    {
      title: "City Council Meeting",
      date: "Dec 15, 2024",
      time: "7:00 PM",
      location: "City Hall",
    },
    {
      title: "Community Clean-up Drive",
      date: "Dec 18, 2024",
      time: "9:00 AM",
      location: "Central Park",
    },
    {
      title: "Digital Literacy Workshop",
      date: "Dec 20, 2024",
      time: "2:00 PM",
      location: "Community Center",
    },
  ]

  const weatherData = {
    temperature: "22°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "12 km/h",
    aqi: "Good (45)",
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarHeader className="p-6">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-muted-foreground">Citizen ID: #12345</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/dashboard")}>
                      <Activity className="h-4 w-4" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/dashboard/requests")}>
                      <FileText className="h-4 w-4" />
                      <span>My Requests</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/dashboard/bills")}>
                      <CreditCard className="h-4 w-4" />
                      <span>Bills & Payments</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/dashboard/notifications")}>
                      <Bell className="h-4 w-4" />
                      <span>Notifications</span>
                      <Badge className="ml-auto">5</Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Services</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/report")}>
                      <MapPin className="h-4 w-4" />
                      <span>Report Issue</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/dashboard/events")}>
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleNavigation("/dashboard/community")}>
                      <Users className="h-4 w-4" />
                      <span>Community</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-6">
            <Button variant="outline" className="w-full bg-transparent" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-6">
              <SidebarTrigger />
              <div className="ml-4">
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {userStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Your latest interactions with city services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border">
                          <div
                            className={`p-2 rounded-full ${
                              activity.status === "completed"
                                ? "bg-green-100 text-green-600"
                                : activity.status === "pending"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            <activity.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{activity.title}</h4>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                          <Badge
                            variant={
                              activity.status === "completed"
                                ? "default"
                                : activity.status === "pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
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
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Frequently used services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="h-20 flex-col bg-transparent"
                        onClick={() => handleNavigation("/dashboard/bills")}
                      >
                        <CreditCard className="h-6 w-6 mb-2" />
                        Pay Bills
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 flex-col bg-transparent"
                        onClick={() => handleNavigation("/services")}
                      >
                        <FileText className="h-6 w-6 mb-2" />
                        New Request
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 flex-col bg-transparent"
                        onClick={() => handleNavigation("/report")}
                      >
                        <MapPin className="h-6 w-6 mb-2" />
                        Report Issue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                {/* Weather Widget */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Thermometer className="h-5 w-5 mr-2" />
                      Weather & Air Quality
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{weatherData.temperature}</div>
                        <div className="text-muted-foreground">{weatherData.condition}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                          {weatherData.humidity}
                        </div>
                        <div className="flex items-center">
                          <Wind className="h-4 w-4 mr-2 text-gray-500" />
                          {weatherData.windSpeed}
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-medium text-green-800">Air Quality: {weatherData.aqi}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <h4 className="font-semibold text-sm">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {event.date} at {event.time}
                          </p>
                          <p className="text-xs text-muted-foreground">{event.location}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Bill Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Bill Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Water Bill</span>
                        <span className="font-semibold">$45.50</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="text-xs text-muted-foreground">Due in 5 days</div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Electricity</span>
                        <span className="font-semibold">$125.30</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="text-xs text-red-600">Due in 2 days</div>

                      <Button className="w-full mt-4">Pay All Bills</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
