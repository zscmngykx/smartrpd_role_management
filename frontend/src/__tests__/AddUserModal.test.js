import { render, screen, fireEvent } from '@testing-library/react';
import AddUserModal from '../components/AddUserModal';

test('renders AddUserModal UI elements', () => {
  render(<AddUserModal show={true} onClose={() => {}} />);
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});
// 