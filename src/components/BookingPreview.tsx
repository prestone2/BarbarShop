import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, User, CreditCard, CheckCircle } from "lucide-react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

const services = [
  { name: "Classic Haircut", price: 800, duration: "30 min" },
  { name: "Premium Cut & Style", price: 1200, duration: "45 min" },
  { name: "Beard Trim & Shape", price: 600, duration: "20 min" },
  { name: "Complete Grooming Package", price: 2000, duration: "75 min" },
];

const barbers = [
  { name: "James Oness", available: true },
  { name: "Michael Thompson", available: true },
  { name: "David Wilson", available: false },
  { name: "Robert Johnson", available: true },
];

const BookingPreview = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const selectedServiceData = services.find(service => service.name === selectedService);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="gold-gradient bg-clip-text text-transparent">Appointment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your preferred service, barber, and time slot to schedule your visit. 
            Our booking system makes it easy to secure your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Selection */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  Select Service
                </CardTitle>
                <CardDescription>Choose the service you'd like to book</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.name} value={service.name}>
                        <div className="flex items-center justify-between w-full">
                          <span>{service.name}</span>
                          <div className="flex items-center gap-2 ml-4">
                            <Badge variant="secondary">KSh {service.price}</Badge>
                            <Badge variant="outline">{service.duration}</Badge>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Barber Selection */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  Select Barber
                </CardTitle>
                <CardDescription>Choose your preferred barber</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedBarber} onValueChange={setSelectedBarber}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Choose a barber" />
                  </SelectTrigger>
                  <SelectContent>
                    {barbers.map((barber) => (
                      <SelectItem 
                        key={barber.name} 
                        value={barber.name}
                        disabled={!barber.available}
                      >
                        <div className="flex items-center gap-2">
                          <span>{barber.name}</span>
                          {barber.available ? (
                            <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                              Available
                            </Badge>
                          ) : (
                            <Badge variant="secondary">Unavailable</Badge>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Date Selection */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                  </div>
                  Select Date
                </CardTitle>
                <CardDescription>Pick your preferred appointment date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                  className="rounded-md border border-border bg-background"
                />
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  Select Time
                </CardTitle>
                <CardDescription>Choose your preferred time slot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className="h-10"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="card-gradient border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedService && (
                  <div className="border-b border-border pb-4">
                    <div className="font-medium mb-1">Service</div>
                    <div className="text-sm text-muted-foreground">{selectedService}</div>
                    {selectedServiceData && (
                      <div className="flex justify-between mt-2 text-sm">
                        <span>Duration: {selectedServiceData.duration}</span>
                        <span className="font-medium">KSh {selectedServiceData.price}</span>
                      </div>
                    )}
                  </div>
                )}

                {selectedBarber && (
                  <div className="border-b border-border pb-4">
                    <div className="font-medium mb-1">Barber</div>
                    <div className="text-sm text-muted-foreground">{selectedBarber}</div>
                  </div>
                )}

                {selectedDate && (
                  <div className="border-b border-border pb-4">
                    <div className="font-medium mb-1">Date</div>
                    <div className="text-sm text-muted-foreground">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                )}

                {selectedTime && (
                  <div className="border-b border-border pb-4">
                    <div className="font-medium mb-1">Time</div>
                    <div className="text-sm text-muted-foreground">{selectedTime}</div>
                  </div>
                )}

                {selectedServiceData && (
                  <div className="pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">KSh {selectedServiceData.price}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-3 pt-4">
                  <Button 
                    variant="default" 
                    className="w-full"
                    disabled={!selectedService || !selectedBarber || !selectedDate || !selectedTime}
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to Payment
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    You can cancel or reschedule up to 2 hours before your appointment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPreview;