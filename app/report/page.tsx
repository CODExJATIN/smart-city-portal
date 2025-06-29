"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Camera,
  Upload,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Lightbulb,
  Car,
  TreePine,
  Trash2,
  Volume2,
  Shield,
} from "lucide-react"

export default function ReportIssue() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    location: "",
    priority: "",
    images: [],
  })

  const issueCategories = [
    { id: "infrastructure", label: "Infrastructure", icon: Wrench, description: "Roads, bridges, sidewalks" },
    { id: "lighting", label: "Street Lighting", icon: Lightbulb, description: "Broken or dim streetlights" },
    { id: "traffic", label: "Traffic & Parking", icon: Car, description: "Traffic signals, parking issues" },
    { id: "environment", label: "Environment", icon: TreePine, description: "Parks, trees, green spaces" },
    { id: "waste", label: "Waste Management", icon: Trash2, description: "Garbage collection, recycling" },
    { id: "noise", label: "Noise Pollution", icon: Volume2, description: "Excessive noise complaints" },
    { id: "safety", label: "Public Safety", icon: Shield, description: "Security concerns, vandalism" },
  ]

  const priorityLevels = [
    { value: "low", label: "Low Priority", description: "Non-urgent, can wait", color: "bg-green-100 text-green-800" },
    {
      value: "medium",
      label: "Medium Priority",
      description: "Should be addressed soon",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      value: "high",
      label: "High Priority",
      description: "Needs immediate attention",
      color: "bg-red-100 text-red-800",
    },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    setCurrentStep(5) // Success step
  }

  const progressPercentage = (currentStep / 4) * 100

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
            <a href="/report" className="text-sm font-medium text-primary">
              Report Issue
            </a>
          </nav>
          <Button>Sign In</Button>
        </div>
      </header>

      <main className="container py-8">
        {currentStep <= 4 && (
          <>
            {/* Progress Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">Report an Issue</h1>
                <Badge variant="outline">Step {currentStep} of 4</Badge>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Category</span>
                <span>Details</span>
                <span>Location</span>
                <span>Review</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {currentStep === 1 && "Select Issue Category"}
                    {currentStep === 2 && "Describe the Issue"}
                    {currentStep === 3 && "Location & Priority"}
                    {currentStep === 4 && "Review & Submit"}
                  </CardTitle>
                  <CardDescription>
                    {currentStep === 1 && "Choose the category that best describes your issue"}
                    {currentStep === 2 && "Provide detailed information about the problem"}
                    {currentStep === 3 && "Specify location and urgency level"}
                    {currentStep === 4 && "Review your report before submitting"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Category Selection */}
                  {currentStep === 1 && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {issueCategories.map((category) => (
                        <Card
                          key={category.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            formData.category === category.id ? "ring-2 ring-primary" : ""
                          }`}
                          onClick={() => setFormData({ ...formData, category: category.id })}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className="bg-primary/10 p-2 rounded-lg">
                                <category.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold">{category.label}</h3>
                                <p className="text-sm text-muted-foreground">{category.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Issue Details */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Issue Title</Label>
                        <Input
                          id="title"
                          placeholder="Brief description of the issue"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Detailed Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide as much detail as possible about the issue..."
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Upload Photos (Optional)</Label>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <Camera className="h-8 w-8 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              Drag and drop photos here, or click to browse
                            </p>
                            <Button variant="outline" size="sm">
                              <Upload className="h-4 w-4 mr-2" />
                              Choose Files
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Location & Priority */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <div className="flex space-x-2">
                          <Input
                            id="location"
                            placeholder="Enter address or landmark"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="flex-1"
                          />
                          <Button variant="outline">
                            <MapPin className="h-4 w-4 mr-2" />
                            Use GPS
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label>Priority Level</Label>
                        <div className="space-y-3 mt-2">
                          {priorityLevels.map((priority) => (
                            <Card
                              key={priority.value}
                              className={`cursor-pointer transition-all hover:shadow-sm ${
                                formData.priority === priority.value ? "ring-2 ring-primary" : ""
                              }`}
                              onClick={() => setFormData({ ...formData, priority: priority.value })}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-semibold">{priority.label}</h4>
                                    <p className="text-sm text-muted-foreground">{priority.description}</p>
                                  </div>
                                  <Badge className={priority.color}>{priority.label.split(" ")[0]}</Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3">Report Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category:</span>
                            <span>{issueCategories.find((c) => c.id === formData.category)?.label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Title:</span>
                            <span>{formData.title}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span>{formData.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Priority:</span>
                            <Badge className={priorityLevels.find((p) => p.value === formData.priority)?.color}>
                              {priorityLevels.find((p) => p.value === formData.priority)?.label}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">{formData.description}</p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium text-blue-900 dark:text-blue-100">Before submitting</p>
                            <p className="text-blue-700 dark:text-blue-200">
                              Please ensure all information is accurate. You'll receive a tracking number to monitor
                              progress.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                      Previous
                    </Button>

                    {currentStep < 4 ? (
                      <Button
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && !formData.category) ||
                          (currentStep === 2 && (!formData.title || !formData.description)) ||
                          (currentStep === 3 && (!formData.location || !formData.priority))
                        }
                      >
                        Next
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit}>Submit Report</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Success Step */}
        {currentStep === 5 && (
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-green-100 p-4 rounded-full">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-2">Report Submitted Successfully!</h2>
                    <p className="text-muted-foreground">Your issue has been reported and assigned tracking number</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">#RPT-2024-001234</div>
                    <p className="text-sm text-muted-foreground">Save this number to track your report status</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">Expected Response</h4>
                      <p className="text-blue-700 dark:text-blue-200">Within 2-3 business days</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                      <h4 className="font-semibold text-green-900 dark:text-green-100">Status Updates</h4>
                      <p className="text-green-700 dark:text-green-200">Via email & SMS</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">Track Report Status</Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => {
                        setCurrentStep(1)
                        setFormData({
                          category: "",
                          title: "",
                          description: "",
                          location: "",
                          priority: "",
                          images: [],
                        })
                      }}
                    >
                      Report Another Issue
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
