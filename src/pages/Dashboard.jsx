import React from 'react'
import Layout from '../components/Layout'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts'
import { BookOpen, Users, Calendar, FileText, Clock } from 'lucide-react'

const Dashboard = () => {
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

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">🏠</span>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Community Stats */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Community</h3>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">1</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-xs text-gray-500">Courses</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">14</div>
                <div className="text-xs text-gray-500">Members</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-xs text-gray-500">Events</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-2 mx-auto">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">56</div>
                <div className="text-xs text-gray-500">Blog</div>
              </div>
            </div>
          </div>

          {/* Sales Chart */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Sales</h3>
                <p className="text-xs text-gray-500">📊 My Sales</p>
                <p className="text-xs text-gray-400">Monthly Data</p>
              </div>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Community Members Chart */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Community Members</h3>
                <p className="text-xs text-gray-500">📈 Community Members</p>
                <p className="text-xs text-gray-400">Monthly Data</p>
              </div>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={membersData}>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8b5cf6" 
                    fill="#8b5cf6" 
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Sales */}
          <div className="lg:col-span-2 card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="pb-3">Course / Product</th>
                    <th className="pb-3">Customer Name</th>
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Sale Amount</th>
                    <th className="pb-3">Created On</th>
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
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
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
      </div>
    </Layout>
  )
}

export default Dashboard
