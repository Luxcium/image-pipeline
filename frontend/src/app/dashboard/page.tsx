import { getSession } from 'next-auth/react';

export default async function Dashboard() {
  const session = await getSession();
  if (!session) {
    return <p>Access denied. Please log in.</p>;
  }
  return <h1>Welcome, {session.user?.email}</h1>;
}
