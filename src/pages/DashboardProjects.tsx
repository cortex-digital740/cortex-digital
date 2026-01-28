import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    status: 'In Progress',
    progress: 65,
    team: 4,
    dueDate: 'Feb 15, 2026',
  },
  {
    id: 2,
    name: 'Mobile Application',
    status: 'In Review',
    progress: 90,
    team: 3,
    dueDate: 'Feb 10, 2026',
  },
  {
    id: 3,
    name: 'Dashboard Redesign',
    status: 'Completed',
    progress: 100,
    team: 2,
    dueDate: 'Jan 28, 2026',
  },
  {
    id: 4,
    name: 'API Integration',
    status: 'In Progress',
    progress: 40,
    team: 5,
    dueDate: 'Feb 28, 2026',
  },
];

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'In Review': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  'Completed': 'bg-green-500/10 text-green-500 border-green-500/20',
};

const DashboardProjects = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-display font-bold">Projects</h1>
            <p className="text-muted-foreground">
              Manage and track your projects
            </p>
          </motion.div>
          <Button variant="hero">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>

        {/* Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-xl border border-border shadow-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Project
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Progress
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Team
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Due Date
                  </th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <span className="font-medium">{project.name}</span>
                    </td>
                    <td className="py-4 px-6">
                      <Badge
                        variant="outline"
                        className={statusColors[project.status]}
                      >
                        {project.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {project.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-muted-foreground">{project.team} members</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-muted-foreground">{project.dueDate}</span>
                    </td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardProjects;
