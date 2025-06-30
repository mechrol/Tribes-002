import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Settings, Search, Plus, Edit, Eye, Users, Copy, Rss, Zap } from 'lucide-react'

const Community = () => {
  const [expandedActions, setExpandedActions] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const communities = [
    {
      id: 1,
      name: 'PATRON',
      category: 'Subscription Services',
      date: '28 Feb, 2025',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: false
    },
    {
      id: 2,
      name: 'Homohumanicus',
      category: 'Health and Wellness',
      date: '13 Feb, 2025',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: true
    },
    {
      id: 3,
      name: 'Ziołolecznictwo',
      category: 'Health and Wellness',
      date: '5 Feb, 2025',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: false
    },
    {
      id: 4,
      name: 'Przedsiębiorcy RP',
      category: 'A Entrepreneurship community is a dynamic group of individuals focused on starting and growing businesses.',
      date: '4 Feb, 2025',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: false
    },
    {
      id: 5,
      name: 'Narodowa Agencja Informacyjna',
      category: 'Społeczność w NAI-ce grupy społeczne. Może prezentują projekty podlegające ocenie pod kątem ich transformacji...',
      date: '28 Nov, 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: true
    },
    {
      id: 6,
      name: 'Wolność i Przedsiębiorczość',
      category: 'Społeczność w Agencji "Bank Zaufania" są grupy społeczne. Może prezentują projekty podlegające ocenie pod kąt...',
      date: '27 Nov, 2024',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: false
    },
    {
      id: 7,
      name: 'Agencja Społecznych Konsultantów',
      category: 'Agencja Społecznych Konsultantów rzecza wizjonerskich członków, którzy mają jest projektowanie biegu zdarzeń...',
      date: '25 Oct, 2024',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: false
    },
    {
      id: 8,
      name: 'TOKmate',
      category: 'Tokmate Agency Service offers a complete solution for businesses and creators to dominate TikTok with ease. As t...',
      date: '21 Oct, 2024',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: true
    },
    {
      id: 9,
      name: 'Ekspert Wellness.',
      category: '"Ekspert Wellness jako nowy zawód dostępny dla wszystkich" Celem społeczności jest ocenienie wszystkich materiał...',
      date: '18 Sep, 2024',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isActive: true,
      hasMembers: false
    }
  ]

  const actionItems = [
    { icon: Edit, label: 'Edit', color: 'text-blue-600' },
    { icon: Eye, label: 'Visit', color: 'text-green-600' },
    { icon: Users, label: 'Customize Community', color: 'text-purple-600' },
    { icon: Copy, label: 'Clone', color: 'text-orange-600' },
    { icon: Rss, label: 'AI Member Feed', color: 'text-red-600' },
    { icon: Zap, label: 'AI Custom Prompt Feed', color: 'text-yellow-600' }
  ]

  const toggleActions = (communityId) => {
    setExpandedActions(expandedActions === communityId ? null : communityId)
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Community</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              9
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Community Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
              <span>Search</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
              <Plus className="w-4 h-4" />
              <span>New Community</span>
            </button>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <div key={community.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Community Header */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">{community.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{community.category}</p>
              </div>

              {/* Community Image */}
              <div className="relative">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-32 object-cover"
                />
              </div>

              {/* Community Footer */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {community.hasMembers && (
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">Members</span>
                    </div>
                  )}
                  <span className="text-sm text-gray-500">{community.date}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={community.isActive}
                      className="sr-only peer"
                      readOnly
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>

                  {/* Actions Button */}
                  <div className="relative">
                    <button
                      onClick={() => toggleActions(community.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium flex items-center space-x-1"
                    >
                      <span>Actions</span>
                      <svg
                        className={`w-3 h-3 transition-transform ${
                          expandedActions === community.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Expanded Actions Menu */}
                    {expandedActions === community.id && (
                      <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="py-2">
                          {actionItems.map((action, index) => (
                            <button
                              key={index}
                              className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                if (action.label === 'Customize Community') {
                                  // Navigate to customize page
                                  window.location.href = '/community/customize'
                                }
                                setExpandedActions(null)
                              }}
                            >
                              <action.icon className={`w-4 h-4 ${action.color}`} />
                              <span>{action.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default Community
