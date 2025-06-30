import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Settings, ArrowLeft } from 'lucide-react'

const CommunityCustomize = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Customize Community</h1>
          </div>
          <Link
            to="/community"
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Community</span>
          </Link>
        </div>

        {/* Community Customization Content */}
        <div className="card p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Customization</h2>
            <p className="text-gray-600 mb-8">Customize your community settings, appearance, and features.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Appearance</h3>
                <p className="text-sm text-gray-600">Customize colors, themes, and branding</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Settings</h3>
                <p className="text-sm text-gray-600">Configure community rules and permissions</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                <p className="text-sm text-gray-600">Enable or disable community features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CommunityCustomize
