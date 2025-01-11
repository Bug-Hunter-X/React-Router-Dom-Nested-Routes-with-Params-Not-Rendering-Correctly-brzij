```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h2>User Profile: {userId}</h2>
      <Routes>
        <Route path="profile" element={<UserProfile userId={userId} />} />
      </Routes>
    </div>
  );
}

function UserProfile({ userId }) {
  return (
    <div>
      <p>User ID: {userId}</p>
      {/* ... other user profile details ... */}
    </div>
  );
}

export default App;
```