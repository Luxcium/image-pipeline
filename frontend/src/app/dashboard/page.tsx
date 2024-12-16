import { getSession } from 'next-auth/react';

export default async function Dashboard() {
  let session; try { session = await getSession(); } catch (error) { return <p>Error retrieving session. Please try again later.</p>; }
  if (!session) {
    return <p>Access denied. Please log in.</p>;
  }
  return <h1>Welcome, {session.user?.email}</h1>;
}
