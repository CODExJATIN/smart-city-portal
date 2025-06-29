"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Droplets,
  Car,
  TreePine,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function CityAnalytics() {
  const [timeRange, setTimeRange] = useState("7d")
  const [selectedMetric, setSelectedMetric] = useState("all")

  // Sample data for charts
  const energyData = [
    { month: "Jan", consumption: 2400, renewable: 1200 },
    { month: "Feb", consumption: 2200, renewable: 1400 },
    { month: "Mar", consumption: 2600, renewable: 1600 },
    { month: "Apr", consumption: 2300, renewable: 1500 },
    { month: "May", consumption: 2100, renewable: 1700 },
    { month: "Jun", consumption: 2500, renewable: 1800 },
  ]

  const trafficData = [
    { hour: "6AM", volume: 120 },
    { hour: "8AM", volume: 450 },
    { hour: "10AM", volume: 280 },
    { hour: "12PM", volume: 380 },
    { hour: "2PM", volume: 320 },
    { hour: "4PM", volume: 420 },
    { hour: "6PM", volume: 520 },
    { hour: "8PM", volume: 180 },
  ]

  const wasteData = [
    { name: "Recycled", value: 45, color: "#10B981" },
    { name: "Composted", value: 25, color: "#F59E0B" },
    { name: "Landfill", value: 30, color: "#EF4444" },
  ]

  const serviceUsageData = [
    { service: "Bill Payment", usage: 85 },
    { service: "Permit Applications", usage: 65 },
    { service: "Issue Reports", usage: 45 },
    { service: "Event Registration", usage: 35 },
    { service: "Transport Passes", usage: 55 },
  ]

  const cityMetrics = [
    {
      title: "Active Citizens",
      value: "125,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Energy Efficiency",
      value: "87.3%",
      change: "+5.2%",
      trend: "up",
      icon: Zap,
      color: "text-yellow-600",
    },
    {
      title: "Water Conservation",
      value: "23.4M L",
      change: "+8.1%",
      trend: "up",
      icon: Droplets,
      color: "text-blue-500",
    },
    {
      title: "Traffic Flow",
      value: "92.1%",
      change: "-2.3%",
      trend: "down",
      icon: Car,
      color: "text-purple-600",
    },
    {
      title: "Green Coverage",
      value: "34.2%",
      change: "+1.8%",
      trend: "up",
      icon: TreePine,
      color: "text-green-600",
    },
    {
      title: "Waste Recycled",
      value: "68.9%",
      change: "+4.5%",
      trend: "up",
      icon: Trash2,
      color: "text-emerald-600",
    },
  ]

  const recentInsights = [
    {
      title: "Peak Energy Usage Reduced",
      description: "Smart grid optimization reduced peak hour consumption by 15%",
      impact: "High",
      category: "Energy",
      time: "2 hours ago",
    },
    {
      title: "Traffic Congestion Alert",
      description: "Unusual traffic patterns detected on Main Street corridor",
      impact: "Medium",
      category: "Traffic",
      time: "4 hours ago",
    },
    {
      title: "Recycling Rate Improvement",
      description: "Community recycling program shows 12% increase in participation",
      impact: "High",
      category: "Environment",
      time: "1 day ago",
    },
  ]

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
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="/analytics" className="text-sm font-medium text-primary">
              Analytics
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button>Export Data</Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">City Analytics Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Real-time insights and data-driven decisions for smart city management
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {cityMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  <div
                    className={`flex items-center text-xs ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                  >
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Energy Consumption Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Energy Consumption vs Renewable Generation</CardTitle>
                  <CardDescription>Monthly comparison of energy usage and renewable sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={energyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="consumption" fill="#3B82F6" name="Consumption" />
                      <Bar dataKey="renewable" fill="#10B981" name="Renewable" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                    AI Insights
                  </CardTitle>
                  <CardDescription>Automated analysis and recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentInsights.map((insight, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant={insight.impact === "High" ? "destructive" : "secondary"}>
                            {insight.impact}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{insight.time}</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                        <p className="text-xs text-muted-foreground">{insight.description}</p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {insight.category}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Digital Service Usage</CardTitle>
                <CardDescription>Citizen engagement with online services</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={serviceUsageData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="service" type="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="usage" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Energy Tab */}
          <TabsContent value="energy" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Energy Consumption Trend</CardTitle>
                  <CardDescription>Monthly energy usage patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={energyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="consumption" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Renewable Energy Sources</CardTitle>
                  <CardDescription>Distribution of renewable energy generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Solar Power</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Wind Power</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Hydro Power</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Traffic Tab */}
          <TabsContent value="traffic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Volume by Hour</CardTitle>
                <CardDescription>Average daily traffic patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="volume" stroke="#8B5CF6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Environment Tab */}
          <TabsContent value="environment" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Waste Management Distribution</CardTitle>
                  <CardDescription>How city waste is processed</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={wasteData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {wasteData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Environmental Metrics</CardTitle>
                  <CardDescription>Key environmental indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Air Quality Index</span>
                        <span className="text-sm text-green-600">Good (45)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Green Space Coverage</span>
                        <span className="text-sm text-blue-600">34.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "34%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Water Quality</span>
                        <span className="text-sm text-green-600">Excellent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Performance</CardTitle>
                  <CardDescription>Response times and completion rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="font-medium">Permit Applications</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">98.5%</div>
                        <div className="text-xs text-muted-foreground">Completion Rate</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">Issue Reports</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">2.3 days</div>
                        <div className="text-xs text-muted-foreground">Avg Response Time</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">Citizen Satisfaction</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">4.7/5</div>
                        <div className="text-xs text-muted-foreground">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Adoption</CardTitle>
                  <CardDescription>Online vs offline service usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">78%</div>
                      <div className="text-muted-foreground">Services Used Online</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                        <div className="text-2xl font-bold text-blue-600">156K</div>
                        <div className="text-xs text-blue-600">Online Transactions</div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="text-2xl font-bold text-gray-600">44K</div>
                        <div className="text-xs text-gray-600">In-Person Visits</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
