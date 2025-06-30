import React, { useState } from 'react'
import Layout from '../components/Layout'
import { BookOpen, Users, Calendar, FileText, ChevronDown, User, Video, Database, Palette, Globe, Languages, LogOut } from 'lucide-react'

const Dashboard = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

  const salesData = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 0 },
    { month: 'Mar', value: 0 },
    { month: 'Apr', value: 0 },
    { month: 'May', value: 0 },
    { month: 'Jun', value: 0 },
  ]

  const membersData = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 0 },
    { month: 'Mar', value: 2 },
    { month: 'Apr', value: 8 },
    { month: 'May', value: 10 },
    { month: 'Jun', value: 0 },
  ]

  const recentActivity = [
    {
      user: 'Janusz',
      action: 'posted new comment',
      time: '2 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
    },
    {
      user: 'Janusz',
      action: 'added a new post',
      time: '2 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
    },
    {
      user: 'Janusz',
      action: 'posted new comment',
      time: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
    },
    {
      user: 'Janusz',
      action: 'added a new post',
      time: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
    },
    {
      user: 'Janusz',
      action: 'posted new comment',
      time: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
    },
    {
      user: 'Phil',
      action: 'joined Advertising',
      time: '4 weeks ago',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
    }
  ]

  // Sales Chart Component
  const SalesChart = () => (
    <div className="h-32 bg-blue-50 rounded-lg p-4 relative">
      <svg className="w-full h-full" viewBox="0 0 300 80">
        {/* Grid lines */}
        <defs>
          <pattern id="salesGrid" width="30" height="16" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 16" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#salesGrid)" />
        
        {/* Y-axis labels */}
        <text x="5" y="12" className="text-xs fill-gray-500">1</text>
        <text x="5" y="28" className="text-xs fill-gray-500">0</text>
        <text x="2" y="44" className="text-xs fill-gray-500">-1</text>
        <text x="2" y="60" className="text-xs fill-gray-500">-3</text>
        
        {/* X-axis labels */}
        <text x="25" y="75" className="text-xs fill-gray-500">Jan</text>
        <text x="55" y="75" className="text-xs fill-gray-500">Feb</text>
        <text x="85" y="75" className="text-xs fill-gray-500">Mar</text>
        <text x="115" y="75" className="text-xs fill-gray-500">Jul</text>
        <text x="145" y="75" className="text-xs fill-gray-500">Sep</text>
        <text x="175" y="75" className="text-xs fill-gray-500">Nov</text>
        
        {/* Flat line */}
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          points="30,40 60,40 90,40 120,40 150,40 180,40 210,40 240,40"
        />
        
        {/* Data points */}
        <circle cx="30" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="60" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="90" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="120" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="150" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="180" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="210" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="240" cy="40" r="2" fill="#3b82f6"/>
      </svg>
    </div>
  )

  // Community Members Chart Component
  const MembersChart = () => (
    <div className="h-32 bg-blue-50 rounded-lg p-4 relative">
      <svg className="w-full h-full" viewBox="0 0 300 80">
        <rect width="100%" height="100%" fill="url(#salesGrid)" />
        
        {/* Y-axis labels */}
        <text x="5" y="12" className="text-xs fill-gray-500">1.0</text>
        <text x="5" y="28" className="text-xs fill-gray-500">0.5</text>
        <text x="10" y="44" className="text-xs fill-gray-500">0</text>
        
        {/* X-axis labels */}
        <text x="25" y="75" className="text-xs fill-gray-500">Jan</text>
        <text x="55" y="75" className="text-xs fill-gray-500">Feb</text>
        <text x="85" y="75" className="text-xs fill-gray-500">Mar</text>
        <text x="115" y="75" className="text-xs fill-gray-500">Jul</text>
        <text x="145" y="75" className="text-xs fill-gray-500">Sep</text>
        <text x="175" y="75" className="text-xs fill-gray-500">Nov</text>
        
        {/* Line with peak */}
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          points="30,50 60,45 90,15 120,40 150,45 180,45 210,45 240,45"
        />
        
        {/* Data points */}
        <circle cx="30" cy="50" r="2" fill="#3b82f6"/>
        <circle cx="60" cy="45" r="2" fill="#3b82f6"/>
        <circle cx="90" cy="15" r="2" fill="#3b82f6"/>
        <circle cx="120" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="150" cy="45" r="2" fill="#3b82f6"/>
        <circle cx="180" cy="45" r="2" fill="#3b82f6"/>
        <circle cx="210" cy="45" r="2" fill="#3b82f6"/>
        <circle cx="240" cy="45" r="2" fill="#3b82f6"/>
      </svg>
    </div>
  )

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with User Profile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">🏠</span>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          
          {/* User Profile Card */}
          <div className="relative">
            <div className="flex items-center space-x-3 bg-white rounded-lg p-3 border border-gray-200">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                alt="Janusz Krawczak"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-900">Janusz Krawczak</div>
                <div className="text-sm text-gray-500">janusz@example.com</div>
              </div>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Profile Dropdown */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-2">
                  <div className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded mb-2">
                    Free Credits: 252/500
                  </div>
                  
                  <div className="space-y-1">
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <Video className="w-4 h-4" />
                      <span>Video tutorials</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <Database className="w-4 h-4" />
                      <span>Knowledgebase</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <Palette className="w-4 h-4" />
                      <span>Template Club</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <Globe className="w-4 h-4" />
                      <span>Agency Website</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <FileText className="w-4 h-4" />
                      <span>DFY Tribe</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                      <Languages className="w-4 h-4" />
                      <span>Language</span>
                    </button>
                    
                    <hr className="my-2" />
                    
                    <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Community Stats */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Community</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">1</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <BookOpen className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-xs text-gray-500">Courses</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">14</div>
                <div className="text-xs text-gray-500">Members</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <Calendar className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-xs text-gray-500">Events</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">56</div>
                <div className="text-xs text-gray-500">Blog</div>
              </div>
            </div>
          </div>

          {/* Sales Chart */}
          <div className="card p-6">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Sales</h3>
              <div className="text-xs text-gray-500">📊 My Sales</div>
              <div className="text-xs text-gray-400">Monthly Data</div>
            </div>
            <SalesChart />
          </div>

          {/* Community Members Chart */}
          <div className="card p-6">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Community Members</h3>
              <div className="text-xs text-gray-500">📈 Community Members</div>
              <div className="text-xs text-gray-400">Monthly Data</div>
            </div>
            <MembersChart />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Sales */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="pb-3">COURSE / PRODUCT</th>
                    <th className="pb-3">CUSTOMER NAME</th>
                    <th className="pb-3">ORDER ID</th>
                    <th className="pb-3">SALE AMOUNT</th>
                    <th className="pb-3">CREATED ON</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-gray-500">
                      No recent sale found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h3>
            <p className="text-sm text-gray-500 mb-4">Community member recent activity</p>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium text-blue-600">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <img
                    src={activity.avatar}
                    alt={activity.user}
                    className="w-6 h-6 rounded-full flex-shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 text-sm text-gray-500">
          <span>2025 © AITribes</span>
          <span>Support</span>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
