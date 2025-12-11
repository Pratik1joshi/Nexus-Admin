'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Key,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Ban,
  PlayCircle
} from 'lucide-react';
import { formatDate, formatCurrency, getDaysRemaining } from '@/lib/utils';

export default function RestaurantDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [showGraceModal, setShowGraceModal] = useState(false);
  const [extensionDays, setExtensionDays] = useState(30);
  const [graceDays, setGraceDays] = useState(5);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchRestaurant();
    }
  }, [params.id]);

  const fetchRestaurant = async () => {
    try {
      const res = await fetch(`/api/restaurants/${params.id}`);
      const data = await res.json();
      setRestaurant(data.restaurant);
      setPayments(data.payments);
      setGraceDays(data.restaurant.grace_period_days || 5);
    } catch (error) {
      console.error('Failed to fetch restaurant:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExtendExpiry = async () => {
    setProcessing(true);
    try {
      const res = await fetch(`/api/restaurants/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'extend_expiry',
          additional_days: extensionDays
        })
      });

      if (res.ok) {
        alert(`Expiry extended by ${extensionDays} days`);
        setShowExtendModal(false);
        fetchRestaurant();
      }
    } catch (error) {
      alert('Failed to extend expiry');
    } finally {
      setProcessing(false);
    }
  };

  const handleExtendGrace = async () => {
    setProcessing(true);
    try {
      const res = await fetch(`/api/restaurants/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'extend_grace',
          grace_days: graceDays
        })
      });

      if (res.ok) {
        alert(`Grace period updated to ${graceDays} days`);
        setShowGraceModal(false);
        fetchRestaurant();
      }
    } catch (error) {
      alert('Failed to update grace period');
    } finally {
      setProcessing(false);
    }
  };

  const handleToggleStatus = async () => {
    const action = restaurant.status === 'active' ? 'suspend' : 'activate';
    const confirmed = confirm(`Are you sure you want to ${action} this restaurant?`);
    
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/restaurants/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });

      if (res.ok) {
        alert(`Restaurant ${action}d successfully`);
        fetchRestaurant();
      }
    } catch (error) {
      alert(`Failed to ${action} restaurant`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Restaurant not found</p>
      </div>
    );
  }

  const daysLeft = restaurant.expiry_date ? getDaysRemaining(restaurant.expiry_date) : null;
  const isExpired = daysLeft !== null && daysLeft < 0;
  const isExpiringSoon = daysLeft !== null && daysLeft <= 7 && daysLeft >= 0;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.push('/dashboard/restaurants')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Restaurants
          </button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
              <p className="text-gray-600 mt-1">{restaurant.owner_name}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowExtendModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Calendar className="w-4 h-4" />
                Extend Expiry
              </button>
              <button
                onClick={() => setShowGraceModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Clock className="w-4 h-4" />
                Grace Period
              </button>
              <button
                onClick={handleToggleStatus}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  restaurant.status === 'active'
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {restaurant.status === 'active' ? (
                  <>
                    <Ban className="w-4 h-4" />
                    Suspend
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-4 h-4" />
                    Activate
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* License Status Card */}
        <div className={`bg-white rounded-lg shadow-sm border-2 p-6 mb-6 ${
          isExpired ? 'border-red-300' :
          isExpiringSoon ? 'border-yellow-300' :
          'border-green-300'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">License Status</h2>
            {restaurant.license_status === 'active' && !isExpired ? (
              <CheckCircle className="w-8 h-8 text-green-500" />
            ) : (
              <XCircle className="w-8 h-8 text-red-500" />
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">License Key</p>
              <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                {restaurant.license_key || 'N/A'}
              </code>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Plan Type</p>
              <p className="font-semibold text-gray-900">{restaurant.plan_type || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Expiry Date</p>
              <p className="font-semibold text-gray-900">
                {restaurant.expiry_date ? formatDate(restaurant.expiry_date) : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Days Remaining</p>
              <p className={`font-bold text-lg ${
                isExpired ? 'text-red-600' :
                isExpiringSoon ? 'text-yellow-600' :
                'text-green-600'
              }`}>
                {daysLeft !== null ? (
                  daysLeft > 0 ? `${daysLeft} days` : `${Math.abs(daysLeft)} days ago`
                ) : 'N/A'}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Grace Period</p>
              <p className="font-semibold text-gray-900">{restaurant.grace_period_days || 5} days</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Last Verified</p>
              <p className="font-semibold text-gray-900">
                {restaurant.last_verified ? formatDate(restaurant.last_verified) : 'Never'}
              </p>
            </div>
          </div>
        </div>

        {/* Restaurant Details */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Restaurant Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Phone</p>
              <p className="font-semibold text-gray-900">{restaurant.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="font-semibold text-gray-900">{restaurant.email || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">City</p>
              <p className="font-semibold text-gray-900">{restaurant.city || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">State</p>
              <p className="font-semibold text-gray-900">{restaurant.state || 'N/A'}</p>
            </div>
            {restaurant.pan_number && (
              <div>
                <p className="text-sm text-gray-600 mb-1">PAN Number</p>
                <p className="font-semibold text-gray-900">{restaurant.pan_number}</p>
              </div>
            )}
            {restaurant.gst_number && (
              <div>
                <p className="text-sm text-gray-600 mb-1">GST Number</p>
                <p className="font-semibold text-gray-900">{restaurant.gst_number}</p>
              </div>
            )}
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {formatDate(payment.created_at)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{payment.plan_type}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{payment.plan_duration} months</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      {formatCurrency(payment.amount)}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        payment.payment_status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.payment_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {payments.length === 0 && (
              <p className="text-center text-gray-600 py-8">No payment history</p>
            )}
          </div>
        </div>
      </div>

      {/* Extend Expiry Modal */}
      {showExtendModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Extend Expiry Date</h3>
            <p className="text-gray-600 mb-4">
              Current expiry: {restaurant.expiry_date ? formatDate(restaurant.expiry_date) : 'N/A'}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Days
              </label>
              <input
                type="number"
                value={extensionDays}
                onChange={(e) => setExtensionDays(parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExtendModal(false)}
                className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleExtendExpiry}
                disabled={processing}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {processing ? 'Processing...' : 'Extend'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grace Period Modal */}
      {showGraceModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Update Grace Period</h3>
            <p className="text-gray-600 mb-4">
              Current grace period: {restaurant.grace_period_days || 5} days
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grace Period (Days)
              </label>
              <input
                type="number"
                value={graceDays}
                onChange={(e) => setGraceDays(parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                min="0"
                max="30"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowGraceModal(false)}
                className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleExtendGrace}
                disabled={processing}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
              >
                {processing ? 'Processing...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
