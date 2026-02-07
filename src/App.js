import { useState } from 'react';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [formData, setFormData] = useState({
    curriculum: '',
    grade: '',
    field: '',
    subject: '',
    date: '',
    time: ''
  });

  const curriculums = ['CBSE', 'State Board', 'ICSE'];
  const grades = ['6th', '7th', '8th', '9th', '10th', '11th', '12th'];
  const fields = ['Science', 'Commerce', 'Arts'];
  
  const subjects = {
    Science: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    Commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
    Arts: ['History', 'Geography', 'Political Science', 'Economics', 'Sociology']
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted! Navigating to teachers page...');
    console.log('Current formData:', formData);
    setCurrentPage('teachers');
  };

  const handleBookTeacher = (teacher) => {
    console.log('Booking teacher:', teacher);
    setSelectedTeacher(teacher);
    setCurrentPage('loading');
    
    // Wait 10 seconds then show payment page
    setTimeout(() => {
      setCurrentPage('payment');
    }, 10000);
  };

  // Pseudo teacher data
  const teachersData = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      experience: "8 years",
      rating: 4.8,
      hourlyRate: 500,
      availability: "Available Today",
      education: "PhD in Physics, IIT Delhi",
      specialization: "Mechanics, Thermodynamics",
      image: "👨‍🏫"
    },
    {
      id: 2,
      name: "Prof. Priya Sharma",
      subject: "Mathematics",
      experience: "12 years",
      rating: 4.9,
      hourlyRate: 600,
      availability: "Available Tomorrow",
      education: "M.Sc Mathematics, Delhi University",
      specialization: "Calculus, Algebra, Trigonometry",
      image: "👩‍🏫"
    },
    {
      id: 3,
      name: "Mr. Amit Patel",
      subject: "Chemistry",
      experience: "6 years",
      rating: 4.7,
      hourlyRate: 450,
      availability: "Available Today",
      education: "M.Sc Chemistry, Mumbai University",
      specialization: "Organic Chemistry, Inorganic Chemistry",
      image: "👨‍🔬"
    },
    {
      id: 4,
      name: "Ms. Sneha Reddy",
      subject: "Biology",
      experience: "10 years",
      rating: 4.9,
      hourlyRate: 550,
      availability: "Available This Week",
      education: "M.Sc Biotechnology, Bangalore University",
      specialization: "Genetics, Cell Biology, Ecology",
      image: "👩‍⚕️"
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      subject: "Mathematics",
      experience: "15 years",
      rating: 5.0,
      hourlyRate: 700,
      availability: "Available Tomorrow",
      education: "PhD Mathematics, IIT Bombay",
      specialization: "Advanced Calculus, Linear Algebra",
      image: "👨‍💼"
    }
  ];

  // Loading/Waiting Page
  if (currentPage === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 border-8 border-teal-200 border-t-teal-600 rounded-full animate-spin mx-auto"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing Your Booking...</h2>
          <p className="text-gray-600 mb-6">Please wait while we prepare your session with {selectedTeacher?.name}</p>
          <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{selectedTeacher?.image}</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">{selectedTeacher?.name}</h3>
                <p className="text-gray-600">{selectedTeacher?.subject}</p>
                <p className="text-teal-600 font-semibold">₹{selectedTeacher?.hourlyRate}/hour</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Redirecting to payment in a moment...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment Gateway Page
  if (currentPage === 'payment') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="px-8 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">SMB</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                  <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('teachers')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                ← Back to Teachers
              </button>
            </div>
          </div>
        </header>

        {/* Payment Content */}
        <main className="px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Booking Summary */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>
                
                {selectedTeacher && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                      <div className="text-5xl">{selectedTeacher.image}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{selectedTeacher.name}</h3>
                        <p className="text-sm text-gray-600">{selectedTeacher.subject}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-500 text-sm">⭐</span>
                          <span className="text-sm font-medium text-gray-700">{selectedTeacher.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 py-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subject</span>
                        <span className="font-semibold text-gray-900">{formData.subject}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date</span>
                        <span className="font-semibold text-gray-900">{formData.date || 'Not set'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time</span>
                        <span className="font-semibold text-gray-900">{formData.time || 'Not set'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold text-gray-900">1 hour</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-teal-600">₹{selectedTeacher.hourlyRate}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        alert('Payment Successful! (This is a demo)');
                        setCurrentPage('home');
                      }}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Pay ₹{selectedTeacher?.hourlyRate}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="text-sm text-gray-500">🔒 Secure payment powered by</span>
                    <span className="text-sm font-semibold text-gray-700">Razorpay</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Request a Teacher Page - Shows Inactive Teachers
  if (currentPage === 'request') {
    // Inactive teachers data
    const inactiveTeachersData = [
      {
        id: 6,
        name: "Dr. Anita Desai",
        subject: "English Literature",
        experience: "15 years",
        rating: 4.9,
        hourlyRate: 650,
        education: "PhD in English, Oxford University",
        specialization: "Shakespeare, Modern Literature",
        image: "👩‍🎓",
        lastActive: "2 months ago"
      },
      {
        id: 7,
        name: "Prof. Suresh Menon",
        subject: "Economics",
        experience: "10 years",
        rating: 4.8,
        hourlyRate: 550,
        education: "M.A Economics, LSE",
        specialization: "Microeconomics, Macroeconomics",
        image: "👨‍💼",
        lastActive: "3 weeks ago"
      },
      {
        id: 8,
        name: "Ms. Kavita Singh",
        subject: "Computer Science",
        experience: "7 years",
        rating: 4.7,
        hourlyRate: 700,
        education: "M.Tech Computer Science, IIT Madras",
        specialization: "Python, Data Structures, Web Development",
        image: "👩‍💻",
        lastActive: "1 month ago"
      },
      {
        id: 9,
        name: "Dr. Rohan Verma",
        subject: "History",
        experience: "12 years",
        rating: 4.9,
        hourlyRate: 600,
        education: "PhD in History, JNU",
        specialization: "Ancient India, World Wars",
        image: "👨‍🏫",
        lastActive: "6 weeks ago"
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="px-8 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">SMB</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                  <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('teachers')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                ← Back to Active Teachers
              </button>
            </div>
          </div>
        </header>

        {/* Inactive Teachers List */}
        <main className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Request an Inactive Teacher</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These teachers are part of SMB Tutorials but currently inactive. Click "Notify Teacher" to send them a request to become active again.
              </p>
            </div>

            {/* Inactive Teachers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inactiveTeachersData.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Teacher Header */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center relative">
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Inactive
                      </span>
                    </div>
                    <div className="text-6xl mb-3 opacity-70">{teacher.image}</div>
                    <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                    <p className="text-gray-600 font-medium">{teacher.subject}</p>
                  </div>

                  {/* Teacher Details */}
                  <div className="p-6">
                    {/* Rating and Experience */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-semibold text-gray-900">{teacher.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">{teacher.experience} exp.</span>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Education</p>
                      <p className="text-sm text-gray-600">{teacher.education}</p>
                    </div>

                    {/* Specialization */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Specialization</p>
                      <p className="text-sm text-gray-600">{teacher.specialization}</p>
                    </div>

                    {/* Last Active */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="text-sm text-gray-500">Last active: {teacher.lastActive}</span>
                    </div>

                    {/* Price and Notify Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="mb-3 text-center">
                        <span className="text-xl font-bold text-gray-900">₹{teacher.hourlyRate}</span>
                        <span className="text-sm text-gray-600">/hour</span>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedTeacher(teacher);
                          setCurrentPage('notify');
                        }}
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                      >
                        Notify Teacher
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Notify Teacher Form Page
  if (currentPage === 'notify') {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Header */}
        <header className="relative z-10 px-8 py-5 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">SMB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage('request')}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              ← Back to Inactive Teachers
            </button>
          </div>
        </header>

        {/* Notify Form Content */}
        <main className="relative z-10 flex items-center justify-center px-8 py-12">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Notify {selectedTeacher?.name}</h2>
              <p className="text-gray-600">Fill out this form and we'll notify the teacher about your request.</p>
            </div>

            {/* Teacher Preview Card */}
            {selectedTeacher && (
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{selectedTeacher.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{selectedTeacher.name}</h3>
                    <p className="text-gray-600">{selectedTeacher.subject}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">⭐</span>
                        <span className="text-sm font-medium text-gray-700">{selectedTeacher.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">{selectedTeacher.experience}</span>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm font-bold text-teal-600">₹{selectedTeacher.hourlyRate}/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
              {/* Your Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="10-digit number"
                        required
                        className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Requirements */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">What do you need help with? *</label>
                    <textarea
                      rows="3"
                      placeholder="Describe the topic or concept you need help with"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Schedule</label>
                    <select className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none">
                      <option value="">When would you like to start?</option>
                      <option value="asap">As soon as possible</option>
                      <option value="this-week">This week</option>
                      <option value="next-week">Next week</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
                    <textarea
                      rows="3"
                      placeholder="Any additional information for the teacher"
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={() => {
                  alert(`Notification sent to ${selectedTeacher?.name}! We'll contact you once the teacher responds.`);
                  setCurrentPage('teachers');
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Notification to Teacher
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll notify {selectedTeacher?.name} about your request and they'll contact you if interested.
              </p>
            </form>
          </div>
        </main>
      </div>
    );
  }

    if (currentPage === 'teachers') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="px-8 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">SMB</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                  <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('form')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                ← Back to Search
              </button>
            </div>
          </div>
        </header>

        {/* Teachers List */}
        <main className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Teachers</h2>
              <p className="text-gray-600">
                Showing teachers for <span className="font-semibold text-teal-600">{formData.subject || 'your subject'}</span>
                {formData.curriculum && ` • ${formData.curriculum}`}
                {formData.grade && ` • ${formData.grade}`}
              </p>
            </div>

            {/* Teachers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachersData.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Teacher Header */}
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 text-center">
                    <div className="text-6xl mb-3">{teacher.image}</div>
                    <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                    <p className="text-teal-600 font-medium">{teacher.subject}</p>
                  </div>

                  {/* Teacher Details */}
                  <div className="p-6">
                    {/* Rating and Experience */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-semibold text-gray-900">{teacher.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">{teacher.experience} exp.</span>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Education</p>
                      <p className="text-sm text-gray-600">{teacher.education}</p>
                    </div>

                    {/* Specialization */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Specialization</p>
                      <p className="text-sm text-gray-600">{teacher.specialization}</p>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-green-600 font-medium">{teacher.availability}</span>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">₹{teacher.hourlyRate}</span>
                        <span className="text-sm text-gray-600">/hour</span>
                      </div>
                      <button 
                        onClick={() => handleBookTeacher(teacher)}
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Request Teacher Section - Bottom of Page */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-12 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Didn't find what you're looking for?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We have more teachers who are currently inactive. Request them and we'll notify them that you need their expertise!
                </p>
                <button
                  onClick={() => setCurrentPage('request')}
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request a Teacher
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (currentPage === 'form') {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Header */}
        <header className="relative z-10 px-8 py-5 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">SMB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
              <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <main className="relative z-10 flex items-center justify-center px-8" style={{minHeight: 'calc(100vh - 120px)'}}>
          <div className="max-w-2xl w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tell Us What You Need</h2>
              <p className="text-gray-600">We'll find the perfect teacher for you</p>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              {/* Curriculum */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Curriculum</label>
                <div className="grid grid-cols-3 gap-3">
                  {curriculums.map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setFormData({...formData, curriculum: curr})}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        formData.curriculum === curr
                          ? 'border-teal-600 bg-teal-50 text-teal-600'
                          : 'border-gray-200 hover:border-teal-300 text-gray-700'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade */}
              {formData.curriculum && (
                <div className="mb-6 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Class / Grade</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                  >
                    <option value="">Select your grade</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Core Field */}
              {formData.grade && (
                <div className="mb-6 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Core Field</label>
                  <div className="grid grid-cols-3 gap-3">
                    {fields.map((field) => (
                      <button
                        key={field}
                        type="button"
                        onClick={() => setFormData({...formData, field: field, subject: ''})}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                          formData.field === field
                            ? 'border-teal-600 bg-teal-50 text-teal-600'
                            : 'border-gray-200 hover:border-teal-300 text-gray-700'
                        }`}
                      >
                        {field}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Subject */}
              {formData.field && (
                <div className="mb-6 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                  >
                    <option value="">Select subject</option>
                    {subjects[formData.field].map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Date and Time */}
              {formData.subject && (
                <div className="mb-6 animate-fadeIn">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-semibold text-gray-700">Preferred Date & Time</label>
                    <button
                      type="button"
                      onClick={() => {
                        const now = new Date();
                        const currentDate = now.toISOString().split('T')[0];
                        const currentTime = now.toTimeString().slice(0, 5);
                        setFormData({...formData, date: currentDate, time: currentTime});
                      }}
                      className="bg-teal-100 hover:bg-teal-200 text-teal-700 font-semibold px-4 py-1 rounded-lg text-sm transition-all"
                    >
                      Now
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {formData.date && formData.time && (
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Button clicked!');
                    setCurrentPage('teachers');
                  }}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl animate-fadeIn"
                >
                  Find Available Teachers →
                </button>
              )}
            </form>

            {/* Request Custom Subject Section - Show after Grade selection (if field not selected) */}
            {formData.grade && !formData.field && (
              <div className="mt-12 text-center animate-fadeIn">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Looking for a different field?</h3>
                  <p className="text-gray-600 mb-6">
                    Can't find your field in our list? Let us know what you're looking for and we'll help you find the right teacher.
                  </p>
                  <button
                    onClick={() => setCurrentPage('custom-request')}
                    className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-all"
                  >
                    Request a Custom Subject
                  </button>
                </div>
              </div>
            )}

            {/* Request Custom Subject Section - Show after Field selection (if subject not selected) */}
            {formData.field && !formData.subject && (
              <div className="mt-12 text-center animate-fadeIn">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Looking for a different subject?</h3>
                  <p className="text-gray-600 mb-6">
                    Can't find your subject in our list? Let us know what you're looking for and we'll help you find the right teacher.
                  </p>
                  <button
                    onClick={() => setCurrentPage('custom-request')}
                    className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-all"
                  >
                    Request a Custom Subject
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    );
  }

  // Custom Subject Request Page
  if (currentPage === 'custom-request') {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Header */}
        <header className="relative z-10 px-8 py-5 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">SMB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage('form')}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              ← Back to Form
            </button>
          </div>
        </header>

        {/* Custom Request Form Content */}
        <main className="relative z-10 flex items-center justify-center px-8 py-12">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Custom Subject</h2>
              <p className="text-gray-600">Tell us what subject you're looking for and we'll find the perfect teacher for you.</p>
            </div>

            <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
              {/* Subject/Topic */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject or Topic *</label>
                <input
                  type="text"
                  placeholder="e.g., Mandarin, Machine Learning, Digital Marketing"
                  required
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              {/* Specific Requirements */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What do you want to learn? *</label>
                <textarea
                  rows="4"
                  placeholder="Describe what you want to learn and any specific topics or skills you need"
                  required
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Current Level</label>
                <select className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none">
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (Just starting)</option>
                  <option value="intermediate">Intermediate (Some knowledge)</option>
                  <option value="advanced">Advanced (Want to master)</option>
                </select>
              </div>

              {/* Preferred Schedule */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Schedule</label>
                <select className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none">
                  <option value="">Select your availability</option>
                  <option value="weekday-morning">Weekday Mornings</option>
                  <option value="weekday-afternoon">Weekday Afternoons</option>
                  <option value="weekday-evening">Weekday Evenings</option>
                  <option value="weekend">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range (per hour)</label>
                <select className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none">
                  <option value="">Select your budget</option>
                  <option value="300-500">₹300 - ₹500</option>
                  <option value="500-700">₹500 - ₹700</option>
                  <option value="700-1000">₹700 - ₹1000</option>
                  <option value="1000+">₹1000+</option>
                </select>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Contact Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="10-digit number"
                        required
                        className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={() => {
                  alert('Request submitted! Our team will review your request and get back to you within 24 hours with teacher recommendations.');
                  setCurrentPage('home');
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Custom Request
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll review your request and connect you with suitable teachers within 24 hours.
              </p>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Sign In Page
  if (currentPage === 'signin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          {/* Back to Home */}
          <div className="mb-6 text-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-2"
            >
              ← Back to Home
            </button>
          </div>

          {/* Sign In Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">SMB</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to continue learning</p>
            </div>

            {/* Gmail Sign In Button */}
            <button
              onClick={() => alert('Gmail Sign In will be implemented with Google OAuth')}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign in with email</span>
              </div>
            </div>

            {/* Email Sign In Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-teal-600 hover:text-teal-700 font-medium">
                  Forgot password?
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  alert('Sign in successful! (Demo)');
                  setCurrentPage('home');
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button 
                  onClick={() => setCurrentPage('signup')}
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sign Up Page
  if (currentPage === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          {/* Back to Sign In */}
          <div className="mb-6 text-center">
            <button 
              onClick={() => setCurrentPage('signin')}
              className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-2"
            >
              ← Back to Sign In
            </button>
          </div>

          {/* Sign Up Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">SMB</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">Start your learning journey today</p>
            </div>

            {/* Gmail Sign Up Button */}
            <button
              onClick={() => alert('Gmail Sign Up will be implemented with Google OAuth')}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with email</span>
              </div>
            </div>

            {/* Email Sign Up Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                />
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span className="text-sm text-gray-600">
                  I agree to the <button type="button" onClick={() => setCurrentPage('terms')} className="text-teal-600 hover:text-teal-700 underline">Terms of Service</button> and <button type="button" className="text-teal-600 hover:text-teal-700 underline">Privacy Policy</button>
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  alert('Account created successfully! (Demo)');
                  setCurrentPage('home');
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Create Account
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button 
                  onClick={() => setCurrentPage('signin')}
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tutor Sign Up Page
  if (currentPage === 'tutor-signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="px-8 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">SMB</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                  <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </header>

        {/* Tutor Signup Form */}
        <main className="px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">👨‍🏫</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Join as a Tutor</h2>
              <p className="text-lg text-gray-600">Start teaching and making a difference today</p>
            </div>

            <form className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Dr. John Doe"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Education & Qualifications */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Qualifications</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
                    <input
                      type="text"
                      placeholder="e.g., PhD in Physics, IIT Delhi"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subjects You Teach *</label>
                    <input
                      type="text"
                      placeholder="e.g., Physics, Chemistry, Mathematics"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Specialization</label>
                    <input
                      type="text"
                      placeholder="e.g., Mechanics, Thermodynamics"
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Teaching Preferences */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teaching Preferences</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Teaching Level</label>
                    <select className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none">
                      <option value="">Select level</option>
                      <option value="school">School (6th-12th)</option>
                      <option value="college">College/University</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Hourly Rate (₹) *</label>
                    <input
                      type="number"
                      placeholder="e.g., 500"
                      required
                      className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* About Yourself */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Yourself *</label>
                <textarea
                  rows="4"
                  placeholder="Share your teaching philosophy, experience, and what makes you a great tutor..."
                  required
                  className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Terms */}
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <span className="text-sm text-gray-600">
                  I agree to SMB Tutorials' <button type="button" onClick={() => setCurrentPage('terms')} className="text-teal-600 hover:text-teal-700 underline">Terms of Service</button> and <button type="button" onClick={() => setCurrentPage('terms')} className="text-teal-600 hover:text-teal-700 underline">Tutor Agreement</button>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={() => {
                  alert('Application submitted successfully! Our team will review your profile and contact you within 2-3 business days.');
                  setCurrentPage('home');
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>

              <p className="text-sm text-gray-500 text-center">
                Our team will review your application and contact you within 2-3 business days.
              </p>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Terms and Conditions Page
  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="px-8 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">SMB</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SMB Tutorials</h1>
                  <p className="text-xs text-teal-600 font-medium">One Student, One Teacher</p>
                </div>
              </div>
              <button 
                onClick={() => window.history.back()}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                ← Back
              </button>
            </div>
          </div>
        </header>

        {/* Terms Content */}
        <main className="px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
              <p className="text-gray-600 mb-8">Last updated: February 7, 2026</p>

              {/* Refund Policy */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Request a Refund</h3>
                  <p className="text-gray-700 mb-3">To initiate a refund, please email <a href="mailto:support@smbtutorial.com" className="text-teal-600 hover:text-teal-700 font-medium">support@smbtutorial.com</a> with your:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                    <li>Full Name</li>
                    <li>Order Number</li>
                    <li>Reason for the refund (this helps us improve our content!)</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility for Refunds</h3>
                  <p className="text-gray-700 mb-3">We offer a 14-day money-back guarantee for most courses, subject to the following "Fair Use" conditions:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Consumption Limit:</strong> A refund request will only be honored if you have viewed or accessed less than 25% of the course content.</li>
                    <li><strong>Resource Access:</strong> If you have already downloaded supplemental materials (e.g., PDFs, proprietary code, or worksheets), the course is no longer eligible for a refund.</li>
                    <li><strong>Timeframe:</strong> Requests must be submitted via our support portal within exactly 14 days of the purchase timestamp.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The 24-Hour Rule</h3>
                  <p className="text-gray-700 mb-3">Because our tutors reserve specific time slots for students, cancellations impact their schedule and livelihood.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Cancellations &gt; 24 Hours:</strong> If a student cancels a session more than 24 hours in advance, they are entitled to a full refund or a free reschedule.</li>
                    <li><strong>Late Cancellations (&lt; 24 Hours):</strong> Cancellations made within 24 hours of the session start time are non-refundable. The tutor will be paid for their reserved time.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">No-Show Policy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Student No-Show:</strong> If a student does not show up within the first 15 minutes of a scheduled session, the session is considered "Completed." No refund will be issued, and the tutor is free to leave the call.</li>
                    <li><strong>Tutor No-Show:</strong> If a tutor fails to show up, the student is entitled to a 100% refund or a credit for a future session, and the tutor may be subject to platform penalties.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Guarantee (The "First 15 Minutes")</h3>
                  <p className="text-gray-700 mb-3">We want to ensure a good match between student and tutor.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>If a student feels the tutor is not a good fit within the first 15 minutes of their first-ever session, they may leave the call and request a full refund or a switch to a different tutor.</li>
                    <li>This "Trial Protection" only applies to the first session with a specific tutor to prevent users from consuming full lessons for free.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Difficulties</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Platform Issues:</strong> If the session cannot be completed due to a failure of smbtutorial.com tools, a full refund or reschedule will be provided.</li>
                    <li><strong>User Issues:</strong> Refunds are generally not granted for individual internet connectivity issues or hardware problems on the student's end. We recommend testing your setup 10 minutes before the call.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Package & Bundle Refunds</h3>
                  <p className="text-gray-700 mb-3">If a student purchases a bundle of hours (e.g., a 10-hour package):</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Unused Hours:</strong> Refundable within 30 days of purchase, minus a 10% administrative processing fee.</li>
                    <li><strong>Used Hours:</strong> Once a session is completed, those hours are non-refundable.</li>
                  </ul>
                </div>
              </section>

              {/* Tutor Conduct & Penalties */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutor Professional Conduct & Penalties</h2>
                
                <p className="text-gray-700 mb-4">To maintain the integrity of our marketplace, all tutors at SMB Tutorial are held to a high standard of professional accountability.</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Attendance & Reliability</h3>
                  <p className="text-gray-700 mb-3">Tutors are expected to be present and punctual for all confirmed sessions.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Tutor No-Show:</strong>
                      <ul className="list-circle list-inside ml-6 mt-1">
                        <li>First Offense: Full refund to the student + a warning flag on the tutor's profile</li>
                        <li>Second Offense: Penalty fee (e.g., $15 or 50% of session cost) deducted from tutor's balance</li>
                        <li>Third Offense: Immediate suspension from the platform</li>
                      </ul>
                    </li>
                    <li><strong>Late Arrival:</strong> Tutors arriving more than 5 minutes late must extend the session by the equivalent time or offer a partial refund for the missed duration.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Platform Circumvention</h3>
                  <p className="text-gray-700 mb-3">Attempting to take a student "off-platform" to avoid SMB Tutorial service fees is a critical violation.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>The Act:</strong> Sharing personal PayPal/Venmo links, phone numbers, or external booking links with intent to bypass our payment system.</li>
                    <li><strong>Penalty:</strong> Zero Tolerance. Permanent ban and forfeiture of any pending/unpaid earnings.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Content & Quality Violations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Misrepresentation:</strong> Tutors found to have falsified credentials, certifications, or experience will be permanently removed.</li>
                    <li><strong>Unpreparedness:</strong> If a student provides documented proof of significant unprofessionalism:
                      <ul className="list-circle list-inside ml-6 mt-1">
                        <li>Penalty: Mandatory refund to student and a "Low Quality" strike</li>
                        <li>Three strikes result in visibility shadow-ban (tutor won't appear in top search results)</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Conduct & Harassment</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Prohibited Behavior:</strong> Any form of harassment, hate speech, or inappropriate personal communication with a student.</li>
                    <li><strong>Penalty:</strong> Immediate account termination and permanent IP/ID block. SMB Tutorial will cooperate fully with law enforcement if conduct is illegal.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Live Booking & Acceptance ("Instant Connect" Rule)</h3>
                  <p className="text-gray-700 mb-3">Tutors who toggle their status to "Live / Available Now" must be ready to accept bookings immediately.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>60-Second Acceptance Window:</strong> Tutors have exactly 60 seconds to accept an instant session request. Failure results in automatic "Offline" status.</li>
                    <li><strong>Acceptance Rate Tracking:</strong> We track acceptance rates. Consistently declining requests while marked "Live" may result in reduced visibility.</li>
                    <li><strong>"Ghosting" Penalties:</strong> Accepting a booking then failing to enter the classroom:
                      <ul className="list-circle list-inside ml-6 mt-1">
                        <li>Immediate $5.00 penalty fee deducted from tutor's balance</li>
                        <li>Student receives credit for free 15-minute session at platform's expense</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Probationary Period for New Tutors</h3>
                  <p className="text-gray-700 mb-3">All new tutors enter a Probationary Status for their first 5 completed sessions:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Payment Holding:</strong> Payouts for first 5 sessions held for 14 days (instead of standard 7) to ensure no disputes.</li>
                    <li><strong>Visibility:</strong> Probationary tutors appear with "New Tutor" badge.</li>
                    <li><strong>Mandatory Review:</strong> After 5th session:
                      <ul className="list-circle list-inside ml-6 mt-1">
                        <li>Rating &gt; 4.0: Full "Verified Tutor" status granted</li>
                        <li>Rating &lt; 3.0: Mandatory profile review or account deactivation</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Student Code of Conduct */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Code of Conduct & Safety Policy</h2>
                
                <p className="text-gray-700 mb-4">At SMB Tutorial, we are committed to providing a respectful, productive, and safe learning environment. By using our platform, students agree to adhere to the following standards of behavior.</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Professionalism & Respect</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Zero Tolerance for Harassment:</strong> Any form of hate speech, discrimination (based on race, gender, religion, etc.), or sexual harassment toward a tutor will result in immediate and permanent ban without refund for remaining credits.</li>
                    <li><strong>Appropriate Attire:</strong> Students must be dressed appropriately for video sessions. Tutors have the right to end a session immediately if a student is dressed inappropriately, and no refund will be issued.</li>
                    <li><strong>Respectful Communication:</strong> Do not use profanity, aggressive language, or personal insults. Tutors are here to help, not to be mistreated.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Live Session Integrity</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>No Recording Without Consent:</strong> You may not record, screen-capture, or distribute any portion of a live tutoring session without explicit written permission of the tutor and the platform.</li>
                    <li><strong>Environment:</strong> Students should join sessions from a quiet, stationary environment. Joining while driving, in a loud club, or in disruptive settings is grounds for the tutor to terminate the call.</li>
                    <li><strong>Off-Platform Requests:</strong> Do not ask tutors for personal phone numbers, home addresses, or private social media profiles. All communication must stay within the SMB Tutorial messaging system.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Academic Integrity</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>No "Do My Homework":</strong> Tutors are mentors, not ghostwriters. You may not ask a tutor to complete an exam, write a graded essay for you, or perform any task that violates the academic integrity policy of your school or institution.</li>
                    <li><strong>Fair Use:</strong> Do not use the "Instant Connect" feature to spam multiple tutors with the same question in hopes of getting free answers during the trial window.</li>
                  </ul>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-teal-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Questions About Our Policies?</h3>
                <p className="text-gray-700 mb-3">
                  If you have any questions about these terms and conditions, please contact us at:
                </p>
                <p className="text-gray-900">
                  <a href="mailto:support@smbtutorial.com" className="text-teal-600 hover:text-teal-700 font-semibold">
                    support@smbtutorial.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Background Elements - Pastel Green/Blue */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

      {/* Header with Logo */}
      <header className="relative z-10 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SMB</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SMB Tutorials</h1>
              <p className="text-sm text-teal-600 font-medium">One Student, One Teacher</p>
            </div>
          </div>
          
          {/* Sign In Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage('signin')}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center px-8" style={{minHeight: 'calc(100vh - 120px)'}}>
        <div className="max-w-4xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn Anything,<br />
              <span className="text-teal-600">Anytime</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Connect with expert teachers for hourly sessions. Master any concept at your own pace, on your own schedule.
            </p>
            <button 
              onClick={() => setCurrentPage('form')}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Find a Teacher →
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Any Subject</h3>
              <p className="text-gray-600 text-sm">From math to music, find teachers for every topic you want to learn.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Schedule</h3>
              <p className="text-gray-600 text-sm">Book sessions that fit your time. Learn when it's convenient for you.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Teachers</h3>
              <p className="text-gray-600 text-sm">Learn from qualified educators who specialize in your topic.</p>
            </div>
          </div>

          {/* Tutor Recruitment Section - Preply Style */}
          <div className="mt-32 mb-16">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Image/Visual */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-12 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-8xl mb-6">👨‍🏫</div>
                    <div className="space-y-4">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 inline-block">
                        <p className="text-white font-semibold">Join 500+ Expert Tutors</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Become a tutor
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Earn money sharing your expert knowledge with students. Sign up to start tutoring online with SMB Tutorials.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Find new students</h3>
                        <p className="text-gray-600 text-sm">Get matched with students looking for your expertise</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Grow your business</h3>
                        <p className="text-gray-600 text-sm">Set your own rates and schedule. Work from anywhere</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Get paid securely</h3>
                        <p className="text-gray-600 text-sm">Receive payments safely and on time, every time</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentPage('tutor-signup')}
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Become a tutor
                  </button>

                  <div className="mt-6">
                    <button 
                      onClick={() => alert('Learn more about how our platform works for tutors')}
                      className="text-teal-600 hover:text-teal-700 font-medium text-sm"
                    >
                      How our platform works →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
