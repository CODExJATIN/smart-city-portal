"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
  Download,
  RefreshCw,
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

export default function MyRequests() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  const requests = [
    {
      id: "APP-2024-0001",
      title: "Building Permit Application",
      type: "Permit",
      status: "approved",
      submittedDate: "2024-12-10",
      lastUpdate: "2024-12-15",
      estimatedCompletion: "2024-12-20",
      fee: "$150.00",
      description: "Construction permit for residential extension",
    },
    {
      id: "APP-2024-0002",
      title: "Business License Renewal",
      type: "License",
      status: "pending",
      submittedDate: "2024-12-12",
      lastUpdate: "2024-12-14",
      estimatedCompletion: "2024-12-18",
      fee: "$75.00",
      description: "Annual business license renewal for retail store",
    },
    {
      id: "APP-2024-0003",
      title: "Parking Permit Request",
      type: "Permit",
      status: "in-review",
      submittedDate: "2024-12-14",
      lastUpdate: "2024-12-15",
      estimatedCompletion: "2024-12-17",
      fee: "$25.00",
      description: "Monthly parking permit for downtown area",
    },
    {
      id: "APP-2024-0004",
      title: "Health Certificate",
      type: "Certificate",
      status: "rejected",
      submittedDate: "2024-12-08",
      lastUpdate: "2024-12-12",
      estimatedCompletion: "N/A",
      fee: "$30.00",
      description: "Health certificate for food service employment",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "in-review":
        return <RefreshCw className="h-4 w-4 text-blue-600" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "in-review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || request.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
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
                      <FileText className="h-4 w-4" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <FileText className="h-4 w-4" />
                      <span>My Requests</span>
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
                  <FileText className="h-5 w-5" />
                  <span>My Requests</span>
                </h1>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Application Requests</h2>
              <p className="text-muted-foreground">Track and manage your service applications</p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Status Tabs */}
            <Tabs value={selectedStatus} onValueChange={setSelectedStatus} className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All Requests</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="in-review">In Review</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Requests List */}
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <Card key={request.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center space-x-2">
                          <FileText className="h-5 w-5" />
                          <span>{request.title}</span>
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>ID: {request.id}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>Submitted: {request.submittedDate}</span>
                          </span>
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(request.status)}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(request.status)}
                          <span className="capitalize">{request.status.replace("-", " ")}</span>
                        </div>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">{request.description}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Type:</span>
                          <p className="font-semibold">{request.type}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Fee:</span>
                          <p className="font-semibold">{request.fee}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Last Update:</span>
                          <p className="font-semibold">{request.lastUpdate}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Est. Completion:</span>
                          <p className="font-semibold">{request.estimatedCompletion}</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        {request.status === "rejected" && (
                          <Button size="sm">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Resubmit
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredRequests.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No requests found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm || selectedStatus !== "all"
                    ? "Try adjusting your search or filter criteria"
                    : "You haven't submitted any requests yet"}
                </p>
                <Button onClick={() => handleNavigation("/services")}>
                  <FileText className="h-4 w-4 mr-2" />
                  Browse Services
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
