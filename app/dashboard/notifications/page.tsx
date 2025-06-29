"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  CheckCircle,
  Info,
  Calendar,
  CreditCard,
  FileText,
  Trash2,
  BookMarkedIcon as MarkAsUnread,
  Settings,
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

export default function Notifications() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("all")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  const notifications = [
    {
      id: 1,
      type: "bill",
      title: "Electricity Bill Due Soon",
      message: "Your electricity bill of $125.30 is due in 2 days",
      time: "2 hours ago",
      read: false,
      priority: "high",
      icon: CreditCard,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: 2,
      type: "application",
      title: "Building Permit Approved",
      message: "Your building permit application #APP-2024-0001 has been approved",
      time: "5 hours ago",
      read: false,
      priority: "medium",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      type: "event",
      title: "Community Meeting Tomorrow",
      message: "Don't forget about the community meeting at City Hall at 7:00 PM",
      time: "1 day ago",
      read: true,
      priority: "low",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      type: "system",
      title: "System Maintenance Scheduled",
      message: "The portal will be under maintenance on Dec 20, 2024 from 2:00 AM to 4:00 AM",
      time: "2 days ago",
      read: true,
      priority: "medium",
      icon: Info,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: 5,
      type: "application",
      title: "Document Required",
      message: "Additional documents needed for your parking permit application",
      time: "3 days ago",
      read: false,
      priority: "high",
      icon: FileText,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
  ]

  const getFilteredNotifications = () => {
    switch (selectedTab) {
      case "unread":
        return notifications.filter((n) => !n.read)
      case "bills":
        return notifications.filter((n) => n.type === "bill")
      case "applications":
        return notifications.filter((n) => n.type === "application")
      case "events":
        return notifications.filter((n) => n.type === "event")
      default:
        return notifications
    }
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const unreadCount = notifications.filter((n) => !n.read).length

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
                      <Bell className="h-4 w-4" />
                      <span>Notifications</span>
                      {unreadCount > 0 && <Badge className="ml-auto">{unreadCount}</Badge>}
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
              <div className="ml-4 flex-1">
                <h1 className="text-xl font-semibold flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                  {unreadCount > 0 && (
                    <Badge variant="destructive" className="ml-2">
                      {unreadCount} new
                    </Badge>
                  )}
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline" size="sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark All Read
                </Button>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                <TabsTrigger value="bills">Bills</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab} className="space-y-4">
                {getFilteredNotifications().length === 0 ? (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                    <p className="text-muted-foreground">
                      {selectedTab === "unread"
                        ? "You're all caught up! No unread notifications."
                        : "No notifications in this category."}
                    </p>
                  </div>
                ) : (
                  getFilteredNotifications().map((notification) => (
                    <Card
                      key={notification.id}
                      className={`hover:shadow-lg transition-shadow cursor-pointer ${
                        !notification.read ? "border-l-4 border-l-primary bg-blue-50/50 dark:bg-blue-950/20" : ""
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`${notification.bgColor} p-2 rounded-full flex-shrink-0`}>
                            <notification.icon className={`h-5 w-5 ${notification.color}`} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className={`font-semibold ${!notification.read ? "text-primary" : ""}`}>
                                  {notification.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                                  <Badge
                                    variant={
                                      notification.priority === "high"
                                        ? "destructive"
                                        : notification.priority === "medium"
                                          ? "secondary"
                                          : "outline"
                                    }
                                    className="text-xs"
                                  >
                                    {notification.priority} priority
                                  </Badge>
                                  {!notification.read && (
                                    <Badge variant="default" className="text-xs">
                                      New
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 ml-4">
                                {!notification.read && (
                                  <Button variant="ghost" size="sm">
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                )}
                                <Button variant="ghost" size="sm">
                                  <MarkAsUnread className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
