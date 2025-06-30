import React, { useState } from 'react'
import Layout from '../components/Layout'
import { BarChart3, DollarSign, Users, ThumbsUp, Mail, MessageCircle, ChevronDown } from 'lucide-react'

const Analytics = () => {
  const [selectedCommunity, setSelectedCommunity] = useState('PATRON')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const communities = [
    'PATRON',
    'Homohumanicus', 
    'Ziołolecznictwo',
    'Przedsiębiorcy RP',
    'Narodowa Agencja Informacyjna',
    'Wolność i Przedsiębiorczość',
    'Agencja Społecznych Konsultantów',
    'TOKmate',
    'Ekspert Wellness'
  ]

  const stats = [
    {
      icon: BarChart3,
      value: '1',
      label: 'Group',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      value: '-',
      label: 'Sales',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '1',
      label: 'Community Members',
      color: 'text-purple-600'
    },
    {
      icon: ThumbsUp,
      value: '3',
      label: 'Likes',
      color: 'text-orange-600'
    },
    {
      icon: Mail,
      value: '3',
      label: 'Post',
      color: 'text-red-600'
    },
    {
      icon: MessageCircle,
      value: '-',
      label: 'Comment',
      color: 'text-indigo-600'
    }
  ]

  // Chart component for Activity (Weekly Data)
  const ActivityChart = () => (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span className="text-sm font-medium text-gray-700">Activity</span>
        </div>
        <span className="text-xs text-gray-500">Weekly Data</span>
      </div>
      
      <div className="relative h-48 bg-blue-50 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 300 120">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="30" height="24" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 24" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Y-axis labels */}
          <text x="10" y="15" className="text-xs fill-gray-500">1.0</text>
          <text x="10" y="39" className="text-xs fill-gray-500">0.5</text>
          <text x="15" y="63" className="text-xs fill-gray-500">0</text>
          
          {/* X-axis labels */}
          <text x="45" y="110" className="text-xs fill-gray-500">M</text>
          <text x="75" y="110" className="text-xs fill-gray-500">T</text>
          <text x="105" y="110" className="text-xs fill-gray-500">W</text>
          <text x="135" y="110" className="text-xs fill-gray-500">T</text>
          <text x="165" y="110" className="text-xs fill-gray-500">F</text>
          <text x="195" y="110" className="text-xs fill-gray-500">S</text>
          <text x="225" y="110" className="text-xs fill-gray-500">S</text>
          
          {/* Bar chart */}
          <rect x="40" y="80" width="15" height="8" fill="#3b82f6" rx="2"/>
          <rect x="70" y="75" width="15" height="13" fill="#3b82f6" rx="2"/>
          <rect x="100" y="70" width="15" height="18" fill="#3b82f6" rx="2"/>
          <rect x="130" y="78" width="15" height="10" fill="#3b82f6" rx="2"/>
          <rect x="160" y="82" width="15" height="6" fill="#3b82f6" rx="2"/>
          <rect x="190" y="76" width="15" height="12" fill="#3b82f6" rx="2"/>
          <rect x="220" y="79" width="15" height="9" fill="#3b82f6" rx="2"/>
        </svg>
      </div>
    </div>
  )

  // Chart component for Sales (Monthly Data)
  const SalesChart = () => (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span className="text-sm font-medium text-gray-700">My Sales</span>
        </div>
        <span className="text-xs text-gray-500">Monthly Data</span>
      </div>
      
      <div className="relative h-48 bg-blue-50 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 300 120">
          {/* Grid lines */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Y-axis labels */}
          <text x="15" y="15" className="text-xs fill-gray-500">1</text>
          <text x="10" y="39" className="text-xs fill-gray-500">-1</text>
          <text x="10" y="63" className="text-xs fill-gray-500">-3</text>
          <text x="10" y="87" className="text-xs fill-gray-500">-5</text>
          
          {/* X-axis labels */}
          <text x="35" y="110" className="text-xs fill-gray-500">Jan</text>
          <text x="65" y="110" className="text-xs fill-gray-500">Feb</text>
          <text x="95" y="110" className="text-xs fill-gray-500">Mar</text>
          <text x="125" y="110" className="text-xs fill-gray-500">Jul</text>
          <text x="155" y="110" className="text-xs fill-gray-500">Sep</text>
          <text x="185" y="110" className="text-xs fill-gray-500">Nov</text>
          
          {/* Line chart */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points="40,60 70,60 100,60 130,60 160,60 190,60 220,60 250,60"
          />
          
          {/* Data points */}
          <circle cx="40" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="70" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="100" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="130" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="160" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="190" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="220" cy="60" r="3" fill="#3b82f6"/>
          <circle cx="250" cy="60" r="3" fill="#3b82f6"/>
        </svg>
      </div>
    </div>
  )

  // Chart component for Community Members (Monthly Data)
  const MembersChart = () => (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span className="text-sm font-medium text-gray-700">Community Members</span>
        </div>
        <span className="text-xs text-gray-500">Monthly Data</span>
      </div>
      
      <div className="relative h-48 bg-blue-50 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 300 120">
          {/* Grid lines */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Y-axis labels */}
          <text x="10" y="15" className="text-xs fill-gray-500">1.0</text>
          <text x="10" y="39" className="text-xs fill-gray-500">0.5</text>
          <text x="15" y="63" className="text-xs fill-gray-500">0</text>
          
          {/* X-axis labels */}
          <text x="35" y="110" className="text-xs fill-gray-500">Jan</text>
          <text x="65" y="110" className="text-xs fill-gray-500">Feb</text>
          <text x="95" y="110" className="text-xs fill-gray-500">Mar</text>
          <text x="125" y="110" className="text-xs fill-gray-500">Jul</text>
          <text x="155" y="110" className="text-xs fill-gray-500">Sep</text>
          <text x="185" y="110" className="text-xs fill-gray-500">Nov</text>
          
          {/* Line chart with peak */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points="40,80 70,75 100,25 130,70 160,75 190,75 220,75 250,75"
          />
          
          {/* Data points */}
          <circle cx="40" cy="80" r="3" fill="#3b82f6"/>
          <circle cx="70" cy="75" r="3" fill="#3b82f6"/>
          <circle cx="100" cy="25" r="3" fill="#3b82f6"/>
          <circle cx="130" cy="70" r="3" fill="#3b82f6"/>
          <circle cx="160" cy="75" r="3" fill="#3b82f6"/>
          <circle cx="190" cy="75" r="3" fill="#3b82f6"/>
          <circle cx="220" cy="75" r="3" fill="#3b82f6"/>
          <circle cx="250" cy="75" r="3" fill="#3b82f6"/>
        </svg>
      </div>
    </div>
  )

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Analytics</h1>
          </div>
          
          {/* Community Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="text-sm font-medium text-gray-700">Community</span>
              <span className="text-sm text-gray-900">{selectedCommunity}</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2 max-h-60 overflow-y-auto">
                  {communities.map((community) => (
                    <button
                      key={community}
                      onClick={() => {
                        setSelectedCommunity(community)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                        selectedCommunity === community ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      {community}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ActivityChart />
          <SalesChart />
          <MembersChart />
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

export default Analytics
