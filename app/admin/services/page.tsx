"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  BarChart3,
  Building,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminServices() {
  const router = useRouter()
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Water Bill Payment",
      description: "Pay your monthly water utility bills online with instant confirmation",
      category: "utilities",
      fee: "Free",
      processingTime: "Instant",
      rating: 4.8,
      status: "active",
      icon: "Droplets",
      color: "bg-blue-500",
      popular: true,
      createdAt: "2024-01-15",
      updatedAt: "2024-12-10",
    },
    {
      id: 2,
      title: "Building Permit Application",
      description: "Apply for construction and renovation permits with digital document upload",
      category: "permits",
      fee: "$50-200",
      processingTime: "7-14 days",
      rating: 4.5,
      status: "active",
      icon: "Building",
      color: "bg-emerald-500",
      popular: false,
      createdAt: "2024-02-20",
      updatedAt: "2024-12-08",
    },
    {
      id: 3,
      title: "Business License Registration",
      description: "Register your new business and obtain required licenses",
      category: "business",
      fee: "$100-500",
      processingTime: "3-5 days",
      rating: 4.6,
      status: "active",
      icon: "Briefcase",
      color: "bg-purple-500",
      popular: false,
      createdAt: "2024-03-10",
      updatedAt: "2024-12-05",
    },
    {
      id: 4,
      title: "Public Transport Pass",
      description: "Purchase monthly or yearly public transportation passes",
      category: "transport",
      fee: "$25-300",
      processingTime: "Instant",
      rating: 4.4,
      status: "inactive",
      icon: "Car",
      color: "bg-indigo-500",
      popular: true,
      createdAt: "2024-04-05",
      updatedAt: "2024-11-30",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    category: "",
    fee: "",
    processingTime: "",
    icon: "",
    color: "",
    status: "active",
    popular: false,
  })

  useEffect(() => {
    const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated")
    if (!isAdminAuthenticated) {
      router.push("/admin/login")
    }
  }, [router])

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "utilities", label: "Utilities" },
    { value: "permits", label: "Permits & Licenses" },
    { value: "transport", label: "Transportation" },
    { value: "health", label: "Health & Safety" },
    { value: "education", label: "Education" },
    { value: "business", label: "Business" },
  ]

  const iconOptions = [
    { value: "Droplets", label: "Droplets" },
    { value: "Building", label: "Building" },
    { value: "Briefcase", label: "Briefcase" },
    { value: "Car", label: "Car" },
    { value: "Shield", label: "Shield" },
    { value: "Heart", label: "Heart" },
    { value: "GraduationCap", label: "Education" },
    { value: "Zap", label: "Energy" },
    { value: "FileText", label: "Document" },
  ]

  const colorOptions = [
    { value: "bg-blue-500", label: "Blue" },
    { value: "bg-emerald-500", label: "Emerald" },
    { value: "bg-purple-500", label: "Purple" },
    { value: "bg-indigo-500", label: "Indigo" },
    { value: "bg-red-500", label: "Red" },
    { value: "bg-orange-500", label: "Orange" },
    { value: "bg-yellow-500", label: "Yellow" },
    { value: "bg-pink-500", label: "Pink" },
  ]

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || service.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleAddService = () => {
    const id = Math.max(...services.map((s) => s.id)) + 1
    const service = {
      ...newService,
      id,
      rating: 0,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    }
    setServices([...services, service])
    setNewService({
      title: "",
      description: "",
      category: "",
      fee: "",
      processingTime: "",
      icon: "",
      color: "",
      status: "active",
      popular: false,
    })
    setIsAddDialogOpen(false)
  }

  const handleEditService = () => {
    setServices(
      services.map((service) =>
        service.id === editingService.id
          ? { ...editingService, updatedAt: new Date().toISOString().split("T")[0] }
          : service,
      ),
    )
    setIsEditDialogOpen(false)
    setEditingService(null)
  }

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id))
  }

  const handleToggleStatus = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? {
              ...service,
              status: service.status === "active" ? "inactive" : "active",
              updatedAt: new Date().toISOString().split("T")[0],
            }
          : service,
      ),
    )
  }

  const handleTogglePopular = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, popular: !service.popular, updatedAt: new Date().toISOString().split("T")[0] }
          : service,
      ),
    )
  }

  const getStatusIcon = (status) => {
    return status === "active" ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-red-600" />
    )
  }

  const getStatusColor = (status) => {
    return status === "active"
      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Service Management</h1>
          <p className="text-muted-foreground">Manage all city services and applications</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
                <DialogDescription>Create a new city service for citizens to access</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Service Title</Label>
                    <Input
                      id="title"
                      value={newService.title}
                      onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                      placeholder="Enter service title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newService.category}
                      onValueChange={(value) => setNewService({ ...newService, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.slice(1).map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    placeholder="Enter service description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fee">Fee</Label>
                    <Input
                      id="fee"
                      value={newService.fee}
                      onChange={(e) => setNewService({ ...newService, fee: e.target.value })}
                      placeholder="e.g., Free, $50, $25-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="processingTime">Processing Time</Label>
                    <Input
                      id="processingTime"
                      value={newService.processingTime}
                      onChange={(e) => setNewService({ ...newService, processingTime: e.target.value })}
                      placeholder="e.g., Instant, 3-5 days"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="icon">Icon</Label>
                    <Select
                      value={newService.icon}
                      onValueChange={(value) => setNewService({ ...newService, icon: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select icon" />
                      </SelectTrigger>
                      <SelectContent>
                        {iconOptions.map((icon) => (
                          <SelectItem key={icon.value} value={icon.value}>
                            {icon.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Select
                      value={newService.color}
                      onValueChange={(value) => setNewService({ ...newService, color: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {colorOptions.map((color) => (
                          <SelectItem key={color.value} value={color.value}>
                            {color.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="popular"
                      checked={newService.popular}
                      onChange={(e) => setNewService({ ...newService, popular: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="popular">Mark as Popular</Label>
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newService.status}
                      onValueChange={(value) => setNewService({ ...newService, status: value })}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddService}>Add Service</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Services</p>
                <p className="text-2xl font-bold">{services.length}</p>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Services</p>
                <p className="text-2xl font-bold">{services.filter((s) => s.status === "active").length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Popular Services</p>
                <p className="text-2xl font-bold">{services.filter((s) => s.popular).length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">
                  {(services.reduce((acc, s) => acc + s.rating, 0) / services.length).toFixed(1)}
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Services Table */}
      <Card>
        <CardHeader>
          <CardTitle>Services ({filteredServices.length})</CardTitle>
          <CardDescription>Manage all city services and their configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead>Processing Time</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Popular</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className={`${service.color} w-8 h-8 rounded-lg flex items-center justify-center`}>
                        <Building className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-sm text-muted-foreground">{service.description.substring(0, 50)}...</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {service.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{service.fee}</TableCell>
                  <TableCell>{service.processingTime}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <span>{service.rating}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(service.status)}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(service.status)}
                        <span className="capitalize">{service.status}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleTogglePopular(service.id)}
                      className={service.popular ? "text-orange-600" : "text-gray-400"}
                    >
                      {service.popular ? "★" : "☆"}
                    </Button>
                  </TableCell>
                  <TableCell>{service.updatedAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Dialog
                        open={isEditDialogOpen && editingService?.id === service.id}
                        onOpenChange={setIsEditDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setEditingService(service)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Edit Service</DialogTitle>
                            <DialogDescription>Update service information and settings</DialogDescription>
                          </DialogHeader>
                          {editingService && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="edit-title">Service Title</Label>
                                  <Input
                                    id="edit-title"
                                    value={editingService.title}
                                    onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-category">Category</Label>
                                  <Select
                                    value={editingService.category}
                                    onValueChange={(value) => setEditingService({ ...editingService, category: value })}
                                  >
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {categories.slice(1).map((category) => (
                                        <SelectItem key={category.value} value={category.value}>
                                          {category.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="edit-description">Description</Label>
                                <Textarea
                                  id="edit-description"
                                  value={editingService.description}
                                  onChange={(e) =>
                                    setEditingService({ ...editingService, description: e.target.value })
                                  }
                                  rows={3}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="edit-fee">Fee</Label>
                                  <Input
                                    id="edit-fee"
                                    value={editingService.fee}
                                    onChange={(e) => setEditingService({ ...editingService, fee: e.target.value })}
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-processingTime">Processing Time</Label>
                                  <Input
                                    id="edit-processingTime"
                                    value={editingService.processingTime}
                                    onChange={(e) =>
                                      setEditingService({ ...editingService, processingTime: e.target.value })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    id="edit-popular"
                                    checked={editingService.popular}
                                    onChange={(e) =>
                                      setEditingService({ ...editingService, popular: e.target.checked })
                                    }
                                    className="rounded"
                                  />
                                  <Label htmlFor="edit-popular">Mark as Popular</Label>
                                </div>
                                <div>
                                  <Label htmlFor="edit-status">Status</Label>
                                  <Select
                                    value={editingService.status}
                                    onValueChange={(value) => setEditingService({ ...editingService, status: value })}
                                  >
                                    <SelectTrigger className="w-32">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="active">Active</SelectItem>
                                      <SelectItem value="inactive">Inactive</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleEditService}>Save Changes</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleStatus(service.id)}
                        className={service.status === "active" ? "text-red-600" : "text-green-600"}
                      >
                        {service.status === "active" ? (
                          <XCircle className="h-4 w-4" />
                        ) : (
                          <CheckCircle className="h-4 w-4" />
                        )}
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Service</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{service.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteService(service.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
