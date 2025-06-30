import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Settings, 
  Users, 
  BarChart3, 
  Puzzle, 
  ChevronDown,
  User,
  UserPlus,
  Building,
  Play,
  BookOpen,
  CreditCard,
  Globe,
  Cog,
  ChevronRight,
  LogOut
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'

const Layout = ({ children }) => {
  const location = useLocation()
  const { signOut } = useAuthStore()
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Community', href: '/community', icon: Settings },
    { name: 'Reseller', href: '/reseller', icon: Users, hasDropdown: true },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Integrations', href: '/integrations', icon: Puzzle },
  ]

  const resellerDropdown = [
    { name: 'Manage Client', icon: User },
    { name: 'Team Member', icon: UserPlus },
    { name: 'Reseller', icon: Building },
  ]

  const profileMenuItems = [
    { name: 'Profile', icon: User },
    { name: 'Video tutorials', icon: Play },
    { name: 'Knowledgebase', icon: BookOpen },
    { name: 'Template Club', icon: CreditCard },
    { name: 'Agency Website', icon: Globe },
    { name: 'DFY Tribe', icon: Settings },
    { name: 'Language', icon: Cog, hasArrow: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🤖</span>
                </div>
                <span className="text-xl font-bold text-gray-900">AITribes</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">ENTERPRISE</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </Link>
                    
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {resellerDropdown.map((dropdownItem) => (
                            <button
                              key={dropdownItem.name}
                              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <dropdownItem.icon className="w-4 h-4" />
                              <span>{dropdownItem.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                >
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                
                {isProfileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    {/* Profile Header */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop"
                          alt="Profile"
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">Janusz Krawczak</h3>
                          <p className="text-sm text-gray-500">januszjankra@gmail.com</p>
                        </div>
                      </div>
                      
                      {/* Free Credits */}
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Free Credits</span>
                          <span className="text-sm text-blue-600 font-semibold">735/1000</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-2">
                      {profileMenuItems.map((item) => (
                        <button
                          key={item.name}
                          className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </div>
                          {item.hasArrow && <ChevronRight className="w-4 h-4" />}
                        </button>
                      ))}
                      
                      {/* Sign Out */}
                      <button
                        onClick={signOut}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      {/* Overlay to close dropdown */}
      {isProfileDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsProfileDropdownOpen(false)}
        />
      )}
    </div>
  )
}

export default Layout
