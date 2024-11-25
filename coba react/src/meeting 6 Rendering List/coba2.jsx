import React from 'react';

// Data pengguna
const users = [
  { id: 1, name: "Ali", age: 23 },
  { id: 2, name: "Budi", age: 30 },
  { id: 3, name: "Cindy", age: 27 },
  { id: 4, name: "Eka", age: 20 },
];

const App = () => {
  // 1. Tampilkan Semua Nama Pengguna
  const allUsers = users.map(user => <li key={user.id}>{user.name}</li>);

  // 2. Filter Pengguna dengan Usia di Atas 25 Tahun
  const usersAbove25 = users
    .filter(user => user.age > 25)
    .map(user => <li key={user.id}>{user.name}</li>);

  // 3. Gabungkan filter() dan map() untuk Nama dengan Huruf "e"
  const usersWithE = users
    .filter(user => user.name.toLowerCase().includes('e'))
    .map(user => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      <h2>Semua Nama Pengguna:</h2>
      <ul>{allUsers}</ul>

      <h2>Pengguna Usia di Atas 25 Tahun:</h2>
      <ul>{usersAbove25}</ul>

      <h2>Pengguna dengan Huruf 'e' di Namanya:</h2>
      <ul>{usersWithE}</ul>
    </div>
  );
};

export default App;
