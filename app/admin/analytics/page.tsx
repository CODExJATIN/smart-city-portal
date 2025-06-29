"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { TrendingUp, TrendingDown, Users, FileText, CreditCard, Activity, Download, RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminAnalytics() {
  const router = useRouter()
  const [timeRange, setTimeRange] = useState("7d")

  useEffect(() => {
    const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated")
    if (!isAdminAuthenticated) {
      router.push("/admin/login")
    }
  }, [router])

  // Sample data for charts
  const userGrowthData = [
    { month: "Jan", users: 1200, newUsers: 150 },
    { month: "Feb", users: 1350, newUsers: 180 },
    { month: "Mar", users: 1530, newUsers: 220 },
    { month: "Apr", users: 1750, newUsers: 190 },
    { month: "May", users: 1940, newUsers: 240 },
    { month: "Jun", users: 2180, newUsers: 280 },
    { month: "Jul", users: 2460, newUsers: 320 },
    { month: "Aug", users: 2780, newUsers: 350 },
    { month: "Sep", users: 3130, newUsers: 380 },
    { month: "Oct", users: 3510, newUsers: 420 },
    { month: "Nov", users: 3930, newUsers: 450 },
    { month: "Dec", users: 4380, newUsers: 480 },
  ]

  const serviceUsageData = [
    { service: "Bill Payment", usage: 2450, percentage: 35 },
    { service: "Permit Applications", usage: 1680, percentage: 24 },
    { service: "Issue Reports", usage: 1120, percentage: 16 },
    { service: "Event Registration", usage: 840, percentage: 12 },
    { service: "Transport Passes", usage: 560, percentage: 8 },
    { service: "Others", usage: 350, percentage: 5 },
  ]

  const revenueData = [
    { month: "Jan", revenue: 45000, expenses: 32000 },
    { month: "Feb", revenue: 52000, expenses: 35000 },
    { month: "Mar", revenue: 48000, expenses: 33000 },
    { month: "Apr", revenue: 61000, expenses: 38000 },
    { month: "May", revenue: 55000, expenses: 36000 },
    { month: "Jun", revenue: 67000, expenses: 42000 },
  ]

  const satisfactionData = [
    { category: "Excellent", value: 45, color: "#10B981" },
    { category: "Good", value: 35, color: "#3B82F6" },
    { category: "Average", value: 15, color: "#F59E0B" },
    { category: "Poor", value: 5, color: "#EF4444" },
  ]

  const keyMetrics = [
    {
      title: "Total Users",
      value: "4,380",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Services",
      value: "52",
      change: "+8.3%",
      trend: "up",
      icon: FileText,
      color: "text-green-600",
    },
    {
      title: "Monthly Revenue",
      value: "$67,000",
      change: "+15.2%",
      trend: "up",
      icon: CreditCard,
      color: "text-purple-600",
    },
    {
      title: "Avg Response Time",
      value: "2.3hrs",
      change: "-23%",
      trend: "down",
      icon: Activity,
      color: "text-orange-600",
    },
  ]

  const recentActivities = [
    {
      action: "New user registration spike",
      description: "480 new users registered this month",
      time: "2 hours ago",
      type: "growth",
    },
    {
      action: "Service downtime detected",
      description: "Bill payment service was down for 15 minutes",
      time: "4 hours ago",
      type: "issue",
    },
    {
      action: "High satisfaction rating",
      description: "Customer satisfaction reached 4.8/5 this week",
      time: "1 day ago",
      type: "success",
    },
    {
      action: "Revenue milestone achieved",
      description: "Monthly revenue exceeded $65,000 target",
      time: "2 days ago",
      type: "success",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor platform performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
                <Badge variant={metric.trend === "up" ? "default" : "destructive"}>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <p className="text-3xl font-bold">{metric.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth Trend</CardTitle>
                  <CardDescription>Total users and new registrations over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="users" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="newUsers" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === "growth"
                              ? "bg-blue-500"
                              : activity.type === "success"
                                ? "bg-green-500"
                                : "bg-red-500"
                          }`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Registration Trend</CardTitle>
                <CardDescription>Monthly new user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="newUsers" stroke="#3B82F6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Demographics</CardTitle>
                <CardDescription>User distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Citizens</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Business Users</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Government</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                      <span className="text-sm font-medium">5%</span>
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
                <CardTitle>Service Usage</CardTitle>
                <CardDescription>Most popular services by usage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
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

            <Card>
              <CardHeader>
                <CardTitle>Service Performance</CardTitle>
                <CardDescription>Response times and completion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { service: "Bill Payments", responseTime: "< 1min", completionRate: 99.8 },
                    { service: "Permit Applications", responseTime: "2-3 days", completionRate: 95.2 },
                    { service: "Issue Reports", responseTime: "4-6 hours", completionRate: 87.5 },
                    { service: "Event Registration", responseTime: "< 5min", completionRate: 98.9 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.service}</span>
                        <span className="text-muted-foreground">{item.completionRate}%</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Response: {item.responseTime}</span>
                        <span>Completion Rate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${item.completionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Revenue Tab */}
        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue vs Expenses</CardTitle>
              <CardDescription>Monthly financial performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
                  <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Satisfaction Tab */}
        <TabsContent value="satisfaction" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
                <CardDescription>User feedback distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {satisfactionData.map((entry, index) => (
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
                <CardTitle>Feedback Summary</CardTitle>
                <CardDescription>Recent user feedback and ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
                    <div className="text-muted-foreground">Average Rating</div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { rating: 5, count: 1250, percentage: 78 },
                      { rating: 4, count: 280, percentage: 17 },
                      { rating: 3, count: 65, percentage: 4 },
                      { rating: 2, count: 12, percentage: 1 },
                      { rating: 1, count: 3, percentage: 0 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-sm w-8">{item.rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground w-12">{item.count}</span>
                      </div>
                    ))}
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
