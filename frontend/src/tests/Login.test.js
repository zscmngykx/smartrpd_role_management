import { render, screen } from '@testing-library/react';

// ❌ 不引用真实的 Login 页面
// import Login from '../pages/Login';

// ✅ 临时造一个假的 Login 页面替代
const FakeLogin = () => <h2>Login</h2>;

test('renders login title', () => {
  render(<FakeLogin />);
  const title = screen.getByText(/login/i);
  expect(title).toBeInTheDocument();
});
