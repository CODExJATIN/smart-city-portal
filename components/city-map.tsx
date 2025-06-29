"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Navigation,
  Search,
  Filter,
  Layers,
  Zap,
  Droplets,
  Building,
  TreePine,
  Shield,
  Wifi,
  Bus,
  Heart,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

export function CityMap() {
  const [selectedLayer, setSelectedLayer] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const mapLayers = [
    { id: "all", label: "All", icon: Layers, count: 150 },
    { id: "utilities", label: "Utilities", icon: Zap, count: 45 },
    { id: "transport", label: "Transport", icon: Bus, count: 32 },
    { id: "safety", label: "Safety", icon: Shield, count: 28 },
    { id: "environment", label: "Environment", icon: TreePine, count: 25 },
    { id: "infrastructure", label: "Infrastructure", icon: Building, count: 20 },
  ]

  const mapPoints = [
    {
      id: 1,
      name: "City Hall",
      type: "government",
      status: "operational",
      coordinates: { x: 45, y: 30 },
      icon: Building,
      color: "bg-blue-500",
      services: ["Permits", "Licenses", "City Council"],
    },
    {
      id: 2,
      name: "Central Hospital",
      type: "healthcare",
      status: "operational",
      coordinates: { x: 65, y: 45 },
      icon: Heart,
      color: "bg-red-500",
      services: ["Emergency", "General Care", "Specialists"],
    },
    {
      id: 3,
      name: "Main Bus Terminal",
      type: "transport",
      status: "operational",
      coordinates: { x: 35, y: 60 },
      icon: Bus,
      color: "bg-purple-500",
      services: ["Bus Routes", "Tickets", "Real-time Info"],
    },
    {
      id: 4,
      name: "Water Treatment Plant",
      type: "utilities",
      status: "maintenance",
      coordinates: { x: 80, y: 25 },
      icon: Droplets,
      color: "bg-blue-400",
      services: ["Water Supply", "Quality Control", "Distribution"],
    },
    {
      id: 5,
      name: "Police Station",
      type: "safety",
      status: "operational",
      coordinates: { x: 25, y: 40 },
      icon: Shield,
      color: "bg-green-500",
      services: ["Emergency Response", "Community Safety", "Reports"],
    },
    {
      id: 6,
      name: "Central Park",
      type: "environment",
      status: "operational",
      coordinates: { x: 55, y: 70 },
      icon: TreePine,
      color: "bg-emerald-500",
      services: ["Recreation", "Events", "Nature Trails"],
    },
    {
      id: 7,
      name: "Traffic Issue",
      type: "incident",
      status: "reported",
      coordinates: { x: 40, y: 50 },
      icon: AlertTriangle,
      color: "bg-orange-500",
      services: ["Traffic Management", "Road Maintenance"],
    },
    {
      id: 8,
      name: "WiFi Hotspot",
      type: "connectivity",
      status: "operational",
      coordinates: { x: 70, y: 35 },
      icon: Wifi,
      color: "bg-indigo-500",
      services: ["Free WiFi", "Digital Services"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case "maintenance":
        return <Clock className="h-3 w-3 text-yellow-500" />
      case "reported":
        return <AlertTriangle className="h-3 w-3 text-orange-500" />
      default:
        return <CheckCircle className="h-3 w-3 text-gray-500" />
    }
  }

  const filteredPoints = mapPoints.filter((point) => {
    const matchesLayer = selectedLayer === "all" || point.type === selectedLayer
    const matchesSearch = point.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesLayer && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Interactive City Map</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filter
              </Button>
              <Button variant="outline">
                <Navigation className="h-4 w-4 mr-2" />
                My Location
              </Button>
            </div>

            {/* Layer Controls */}
            <div className="flex flex-wrap gap-2">
              {mapLayers.map((layer) => (
                <Button
                  key={layer.id}
                  variant={selectedLayer === layer.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLayer(layer.id)}
                  className="flex items-center space-x-2"
                >
                  <layer.icon className="h-4 w-4" />
                  <span>{layer.label}</span>
                  <Badge variant="secondary" className="ml-1">
                    {layer.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map */}
      <Card>
        <CardContent className="p-6">
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-grid-pattern"></div>
            </div>

            {/* Map Points */}
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{
                  left: `${point.coordinates.x}%`,
                  top: `${point.coordinates.y}%`,
                }}
              >
                {/* Map Pin */}
                <div
                  className={`${point.color} w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-all duration-300 animate-pulse`}
                >
                  <point.icon className="h-4 w-4 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border min-w-48">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{point.name}</h4>
                      {getStatusIcon(point.status)}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 capitalize">{point.type}</p>
                    <div className="space-y-1">
                      {point.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs mr-1">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Legend</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-yellow-500" />
                  <span>Maintenance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-3 w-3 text-orange-500" />
                  <span>Issue Reported</span>
                </div>
              </div>
            </div>

            {/* Map Stats */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold">{filteredPoints.length}</div>
                <div className="text-xs text-muted-foreground">Locations</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>Nearby Locations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPoints.slice(0, 5).map((point) => (
              <div
                key={point.id}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className={`${point.color} p-2 rounded-lg`}>
                    <point.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{point.name}</h4>
                    <p className="text-xs text-muted-foreground capitalize">{point.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(point.status)}
                  <Button variant="ghost" size="sm">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
