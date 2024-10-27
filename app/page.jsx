import User from '@/components/user';

export default function Home() {
  const logoutAction = async () => {
    'use server';
    const result = await fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include',
    });

    console.log(result.status);
  };
  return (
    <main>
      <User />
      <hr />
      <a href="http://localhost:3000/login/federated/google">
        Login with Google
      </a>

      <form action={logoutAction}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}
