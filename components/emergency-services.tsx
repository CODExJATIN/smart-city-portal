"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Phone,
  MapPin,
  Clock,
  AlertTriangle,
  Heart,
  Flame,
  Car,
  Zap,
  Wind,
  Navigation,
  Users,
  CheckCircle,
  XCircle,
  Activity,
} from "lucide-react"

export function EmergencyServices() {
  const [emergencyType, setEmergencyType] = useState("")
  const [isEmergencyActive, setIsEmergencyActive] = useState(false)

  const emergencyTypes = [
    {
      id: "medical",
      title: "Medical Emergency",
      icon: Heart,
      color: "bg-red-500",
      number: "911",
      description: "Life-threatening medical situations",
    },
    {
      id: "fire",
      title: "Fire Emergency",
      icon: Flame,
      color: "bg-orange-500",
      number: "911",
      description: "Fire, smoke, or hazardous materials",
    },
    {
      id: "police",
      title: "Police Emergency",
      icon: Shield,
      color: "bg-blue-500",
      number: "911",
      description: "Crime, violence, or immediate danger",
    },
    {
      id: "traffic",
      title: "Traffic Accident",
      icon: Car,
      color: "bg-purple-500",
      number: "311",
      description: "Vehicle accidents or road hazards",
    },
    {
      id: "utility",
      title: "Utility Emergency",
      icon: Zap,
      color: "bg-yellow-500",
      number: "311",
      description: "Power outages, gas leaks, water issues",
    },
    {
      id: "weather",
      title: "Weather Emergency",
      icon: Wind,
      color: "bg-gray-500",
      number: "311",
      description: "Severe weather or natural disasters",
    },
  ]

  const emergencyContacts = [
    { service: "Emergency Services", number: "911", available: "24/7" },
    { service: "Non-Emergency Police", number: "(555) 123-4567", available: "24/7" },
    { service: "City Services", number: "311", available: "24/7" },
    { service: "Poison Control", number: "1-800-222-1222", available: "24/7" },
    { service: "Mental Health Crisis", number: "988", available: "24/7" },
    { service: "Animal Control", number: "(555) 123-4568", available: "8AM-6PM" },
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "Traffic",
      title: "Road Closure on Main Street",
      description: "Construction work causing delays",
      time: "2 hours ago",
      status: "active",
      severity: "medium",
    },
    {
      id: 2,
      type: "Weather",
      title: "Severe Weather Warning",
      description: "Heavy rain expected this evening",
      time: "4 hours ago",
      status: "active",
      severity: "high",
    },
    {
      id: 3,
      type: "Utility",
      title: "Power Outage Resolved",
      description: "Electricity restored to downtown area",
      time: "6 hours ago",
      status: "resolved",
      severity: "low",
    },
  ]

  const nearbyServices = [
    {
      name: "City General Hospital",
      type: "Hospital",
      distance: "0.8 miles",
      status: "operational",
      icon: Heart,
      color: "text-red-600",
    },
    {
      name: "Fire Station 1",
      type: "Fire Department",
      distance: "1.2 miles",
      status: "operational",
      icon: Flame,
      color: "text-orange-600",
    },
    {
      name: "Police Station Central",
      type: "Police",
      distance: "0.5 miles",
      status: "operational",
      icon: Shield,
      color: "text-blue-600",
    },
    {
      name: "Emergency Shelter",
      type: "Shelter",
      distance: "2.1 miles",
      status: "operational",
      icon: Users,
      color: "text-green-600",
    },
  ]

  const handleEmergencyCall = (type: string) => {
    setEmergencyType(type)
    setIsEmergencyActive(true)
    // In a real app, this would initiate emergency protocols
  }

  return (
    <div className="space-y-6">
      {/* Emergency Alert Banner */}
      {isEmergencyActive && (
        <Card className="border-red-500 bg-red-50 dark:bg-red-950">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 animate-pulse" />
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-200">Emergency Services Contacted</h4>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    Help is on the way. Stay calm and follow emergency procedures.
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEmergencyActive(false)}
                className="border-red-500 text-red-600"
              >
                <XCircle className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Emergency Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            <span>Emergency Services</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {emergencyTypes.map((emergency) => (
              <Card
                key={emergency.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => handleEmergencyCall(emergency.id)}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`${emergency.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <emergency.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{emergency.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{emergency.description}</p>
                  <Badge variant="destructive" className="text-xs">
                    Call {emergency.number}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Emergency Contacts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div>
                  <h4 className="font-semibold text-sm">{contact.service}</h4>
                  <p className="text-xs text-muted-foreground">Available: {contact.available}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm">{contact.number}</span>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Recent Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                <div
                  className={`p-2 rounded-lg ${
                    alert.severity === "high"
                      ? "bg-red-100 text-red-600"
                      : alert.severity === "medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">{alert.title}</h4>
                    <Badge variant={alert.status === "active" ? "destructive" : "secondary"} className="text-xs">
                      {alert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{alert.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{alert.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {alert.type}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nearby Emergency Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Nearby Emergency Services</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {nearbyServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <service.icon className={`h-5 w-5 ${service.color}`} />
                  <div>
                    <h4 className="font-semibold text-sm">{service.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {service.type} • {service.distance}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={service.status === "operational" ? "default" : "secondary"}>{service.status}</Badge>
                  <Button variant="ghost" size="sm">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Preparedness */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Emergency Preparedness</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Emergency Kit Checklist</h4>
              <div className="space-y-2 text-sm">
                {[
                  "Water (1 gallon per person per day)",
                  "Non-perishable food (3-day supply)",
                  "Battery-powered radio",
                  "Flashlight and extra batteries",
                  "First aid kit",
                  "Medications",
                  "Important documents",
                  "Cash and credit cards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Emergency Procedures</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  CPR & First Aid Guide
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Flame className="h-4 w-4 mr-2" />
                  Fire Safety Procedures
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Wind className="h-4 w-4 mr-2" />
                  Severe Weather Guide
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Evacuation Routes
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
