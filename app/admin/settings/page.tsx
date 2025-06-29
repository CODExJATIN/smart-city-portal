"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Globe, Shield, Bell, Server, Palette, Save, RefreshCw, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"

export default function AdminSettings() {
  const router = useRouter()
  const [settings, setSettings] = useState({
    general: {
      siteName: "SmartCity Portal",
      siteDescription: "Your Digital City Experience",
      contactEmail: "admin@smartcity.gov",
      supportPhone: "+1 (555) 123-4567",
      timezone: "America/New_York",
      language: "en",
      maintenanceMode: false,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: true,
      systemAlerts: true,
      userRegistration: true,
      serviceUpdates: true,
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5,
      ipWhitelist: "",
      sslRequired: true,
    },
    appearance: {
      theme: "light",
      primaryColor: "#3B82F6",
      secondaryColor: "#10B981",
      logoUrl: "",
      faviconUrl: "",
      customCSS: "",
    },
    integrations: {
      googleAnalytics: "",
      googleMaps: "",
      paymentGateway: "stripe",
      emailProvider: "sendgrid",
      smsProvider: "twilio",
    },
  })

  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<string | null>(null)

  useEffect(() => {
    const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated")
    if (!isAdminAuthenticated) {
      router.push("/admin/login")
    }
  }, [router])

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setLastSaved(new Date().toLocaleString())
  }

  const handleReset = () => {
    // Reset to default values
    setSettings({
      general: {
        siteName: "SmartCity Portal",
        siteDescription: "Your Digital City Experience",
        contactEmail: "admin@smartcity.gov",
        supportPhone: "+1 (555) 123-4567",
        timezone: "America/New_York",
        language: "en",
        maintenanceMode: false,
      },
      notifications: {
        emailNotifications: true,
        smsNotifications: true,
        pushNotifications: true,
        systemAlerts: true,
        userRegistration: true,
        serviceUpdates: true,
      },
      security: {
        twoFactorAuth: true,
        sessionTimeout: 30,
        passwordExpiry: 90,
        loginAttempts: 5,
        ipWhitelist: "",
        sslRequired: true,
      },
      appearance: {
        theme: "light",
        primaryColor: "#3B82F6",
        secondaryColor: "#10B981",
        logoUrl: "",
        faviconUrl: "",
        customCSS: "",
      },
      integrations: {
        googleAnalytics: "",
        googleMaps: "",
        paymentGateway: "stripe",
        emailProvider: "sendgrid",
        smsProvider: "twilio",
      },
    })
  }

  const updateSetting = (category: string, key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">System Settings</h1>
              <p className="text-muted-foreground">Configure platform settings and preferences</p>
            </div>
            <div className="flex items-center space-x-2">
              {lastSaved && (
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Last saved: {lastSaved}
                </Badge>
              )}
              <Button variant="outline" onClick={handleReset}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                Save Changes
              </Button>
            </div>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="general" className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>General</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span>Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center space-x-2">
                <Server className="h-4 w-4" />
                <span>Integrations</span>
              </TabsTrigger>
            </TabsList>

            {/* General Settings */}
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Basic platform configuration and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="siteName">Site Name</Label>
                      <Input
                        id="siteName"
                        value={settings.general.siteName}
                        onChange={(e) => updateSetting("general", "siteName", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={settings.general.contactEmail}
                        onChange={(e) => updateSetting("general", "contactEmail", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea
                      id="siteDescription"
                      value={settings.general.siteDescription}
                      onChange={(e) => updateSetting("general", "siteDescription", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="supportPhone">Support Phone</Label>
                      <Input
                        id="supportPhone"
                        value={settings.general.supportPhone}
                        onChange={(e) => updateSetting("general", "supportPhone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select
                        value={settings.general.timezone}
                        onValueChange={(value) => updateSetting("general", "timezone", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/New_York">Eastern Time</SelectItem>
                          <SelectItem value="America/Chicago">Central Time</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time</SelectItem>
                          <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                          <SelectItem value="UTC">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="language">Default Language</Label>
                      <Select
                        value={settings.general.language}
                        onValueChange={(value) => updateSetting("general", "language", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2 pt-6">
                      <Switch
                        id="maintenanceMode"
                        checked={settings.general.maintenanceMode}
                        onCheckedChange={(checked) => updateSetting("general", "maintenanceMode", checked)}
                      />
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security policies and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                      <Input
                        id="sessionTimeout"
                        type="number"
                        value={settings.security.sessionTimeout}
                        onChange={(e) => updateSetting("security", "sessionTimeout", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                      <Input
                        id="passwordExpiry"
                        type="number"
                        value={settings.security.passwordExpiry}
                        onChange={(e) => updateSetting("security", "passwordExpiry", Number.parseInt(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="loginAttempts">Max Login Attempts</Label>
                      <Input
                        id="loginAttempts"
                        type="number"
                        value={settings.security.loginAttempts}
                        onChange={(e) => updateSetting("security", "loginAttempts", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="twoFactorAuth"
                          checked={settings.security.twoFactorAuth}
                          onCheckedChange={(checked) => updateSetting("security", "twoFactorAuth", checked)}
                        />
                        <Label htmlFor="twoFactorAuth">Require Two-Factor Authentication</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="sslRequired"
                          checked={settings.security.sslRequired}
                          onCheckedChange={(checked) => updateSetting("security", "sslRequired", checked)}
                        />
                        <Label htmlFor="sslRequired">Require SSL/HTTPS</Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="ipWhitelist">IP Whitelist (one per line)</Label>
                    <Textarea
                      id="ipWhitelist"
                      value={settings.security.ipWhitelist}
                      onChange={(e) => updateSetting("security", "ipWhitelist", e.target.value)}
                      placeholder="192.168.1.1&#10;10.0.0.1"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure notification preferences and channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Send notifications via email</p>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={settings.notifications.emailNotifications}
                        onCheckedChange={(checked) => updateSetting("notifications", "emailNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="smsNotifications">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">Send notifications via SMS</p>
                      </div>
                      <Switch
                        id="smsNotifications"
                        checked={settings.notifications.smsNotifications}
                        onCheckedChange={(checked) => updateSetting("notifications", "smsNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushNotifications">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Send browser push notifications</p>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={settings.notifications.pushNotifications}
                        onCheckedChange={(checked) => updateSetting("notifications", "pushNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="systemAlerts">System Alerts</Label>
                        <p className="text-sm text-muted-foreground">Critical system notifications</p>
                      </div>
                      <Switch
                        id="systemAlerts"
                        checked={settings.notifications.systemAlerts}
                        onCheckedChange={(checked) => updateSetting("notifications", "systemAlerts", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="userRegistration">User Registration</Label>
                        <p className="text-sm text-muted-foreground">Notify on new user registrations</p>
                      </div>
                      <Switch
                        id="userRegistration"
                        checked={settings.notifications.userRegistration}
                        onCheckedChange={(checked) => updateSetting("notifications", "userRegistration", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="serviceUpdates">Service Updates</Label>
                        <p className="text-sm text-muted-foreground">Notify on service status changes</p>
                      </div>
                      <Switch
                        id="serviceUpdates"
                        checked={settings.notifications.serviceUpdates}
                        onCheckedChange={(checked) => updateSetting("notifications", "serviceUpdates", checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>Customize the look and feel of the platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="theme">Theme</Label>
                      <Select
                        value={settings.appearance.theme}
                        onValueChange={(value) => updateSetting("appearance", "theme", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="auto">Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <Input
                        id="primaryColor"
                        type="color"
                        value={settings.appearance.primaryColor}
                        onChange={(e) => updateSetting("appearance", "primaryColor", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="logoUrl">Logo URL</Label>
                      <Input
                        id="logoUrl"
                        value={settings.appearance.logoUrl}
                        onChange={(e) => updateSetting("appearance", "logoUrl", e.target.value)}
                        placeholder="https://example.com/logo.png"
                      />
                    </div>
                    <div>
                      <Label htmlFor="faviconUrl">Favicon URL</Label>
                      <Input
                        id="faviconUrl"
                        value={settings.appearance.faviconUrl}
                        onChange={(e) => updateSetting("appearance", "faviconUrl", e.target.value)}
                        placeholder="https://example.com/favicon.ico"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="customCSS">Custom CSS</Label>
                    <Textarea
                      id="customCSS"
                      value={settings.appearance.customCSS}
                      onChange={(e) => updateSetting("appearance", "customCSS", e.target.value)}
                      placeholder="/* Custom CSS styles */"
                      rows={6}
                      className="font-mono"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Integrations Settings */}
            <TabsContent value="integrations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Third-Party Integrations</CardTitle>
                  <CardDescription>Configure external service integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                      <Input
                        id="googleAnalytics"
                        value={settings.integrations.googleAnalytics}
                        onChange={(e) => updateSetting("integrations", "googleAnalytics", e.target.value)}
                        placeholder="GA-XXXXXXXXX-X"
                      />
                    </div>
                    <div>
                      <Label htmlFor="googleMaps">Google Maps API Key</Label>
                      <Input
                        id="googleMaps"
                        value={settings.integrations.googleMaps}
                        onChange={(e) => updateSetting("integrations", "googleMaps", e.target.value)}
                        placeholder="AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="paymentGateway">Payment Gateway</Label>
                      <Select
                        value={settings.integrations.paymentGateway}
                        onValueChange={(value) => updateSetting("integrations", "paymentGateway", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stripe">Stripe</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="square">Square</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="emailProvider">Email Provider</Label>
                      <Select
                        value={settings.integrations.emailProvider}
                        onValueChange={(value) => updateSetting("integrations", "emailProvider", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sendgrid">SendGrid</SelectItem>
                          <SelectItem value="mailgun">Mailgun</SelectItem>
                          <SelectItem value="ses">Amazon SES</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="smsProvider">SMS Provider</Label>
                    <Select
                      value={settings.integrations.smsProvider}
                      onValueChange={(value) => updateSetting("integrations", "smsProvider", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="twilio">Twilio</SelectItem>
                        <SelectItem value="nexmo">Nexmo</SelectItem>
                        <SelectItem value="aws-sns">AWS SNS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
