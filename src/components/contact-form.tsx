"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  companySize?: string;
  message?: string;
  general?: string;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    companySize: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.toLowerCase().includes('@gmail.com')) {
      newErrors.email = 'Please use a business email address (Gmail not allowed)';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.companySize.trim()) {
      newErrors.companySize = 'Company size is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmissionState('submitting');
    setErrors({});
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error occurred' }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      
      setSubmissionState('success');
      setFormData({ name: '', email: '', company: '', companySize: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionState('error');
      setErrors({ 
        general: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    }
  };

  if (submissionState === 'success') {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Message Sent Successfully!</h3>
              <p className="text-gray-600 mt-2">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
            <Button 
              onClick={() => setSubmissionState('idle')}
              variant="outline"
              className="mt-4"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Get in Touch</CardTitle>
        <CardDescription className="text-gray-600">
          Ready to transform your customer feedback into actionable insights? Let's discuss how Coldran can help your business grow.
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-red-700 text-sm">{errors.general}</span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors bg-white ${
                  errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="John Doe"
                disabled={submissionState === 'submitting'}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors bg-white ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="john@company.com"
                disabled={submissionState === 'submitting'}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-gray-700">
              Company Name *
            </Label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors bg-white ${
                errors.company ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Acme Inc."
              disabled={submissionState === 'submitting'}
            />
            {errors.company && (
              <p className="text-red-600 text-xs mt-1">{errors.company}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companySize" className="text-sm font-medium text-gray-700">
              Company Size (Engineers) *
            </Label>
            <select
              id="companySize"
              value={formData.companySize}
              onChange={(e) => handleInputChange('companySize', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors bg-white ${
                errors.companySize ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              disabled={submissionState === 'submitting'}
            >
              <option value="">Select company size...</option>
              <option value="1-49">1-49 engineers</option>
              <option value="50-99">50-99 engineers</option>
              <option value="100-249">100-249 engineers</option>
              <option value="250-999">250-999 engineers</option>
              <option value="1000+">1,000+ engineers</option>
            </select>
            {errors.companySize && (
              <p className="text-red-600 text-xs mt-1">{errors.companySize}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message *
            </Label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={5}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-vertical bg-white ${
                errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Tell us about your business needs, current challenges with customer feedback, or any specific questions about Coldran..."
              disabled={submissionState === 'submitting'}
            />
            {errors.message && (
              <p className="text-red-600 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={submissionState === 'submitting'}
            size="lg"
            variant="gray"
          >
            {submissionState === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy and will never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}