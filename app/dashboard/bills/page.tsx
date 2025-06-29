"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  Droplets,
  Zap,
  Home,
  Trash2,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Eye,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export default function BillsAndPayments() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  const bills = [
    {
      id: "BILL-2024-001",
      type: "Water",
      icon: Droplets,
      amount: 45.5,
      dueDate: "2024-12-20",
      status: "pending",
      period: "November 2024",
      usage: "2,450 gallons",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "BILL-2024-002",
      type: "Electricity",
      icon: Zap,
      amount: 125.3,
      dueDate: "2024-12-18",
      status: "overdue",
      period: "November 2024",
      usage: "850 kWh",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: "BILL-2024-003",
      type: "Property Tax",
      icon: Home,
      amount: 1250.0,
      dueDate: "2024-12-31",
      status: "pending",
      period: "Q4 2024",
      usage: "Annual Assessment",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "BILL-2024-004",
      type: "Waste Management",
      icon: Trash2,
      amount: 35.0,
      dueDate: "2024-12-25",
      status: "paid",
      period: "November 2024",
      usage: "Monthly Service",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const paymentHistory = [
    {
      id: "PAY-2024-001",
      type: "Water Bill",
      amount: 42.75,
      date: "2024-11-15",
      method: "Credit Card",
      status: "completed",
    },
    {
      id: "PAY-2024-002",
      type: "Electricity Bill",
      amount: 118.5,
      date: "2024-11-12",
      method: "Bank Transfer",
      status: "completed",
    },
    {
      id: "PAY-2024-003",
      type: "Waste Management",
      amount: 35.0,
      date: "2024-11-10",
      method: "Credit Card",
      status: "completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "overdue":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const totalOutstanding = bills.filter((bill) => bill.status !== "paid").reduce((sum, bill) => sum + bill.amount, 0)

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
                      <Home className="h-4 w-4" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <CreditCard className="h-4 w-4" />
                      <span>Bills & Payments</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-6">
            <Button variant="outline" className="w-full bg-transparent" onClick={handleSignOut}>
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
                <h1 className="text-xl font-semibold flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Bills & Payments</span>
                </h1>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Outstanding</p>
                      <p className="text-2xl font-bold text-red-600">${totalOutstanding.toFixed(2)}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">This Month Paid</p>
                      <p className="text-2xl font-bold text-green-600">$196.25</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Next Due</p>
                      <p className="text-2xl font-bold">Dec 18</p>
                      <p className="text-sm text-muted-foreground">2 days</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="current" className="space-y-6">
              <TabsList>
                <TabsTrigger value="current" className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Current Bills</span>
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Payment History</span>
                </TabsTrigger>
              </TabsList>

              {/* Current Bills Tab */}
              <TabsContent value="current" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Current Bills</h2>
                  <Button>
                    <DollarSign className="h-4 w-4 mr-2" />
                    Pay All Bills
                  </Button>
                </div>

                <div className="grid gap-6">
                  {bills.map((bill) => (
                    <Card key={bill.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`${bill.bgColor} p-3 rounded-xl`}>
                              <bill.icon className={`h-6 w-6 ${bill.color}`} />
                            </div>
                            <div>
                              <CardTitle className="flex items-center space-x-2">
                                <span>{bill.type} Bill</span>
                              </CardTitle>
                              <CardDescription className="flex items-center space-x-4">
                                <span>Period: {bill.period}</span>
                                <span>Usage: {bill.usage}</span>
                              </CardDescription>
                            </div>
                          </div>
                          <Badge className={getStatusColor(bill.status)}>
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(bill.status)}
                              <span className="capitalize">{bill.status}</span>
                            </div>
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold">${bill.amount.toFixed(2)}</p>
                              <p className="text-sm text-muted-foreground">
                                Due: {bill.dueDate}
                                {bill.status !== "paid" && (
                                  <span
                                    className={`ml-2 ${getDaysUntilDue(bill.dueDate) < 0 ? "text-red-600" : getDaysUntilDue(bill.dueDate) <= 3 ? "text-yellow-600" : "text-green-600"}`}
                                  >
                                    (
                                    {getDaysUntilDue(bill.dueDate) < 0
                                      ? `${Math.abs(getDaysUntilDue(bill.dueDate))} days overdue`
                                      : `${getDaysUntilDue(bill.dueDate)} days left`}
                                    )
                                  </span>
                                )}
                              </p>
                            </div>
                            {bill.status !== "paid" && (
                              <div className="w-32">
                                <Progress
                                  value={Math.max(0, Math.min(100, ((30 - getDaysUntilDue(bill.dueDate)) / 30) * 100))}
                                  className="h-2"
                                />
                              </div>
                            )}
                          </div>

                          <div className="flex space-x-2">
                            {bill.status !== "paid" && (
                              <Button>
                                <CreditCard className="h-4 w-4 mr-2" />
                                Pay Now
                              </Button>
                            )}
                            <Button variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Payment History Tab */}
              <TabsContent value="history" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Payment History</h2>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export History
                  </Button>
                </div>

                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <Card key={payment.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="bg-green-100 p-2 rounded-full">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{payment.type}</h4>
                              <p className="text-sm text-muted-foreground">
                                {payment.date} • {payment.method}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">${payment.amount.toFixed(2)}</p>
                            <Badge className="bg-green-100 text-green-800">{payment.status}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
