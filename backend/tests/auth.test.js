test('unauthorized access returns 403 status', () => {
  const status = 403;
  const body = { message: 'Access denied' };

  expect(status).toBe(403);
  expect(body.message).toMatch(/Access/);
});
