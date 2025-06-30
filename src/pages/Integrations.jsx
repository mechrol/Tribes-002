import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Settings, CreditCard, Mail, Video, MoreHorizontal, Check, ChevronDown, Plus } from 'lucide-react'

const Integrations = () => {
  const [activeTab, setActiveTab] = useState('Autoresponder')
  const [selectedCommunity, setSelectedCommunity] = useState('PATRON')

  const tabs = [
    { id: 'OpenAI', label: 'OpenAI', icon: '🤖' },
    { id: 'Payment', label: 'Payment', icon: '💳' },
    { id: 'Autoresponder', label: 'Autoresponder', icon: '✉️' },
    { id: 'Webinar', label: 'Webinar', icon: '📹' },
    { id: 'Others', label: 'Others', icon: '⚙️' }
  ]

  const integrations = {
    OpenAI: [
      {
        id: 'openai',
        name: 'OpenAI',
        description: 'OpenAI Configurations',
        icon: (
          <div className="w-20 h-20 flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-black">
              <path
                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ),
        status: 'connected',
        statusColor: 'text-blue-600',
        statusBg: 'bg-blue-50'
      }
    ],
    Payment: [
      {
        id: 'paypal',
        name: 'Paypal',
        description: 'Payment Gateway',
        icon: (
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a.3.3 0 0 0-.32-.266c-.7-.05-1.33-.05-2.02.266-1.83.84-2.851 2.526-2.851 4.633 0 .266.02.532.06.798.02.133.04.266.08.399.02.066.04.133.08.199.02.066.06.133.08.199.02.066.06.133.1.199.04.066.08.133.12.199.04.066.1.133.14.199.06.066.12.133.18.199.06.066.14.133.2.199.08.066.16.133.24.199.08.066.18.133.26.199.1.066.2.133.3.199.1.066.22.133.32.199.12.066.24.133.36.199.12.066.26.133.38.199.14.066.28.133.42.199.14.066.3.133.44.199.16.066.32.133.48.199.16.066.34.133.5.199.18.066.36.133.54.199.18.066.38.133.56.199.2.066.4.133.6.199.2.066.42.133.62.199.22.066.44.133.66.199.22.066.46.133.68.199.24.066.48.133.72.199.24.066.5.133.74.199.26.066.52.133.78.199.26.066.54.133.8.199.28.066.56.133.84.199.28.066.58.133.86.199.3.066.6.133.9.199.3.066.62.133.92.199.32.066.64.133.96.199.32.066.66.133.98.199.34.066.68.133 1.02.199.34.066.7.133 1.04.199.36.066.72.133 1.08.199.36.066.74.133 1.1.199.38.066.76.133 1.14.199.38.066.78.133 1.16.199.4.066.8.133 1.2.199.4.066.82.133 1.22.199.42.066.84.133 1.26.199.42.066.86.133 1.28.199.44.066.88.133 1.32.199.44.066.9.133 1.34.199.46.066.92.133 1.38.199.46.066.94.133 1.4.199.48.066.96.133 1.44.199.48.066.98.133 1.46.199.5.066 1 .133 1.5.199.5.066 1.02.133 1.52.199.52.066 1.04.133 1.56.199.52.066 1.06.133 1.58.199.54.066 1.08.133 1.62.199.54.066 1.1.133 1.64.199.56.066 1.12.133 1.68.199.56.066 1.14.133 1.7.199.58.066 1.16.133 1.74.199.58.066 1.18.133 1.76.199.6.066 1.2.133 1.8.199.6.066 1.22.133 1.82.199.62.066 1.24.133 1.86.199.62.066 1.26.133 1.88.199.64.066 1.28.133 1.92.199.64.066 1.3.133 1.94.199.66.066 1.32.133 1.98.199.66.066 1.34.133 2 .199.68.066 1.36.133 2.04.199.68.066 1.38.133 2.06.199.7.066 1.4.133 2.1.199.7.066 1.42.133 2.12.199.72.066 1.44.133 2.16.199.72.066 1.46.133 2.18.199.74.066 1.48.133 2.22.199.74.066 1.5.133 2.24.199.76.066 1.52.133 2.28.199.76.066 1.54.133 2.3.199.78.066 1.56.133 2.34.199.78.066 1.58.133 2.36.199.8.066 1.6.133 2.4.199.8.066 1.62.133 2.42.199.82.066 1.64.133 2.46.199.82.066 1.66.133 2.48.199.84.066 1.68.133 2.52.199.84.066 1.7.133 2.54.199.86.066 1.72.133 2.58.199.86.066 1.74.133 2.6.199.88.066 1.76.133 2.64.199.88.066 1.78.133 2.66.199.9.066 1.8.133 2.7.199.9.066 1.82.133 2.72.199.92.066 1.84.133 2.76.199.92.066 1.86.133 2.78.199.94.066 1.88.133 2.82.199.94.066 1.9.133 2.84.199.96.066 1.92.133 2.88.199.96.066 1.94.133 2.9.199.98.066 1.96.133 2.94.199.98.066 1.98.133 2.96.199 1 .066 2 .133 3 .199 1 .066 2.02.133 3.02.199 1.02.066 2.04.133 3.06.199 1.02.066 2.06.133 3.08.199 1.04.066 2.08.133 3.12.199 1.04.066 2.1.133 3.14.199 1.06.066 2.12.133 3.18.199 1.06.066 2.14.133 3.2.199 1.08.066 2.16.133 3.24.199 1.08.066 2.18.133 3.26.199 1.1.066 2.2.133 3.3.199 1.1.066 2.22.133 3.32.199 1.12.066 2.24.133 3.36.199 1.12.066 2.26.133 3.38.199 1.14.066 2.28.133 3.42.199 1.14.066 2.3.133 3.44.199 1.16.066 2.32.133 3.48.199 1.16.066 2.34.133 3.5.199 1.18.066 2.36.133 3.54.199 1.18.066 2.38.133 3.56.199 1.2.066 2.4.133 3.6.199 1.2.066 2.42.133 3.62.199 1.22.066 2.44.133 3.66.199 1.22.066 2.46.133 3.68.199 1.24.066 2.48.133 3.72.199 1.24.066 2.5.133 3.74.199 1.26.066 2.52.133 3.78.199 1.26.066 2.54.133 3.8.199 1.28.066 2.56.133 3.84.199 1.28.066 2.58.133 3.86.199 1.3.066 2.6.133 3.9.199 1.3.066 2.62.133 3.92.199 1.32.066 2.64.133 3.96.199 1.32.066 2.66.133 3.98.199 1.34.066 2.68.133 4.02.199 1.34.066 2.7.133 4.04.199 1.36.066 2.72.133 4.08.199 1.36.066 2.74.133 4.1.199 1.38.066 2.76.133 4.14.199 1.38.066 2.78.133 4.16.199 1.4.066 2.8.133 4.2.199 1.4.066 2.82.133 4.22.199 1.42.066 2.84.133 4.26.199 1.42.066 2.86.133 4.28.199 1.44.066 2.88.133 4.32.199 1.44.066 2.9.133 4.34.199 1.46.066 2.92.133 4.38.199 1.46.066 2.94.133 4.4.199 1.48.066 2.96.133 4.44.199 1.48.066 2.98.133 4.46.199 1.5.066 3 .133 4.5.199 1.5.066 3.02.133 4.52.199 1.52.066 3.04.133 4.56.199 1.52.066 3.06.133 4.58.199 1.54.066 3.08.133 4.62.199 1.54.066 3.1.133 4.64.199 1.56.066 3.12.133 4.68.199 1.56.066 3.14.133 4.7.199 1.58.066 3.16.133 4.74.199 1.58.066 3.18.133 4.76.199 1.6.066 3.2.133 4.8.199 1.6.066 3.22.133 4.82.199 1.62.066 3.24.133 4.86.199 1.62.066 3.26.133 4.88.199 1.64.066 3.28.133 4.92.199 1.64.066 3.3.133 4.94.199 1.66.066 3.32.133 4.98.199 1.66.066 3.34.133 5 .199 1.68.066 3.36.133 5.04.199 1.68.066 3.38.133 5.06.199 1.7.066 3.4.133 5.1.199 1.7.066 3.42.133 5.12.199 1.72.066 3.44.133 5.16.199 1.72.066 3.46.133 5.18.199 1.74.066 3.48.133 5.22.199 1.74.066 3.5.133 5.24.199 1.76.066 3.52.133 5.28.199 1.76.066 3.54.133 5.3.199 1.78.066 3.56.133 5.34.199 1.78.066 3.58.133 5.36.199 1.8.066 3.6.133 5.4.199 1.8.066 3.62.133 5.42.199 1.82.066 3.64.133 5.46.199 1.82.066 3.66.133 5.48.199 1.84.066 3.68.133 5.52.199 1.84.066 3.7.133 5.54.199 1.86.066 3.72.133 5.58.199 1.86.066 3.74.133 5.6.199 1.88.066 3.76.133 5.64.199 1.88.066 3.78.133 5.66.199 1.9.066 3.8.133 5.7.199 1.9.066 3.82.133 5.72.199 1.92.066 3.84.133 5.76.199 1.92.066 3.86.133 5.78.199 1.94.066 3.88.133 5.82.199 1.94.066 3.9.133 5.84.199 1.96.066 3.92.133 5.88.199 1.96.066 3.94.133 5.9.199 1.98.066 3.96.133 5.94.199 1.98.066 3.98.133 5.96.199 2 .066 4 .133 6 .199"/>
            </svg>
          </div>
        ),
        status: 'disconnected',
        statusColor: 'text-gray-600',
        statusBg: 'bg-gray-50'
      },
      {
        id: 'stripe',
        name: 'Stripe',
        description: 'Payment Gateway',
        icon: (
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
            </svg>
          </div>
        ),
        status: 'connected',
        statusColor: 'text-blue-600',
        statusBg: 'bg-blue-50'
      },
      {
        id: 'razorpay',
        name: 'Razorpay',
        description: 'Payment Gateway',
        icon: (
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M22.436 0H1.564C.7.004.004.7 0 1.564v20.872C.004 23.3.7 23.996 1.564 24h20.872c.864-.004 1.56-.7 1.564-1.564V1.564C23.996.7 23.3.004 22.436 0zM7.735 19.171c0 .434-.352.786-.786.786H5.786c-.434 0-.786-.352-.786-.786V4.829c0-.434.352-.786.786-.786h1.163c.434 0 .786.352.786.786v14.342zm5.786 0c0 .434-.352.786-.786.786h-1.163c-.434 0-.786-.352-.786-.786V4.829c0-.434.352-.786.786-.786h1.163c.434 0 .786.352.786.786v14.342zm5.786 0c0 .434-.352.786-.786.786h-1.163c-.434 0-.786-.352-.786-.786V4.829c0-.434.352-.786.786-.786h1.163c.434 0 .786.352.786.786v14.342z"/>
            </svg>
          </div>
        ),
        status: 'disconnected',
        statusColor: 'text-gray-600',
        statusBg: 'bg-gray-50'
      },
      {
        id: 'manual-payment',
        name: 'Manual Payment',
        description: 'Payment Gateway',
        icon: (
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
        ),
        status: 'disconnected',
        statusColor: 'text-gray-600',
        statusBg: 'bg-gray-50'
      }
    ],
    Autoresponder: [
      {
        id: 'aweber',
        name: 'Aweber',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <div className="text-white font-bold text-xl">A</div>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'mailchimp',
        name: 'Mail Chimp',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              <circle cx="8" cy="9" r="1.5"/>
              <circle cx="16" cy="9" r="1.5"/>
              <path d="M12 17c-2.5 0-4.5-1.5-4.5-3.5h9c0 2-2 3.5-4.5 3.5z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'activecampaign',
        name: 'Active Campaign',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 2L3 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-9-5z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'sendlane',
        name: 'Sendlane',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M2 6l10 6 10-6v12H2V6z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'sendreach',
        name: 'SendReach',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'getresponse',
        name: 'GetResponse',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'icontact',
        name: 'iContact',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'constantcontact',
        name: 'Constant Contact',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'mailvio',
        name: 'Mailvio',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
            <div className="text-white font-bold text-xl">M</div>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'sendio',
        name: 'Sendio',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'listmail',
        name: 'ListMail',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'mailerlite',
        name: 'MailerLite',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        ),
        status: 'connected'
      },
      {
        id: 'sendgrid',
        name: 'SendGrid',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M2 6l10 6 10-6v12H2V6z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      },
      {
        id: 'globalcontrolcenter',
        name: 'Global Control Center',
        description: 'Email Marketing',
        icon: (
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        ),
        status: 'disconnected'
      }
    ],
    Webinar: [],
    Others: []
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Integrations</h1>
          </div>
          
          {/* Community Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Community</span>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <span>{selectedCommunity}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Integration Tabs */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Integration Content */}
          <div className="p-6">
            {integrations[activeTab].length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {integrations[activeTab].map((integration) => (
                  <div
                    key={integration.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="text-gray-700">
                        {integration.icon}
                      </div>
                      
                      {/* Name */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">
                          {integration.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {integration.description}
                        </p>
                      </div>
                      
                      {/* Status/Action Button */}
                      {integration.status === 'connected' ? (
                        <div className="flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                          <Check className="w-4 h-4" />
                          <span>Connected</span>
                        </div>
                      ) : (
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                          <Plus className="w-4 h-4" />
                          <span>Connect</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Settings className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {activeTab} integrations available
                </h3>
                <p className="text-gray-500">
                  {activeTab} integrations will appear here when they become available.
                </p>
              </div>
            )}
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

export default Integrations
