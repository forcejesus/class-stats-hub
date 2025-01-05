import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Total Enseignants
              </h3>
              <div className="text-2xl font-bold">0</div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Total Apprenants
              </h3>
              <div className="text-2xl font-bold">0</div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Tables will be added here */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;