import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Menu, 
  X, 
  User, 
  Plus,
  Home,
  Wrench,
  BookOpen,
  Heart,
  Camera,
  Code,
  Car,
  Scissors,
  ChevronDown,
  Filter,
  Star,
  Verified
} from 'lucide-react';
import { motion } from 'framer-motion';

const HaazirLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Kolkata');
  const [category, setCategory] = useState('All Categories');

  const categories = [
    { icon: Home, name: 'Home Services', count: '2.5k+' },
    { icon: Wrench, name: 'Repair & Fix', count: '1.8k+' },
    { icon: BookOpen, name: 'Tutoring', count: '950+' },
    { icon: Heart, name: 'Health & Wellness', count: '750+' },
    { icon: Camera, name: 'Events', count: '600+' },
    { icon: Code, name: 'Tech Services', count: '450+' },
    { icon: Car, name: 'Auto Services', count: '800+' },
    { icon: Scissors, name: 'Beauty', count: '350+' },
  ];

  const featuredServices = [
    {
      title: 'AC Repair & Service',
      provider: 'RamTech Services',
      rating: 4.8,
      reviews: 234,
      price: '₹299',
      location: '2.5 km away',
      verified: true,
      image: 'bg-blue-100'
    },
    {
      title: 'Home Cleaning',
      provider: 'CleanPro',
      rating: 4.9,
      reviews: 567,
      price: '₹199/hr',
      location: '1.2 km away',
      verified: true,
      image: 'bg-green-100'
    },
    {
      title: 'Mathematics Tutor',
      provider: 'Priya Sharma',
      rating: 4.7,
      reviews: 89,
      price: '₹500/hr',
      location: '800m away',
      verified: true,
      image: 'bg-purple-100'
    },
    {
      title: 'Plumber Services',
      provider: 'QuickFix Pro',
      rating: 4.6,
      reviews: 156,
      price: '₹150/hr',
      location: '3.1 km away',
      verified: true,
      image: 'bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header - Navy Blue Design */}
      <header className="bg-blue-900 shadow-lg border-b border-blue-800">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-3xl font-semibold text-white tracking-tight">haazir</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-blue-200 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200">Browse Services</a>
              <a href="#" className="text-blue-200 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200">How it Works</a>
              <a href="#" className="text-blue-200 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200">Help</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-5 py-2.5 text-blue-200 hover:text-white font-medium text-sm transition-colors duration-200">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Plus className="w-4 h-4" />
                <span>Post Service</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-blue-200 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700">
            <div className="px-6 py-4 space-y-3">
              <a href="#" className="block text-blue-200 hover:text-white font-medium text-sm">Browse Services</a>
              <a href="#" className="block text-blue-200 hover:text-white font-medium text-sm">How it Works</a>
              <a href="#" className="block text-blue-200 hover:text-white font-medium text-sm">Help</a>
              <hr className="border-blue-600" />
              <button className="flex items-center space-x-2 text-blue-200 hover:text-white font-medium text-sm">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm">
                <Plus className="w-4 h-4" />
                <span>Post Service</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Section - Premium Style */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="w-full px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location Dropdown */}
            <div className="relative">
              <button className="flex items-center justify-between w-full md:w-52 px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 transition-all duration-200 shadow-sm">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-700 mr-3" />
                  <span className="text-blue-900 font-medium">{location}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-blue-500" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
              <input
                type="text"
                placeholder="What service are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-36 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 transition-all duration-200 shadow-sm font-medium"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-2 rounded-lg font-medium hover:from-blue-800 hover:to-blue-900 transition-all duration-200 shadow-lg">
                Search
              </button>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button className="flex items-center justify-between w-full md:w-44 px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 transition-all duration-200 shadow-sm">
                <span className="text-blue-900 truncate font-medium">{category}</span>
                <ChevronDown className="w-4 h-4 text-blue-500 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-blue-900 mb-6">Browse by Category</h2>
              <div className="space-y-2">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      className="w-full flex items-center justify-between p-4 hover:bg-blue-50 rounded-xl transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center">
                        <IconComponent className="w-5 h-5 text-blue-600 mr-4 group-hover:text-blue-700 transition-colors" />
                        <span className="text-blue-900 font-medium">{cat.name}</span>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">{cat.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mt-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Why Choose Haazir?</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Verified className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Verified Providers</p>
                    <p className="text-sm text-blue-600">All service providers verified</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-sm">0%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">No Commission</p>
                    <p className="text-sm text-blue-600">Direct contact, no fees</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Local Services</p>
                    <p className="text-sm text-blue-600">Find nearby providers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Bento Grid */}
          <div className="lg:col-span-3">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 rounded-2xl p-10 text-white mb-10 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Find Local Services Near You
              </h1>
              <p className="text-xl opacity-90 mb-8 font-medium">
                Connect directly with trusted service providers. No middleman, no commission.
              </p>
              <div className="flex items-center space-x-8 text-sm font-medium">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>10,000+ Providers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>50,000+ Services Booked</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  <span>8 Cities</span>
                </div>
              </div>
            </div>

            {/* Services Near You */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-blue-900">Services Near You</h2>
                <button className="flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${service.image} rounded-xl flex items-center justify-center`}>
                        <div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                      </div>
                      {service.verified && (
                        <div className="flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                          <Verified className="w-3 h-3 mr-1.5" />
                          Verified
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-blue-600 mb-4 font-medium">{service.provider}</p>

                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-blue-900 ml-1.5">{service.rating}</span>
                        <span className="text-sm text-blue-600 ml-1">({service.reviews})</span>
                      </div>
                      <div className="flex items-center text-sm text-blue-600 font-medium">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {service.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-900">{service.price}</div>
                      <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                        Contact Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-blue-900 rounded-2xl p-10 text-center shadow-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to offer your services?
              </h2>
              <p className="text-blue-200 mb-8 text-lg font-medium">
                Join thousands of service providers already earning on Haazir
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Selling Your Services
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaazirLandingPage;