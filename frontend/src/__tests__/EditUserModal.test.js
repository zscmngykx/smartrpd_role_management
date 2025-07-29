import { render, screen, fireEvent } from '@testing-library/react';
import EditUserModal from '../components/EditUserModal';

test('renders EditUserModal inputs', () => {
  const user = { id: 1, name: 'Ben', email: 'ben@example.com' };
  render(<EditUserModal show={true} user={user} onClose={() => {}} />);
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/save changes/i)).toBeInTheDocument();
});
