"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileText,
  Upload,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  AlertCircle,
  Star,
} from "lucide-react"

interface ServiceApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    id: number
    title: string
    description: string
    fee: string
    processingTime: string
    rating: number
    icon: any
    color: string
  } | null
}

export function ServiceApplicationModal({ isOpen, onClose, service }: ServiceApplicationModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      citizenId: "",
    },
    serviceDetails: {
      applicationReason: "",
      preferredDate: "",
      additionalNotes: "",
      urgency: "",
    },
    documents: [],
    payment: {
      method: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  })

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

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setCurrentStep(5) // Success step
  }

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  const progressPercentage = (currentStep / 4) * 100

  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className={`${service.color} w-10 h-10 rounded-xl flex items-center justify-center`}>
              <service.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div>Apply for {service.title}</div>
              <div className="text-sm font-normal text-muted-foreground flex items-center space-x-4 mt-1">
                <span className="flex items-center space-x-1">
                  <DollarSign className="h-3 w-3" />
                  <span>{service.fee}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{service.processingTime}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span>{service.rating}</span>
                </span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        {currentStep <= 4 && (
          <div className="space-y-6">
            {/* Progress Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Application Progress</span>
                <Badge variant="outline">Step {currentStep} of 4</Badge>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Personal Info</span>
                <span>Service Details</span>
                <span>Documents</span>
                <span>Payment</span>
              </div>
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </CardTitle>
                  <CardDescription>Please provide your personal details for the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Full Name</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.personalInfo.fullName}
                        onChange={(e) => handleInputChange("personalInfo", "fullName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="citizenId" className="flex items-center space-x-2">
                        <FileText className="h-4 w-4" />
                        <span>Citizen ID</span>
                      </Label>
                      <Input
                        id="citizenId"
                        placeholder="Enter your citizen ID"
                        value={formData.personalInfo.citizenId}
                        onChange={(e) => handleInputChange("personalInfo", "citizenId", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.personalInfo.email}
                        onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number</span>
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.personalInfo.phone}
                        onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Address</span>
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address"
                      value={formData.personalInfo.address}
                      onChange={(e) => handleInputChange("personalInfo", "address", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Service Details */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Service Details</span>
                  </CardTitle>
                  <CardDescription>Provide specific details about your service request</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>Reason for Application</span>
                    </Label>
                    <Textarea
                      id="reason"
                      placeholder="Please explain why you need this service..."
                      rows={3}
                      value={formData.serviceDetails.applicationReason}
                      onChange={(e) => handleInputChange("serviceDetails", "applicationReason", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Preferred Date</span>
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.serviceDetails.preferredDate}
                        onChange={(e) => handleInputChange("serviceDetails", "preferredDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Urgency Level</span>
                      </Label>
                      <Select
                        value={formData.serviceDetails.urgency}
                        onValueChange={(value) => handleInputChange("serviceDetails", "urgency", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Standard Processing</SelectItem>
                          <SelectItem value="medium">Medium - Priority Processing</SelectItem>
                          <SelectItem value="high">High - Urgent Processing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>Additional Notes</span>
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information or special requirements..."
                      rows={2}
                      value={formData.serviceDetails.additionalNotes}
                      onChange={(e) => handleInputChange("serviceDetails", "additionalNotes", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Documents */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="h-5 w-5" />
                    <span>Required Documents</span>
                  </CardTitle>
                  <CardDescription>Upload the necessary documents for your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Identity Proof (Required)</p>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Address Proof (Required)</p>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Choose File
                      </Button>
                    </div>

                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Supporting Documents (Optional)</p>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-900 dark:text-blue-100">Document Requirements</p>
                        <ul className="text-blue-700 dark:text-blue-200 mt-1 space-y-1">
                          <li>• Files must be in PDF, JPG, or PNG format</li>
                          <li>• Maximum file size: 5MB per document</li>
                          <li>• Documents should be clear and readable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Information</span>
                  </CardTitle>
                  <CardDescription>Complete your payment to process the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Service Fee:</span>
                      <span className="text-lg font-bold">{service.fee}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Processing Fee:</span>
                      <span>$2.50</span>
                    </div>
                    <div className="border-t mt-2 pt-2 flex justify-between items-center font-bold">
                      <span>Total Amount:</span>
                      <span className="text-lg">
                        {service.fee === "Free"
                          ? "Free"
                          : `$${(Number.parseFloat(service.fee.replace("$", "")) + 2.5).toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  {service.fee !== "Free" && (
                    <>
                      <div className="space-y-2">
                        <Label className="flex items-center space-x-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Payment Method</span>
                        </Label>
                        <Select
                          value={formData.payment.method}
                          onValueChange={(value) => handleInputChange("payment", "method", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="credit">Credit Card</SelectItem>
                            <SelectItem value="debit">Debit Card</SelectItem>
                            <SelectItem value="bank">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.payment.cardNumber}
                          onChange={(e) => handleInputChange("payment", "cardNumber", e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.payment.expiryDate}
                            onChange={(e) => handleInputChange("payment", "expiryDate", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.payment.cvv}
                            onChange={(e) => handleInputChange("payment", "cvv", e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Submit Application</span>
                    </div>
                  )}
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Success Step */}
        {currentStep === 5 && (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground">Your application has been received and is being processed</p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">
                #APP-2024-{String(Math.floor(Math.random() * 10000)).padStart(4, "0")}
              </div>
              <p className="text-sm text-muted-foreground">Save this application number for tracking</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>Processing Time</span>
                </h4>
                <p className="text-blue-700 dark:text-blue-200">{service.processingTime}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>Updates</span>
                </h4>
                <p className="text-green-700 dark:text-green-200">Via email & SMS</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1" onClick={onClose}>
                <FileText className="h-4 w-4 mr-2" />
                Track Application
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
