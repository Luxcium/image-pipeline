import { getSession } from 'next-auth/react';

export default async function AdminPage() {
  const session = await getSession();
  if (!session || session.user.role !== 'ADMIN') {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}
