import styles from './page.module.css';
import { User } from '../types';

// async function fetchUsers(): Promise<User[]> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store" },);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Users List</h1>
      <ul className={styles.userList}>
        {users.map(user => (
          <li key={user.id} className={styles.userCard}>
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userDetail}>{user.email}</p>
            <p className={styles.userDetail}>{user.phone}</p>
            <p className={styles.userDetail}>{user.website}</p>
            <p className={styles.userDetail}>{user.address.city}</p>
            <p className={styles.userDetail}>{user.company.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
