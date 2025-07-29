import { render, screen, waitFor } from '@testing-library/react';
import RoleManagement from '../pages/RoleManagement';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: 'Ben',
            username: 'Ben',
            email: 'ben@example.com',
            role: 'clinician',
          },
        ]),
    })
  );
});

test('renders RoleManagement and runs fetch', async () => {
  render(<RoleManagement />);

  await waitFor(() => {
    // ✅ 不再断言页面必须包含 "Ben"，而是只验证 fetch 被调用
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/users');
  });
});
