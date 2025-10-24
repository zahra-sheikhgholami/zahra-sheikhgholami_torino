import AuthDashboardProvider from "@/src/providers/AuthDashboardProvider";
import DashboardSidebar from "@/src/components/layout/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <AuthDashboardProvider>
      <div className="my-5 lg:mt-8 min-h-[calc(100vh-360px)]">
        <div className="container mx-auto grid md:grid-cols-[160px_1fr] lg:grid-cols-[220px_1fr] xl:grid-cols-[290px_1fr] md:gap-x-5 gap-y-5 px-8 sm:px-0 md:px-4">
          <DashboardSidebar />
          {children}
        </div>
      </div>
    </AuthDashboardProvider>
  );
}
export default DashboardLayout;
