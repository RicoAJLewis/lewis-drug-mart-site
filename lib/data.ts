export const pharmacyInfo = {
  name: 'Lewis Drug Mart',
  tagline: 'Your Trusted Community Pharmacy in Barbados',
  description: 'A local pharmacy dedicated to providing friendly service, trusted guidance, and convenient care to the Barbados community.',
  rating: 4.6,
  reviewCount: 77,
  phone: '+1 246-435-8090',
  address: 'Lewis Tower, Highway 7, Christ Church, Bridgetown District BB15156',
  email: 'info@lewisdrugmart.bb',
  instagram: 'https://www.instagram.com/lewisdrugmart',
  latitude: 13.1939,
  longitude: -59.5432,
  accessible: true,
  statusText: 'Open',
  closeTime: '5:30 PM',
}

export const businessHours = [
  { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '10:00 AM', close: '4:00 PM' },
  { day: 'Sunday', open: 'Closed', close: '' },
]

// National/public holidays (local dates) where the business is closed.
// Dates are YYYY-MM-DD in local Barbados calendar. Update as needed.
export const nationalHolidays = [
  '2026-01-01', // New Year's Day
  '2026-01-21', // Errol Barrow Day
  '2026-04-03', // Good Friday (2026)
  '2026-04-06', // Easter Monday (2026)
  '2026-05-01', // Labour Day
  '2026-05-25', // Whit Monday / Pentecost Monday (2026)
  '2026-08-01', // Emancipation Day
  '2026-11-30', // Independence Day
  '2026-12-25', // Christmas Day
  '2026-12-26', // Boxing Day
]

export const services = [
  {
    id: 1,
    name: 'Prescription Dispensing',
    description: 'Fast, accurate, and reliable prescription filling service with careful attention to detail.',
    icon: 'Pill',
  },
  {
    id: 2,
    name: 'Medication Guidance',
    description: 'Expert pharmacist guidance on medications, dosages, interactions, and side effects.',
    icon: 'BookOpen',
  },
  {
    id: 3,
    name: 'Over-the-Counter Medications',
    description: 'Wide selection of OTC medications for common ailments and health concerns.',
    icon: 'Package',
  },
  {
    id: 4,
    name: 'Vitamins & Wellness',
    description: 'Premium vitamins, supplements, and wellness products for your health goals.',
    icon: 'Heart',
  },
  {
    id: 5,
    name: 'Health Essentials',
    description: 'First aid supplies, medical devices, and essential health care items.',
    icon: 'Shield',
  },
  {
    id: 6,
    name: 'Personal Care Products',
    description: 'Skincare, hygiene products, and personal wellness items.',
    icon: 'Sparkles',
  },
  {
    id: 7,
    name: 'In-Store Support',
    description: 'Friendly assistance and expert advice every step of your shopping experience.',
    icon: 'Users',
  },
  {
    id: 8,
    name: 'Accessible Shopping',
    description: 'Fully accessible pharmacy designed for all community members.',
    icon: 'Accessibility',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Margaret Chen',
    role: 'Regular Customer',
    text: 'The staff here is incredibly friendly and knowledgeable. They took time to explain how to use my new medication and answered all my questions.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Alleyne',
    role: 'Community Member',
    text: "I've been using Lewis Drug Mart for over five years. The pharmacist really knows me and my health needs. I trust their service completely.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Yvonne Thompson',
    role: 'Local Resident',
    text: 'Convenient location, fair prices, and excellent customer service. This is the pharmacy I recommend to all my friends and family.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Williams',
    role: 'Prescription Customer',
    text: "My prescriptions are always filled accurately and promptly. The team's attention to detail gives me confidence in my medication care.",
    rating: 4,
  },
  {
    id: 5,
    name: 'Simone Grant',
    role: 'Community Supporter',
    text: "Love the welcoming atmosphere here. They go above and beyond to help, and they truly care about their customers' health and wellness.",
    rating: 5,
  },
]

export const faqs = [
  {
    id: 1,
    question: 'How can I refill my prescription?',
    answer: 'You can refill your prescription by calling us at +1 246-435-8090, visiting our store in person, or using our online prescription refill form. Our team will process your refill promptly.',
  },
  {
    id: 2,
    question: 'What should I do if I have medication questions?',
    answer: 'Our knowledgeable pharmacist is always available to answer your questions about medications, dosages, interactions, and side effects. Feel free to speak with us in person or over the phone.',
  },
  {
    id: 3,
    question: 'Do you carry vitamins and supplements?',
    answer: 'Yes, we carry a wide selection of quality vitamins, supplements, and wellness products. Our staff can recommend products based on your specific health needs.',
  },
  {
    id: 4,
    question: 'Are you accessible for customers with disabilities?',
    answer: 'Absolutely. Our pharmacy is fully accessible with wheelchair access, accessible restrooms, and a welcoming environment for all community members.',
  },
  {
    id: 5,
    question: 'What are your business hours?',
    answer: 'We are open Monday through Friday 9:00 AM – 6:00 PM, Saturday 10:00 AM – 4:00 PM, and closed Sundays. We also offer extended hours during peak times.',
  },
  {
    id: 6,
    question: 'Can I get directions to your store?',
    answer: 'We are located at Highway 7, Bridgetown, Christ Church, Barbados. You can use our map on the Contact page or call us for detailed directions.',
  },
]

export const whyChooseUs = [
  {
    id: 1,
    title: 'Community Trust',
    description: 'Trusted by locals for years with a 4.6-star rating and over 77 five-star reviews.',
    icon: 'Users',
  },
  {
    id: 2,
    title: 'Expert Guidance',
    description: 'Our skilled pharmacist provides personalized medication guidance and expert health support.',
    icon: 'BookOpen',
  },
  {
    id: 3,
    title: 'Friendly Service',
    description: 'A warm, welcoming atmosphere where customers feel valued and understood.',
    icon: 'Smile',
  },
  {
    id: 4,
    title: 'Convenient Location',
    description: 'Easy access on Highway 7 with ample parking and nearby public transportation.',
    icon: 'MapPin',
  },
  {
    id: 5,
    title: 'Full Range of Products',
    description: 'Everything from prescription medications to vitamins, wellness, and personal care items.',
    icon: 'Package',
  },
  {
    id: 6,
    title: 'Fully Accessible',
    description: 'Designed and operated with accessibility for all members of our community.',
    icon: 'Accessibility',
  },
]

export const reviewHighlights = [
  'Customers appreciate the time taken to explain medications clearly.',
  'Friendly and welcoming staff make the experience comfortable.',
  'Convenient location with medications and everyday essentials available.',
  'Knowledgeable pharmacist who truly cares about customer health.',
  'Professional and accurate prescription service.',
]
