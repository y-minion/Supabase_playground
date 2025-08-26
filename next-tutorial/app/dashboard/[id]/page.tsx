export default function DashboardDetailPage({ params, searchParams }) {
  return (
    <main>
      Dashboard Detail Page {params.id} code = {searchParams.code}
    </main>
  );
}
