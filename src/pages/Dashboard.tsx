import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users,
  FolderKanban,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$45,231',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    label: 'Active Users',
    value: '2,350',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
  },
  {
    label: 'Projects',
    value: '18',
    change: '+2',
    trend: 'up',
    icon: FolderKanban,
  },
  {
    label: 'Growth',
    value: '24.5%',
    change: '-2.4%',
    trend: 'down',
    icon: TrendingUp,
  },
];

const recentActivity = [
  { id: 1, action: 'New project created', project: 'E-Commerce Platform', time: '2 hours ago' },
  { id: 2, action: 'User invited', project: 'Dashboard Redesign', time: '4 hours ago' },
  { id: 3, action: 'Deployment completed', project: 'Mobile App', time: '6 hours ago' },
  { id: 4, action: 'Issue resolved', project: 'API Integration', time: '1 day ago' },
];

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-display font-bold">
            Welcome back, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your projects today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stat.change}
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-xl border border-border p-6 shadow-card"
        >
          <h2 className="text-lg font-display font-semibold mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.project}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
