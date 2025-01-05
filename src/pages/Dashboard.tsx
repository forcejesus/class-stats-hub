import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tableau de bord</h2>
        <p>Bienvenue sur votre tableau de bord</p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;