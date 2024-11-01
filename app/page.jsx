import Logout from '@/components/logout';
import User from '@/components/user';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <User />
      <hr />

      <a href="http://localhost:3000/login/federated/google">
        Login with Google
      </a>
      <hr />
      <Link href="/proba">Proba</Link>
      <hr />
      <Logout />
    </main>
  );
}
