import { render, screen } from '@testing-library/react';
import App from './App';  // Adjust the import path if needed

test('renders timesheet management system header', async () => {
  render(<App />);
  // If this text appears asynchronously
  const headerElement = await screen.findByText(/Welcome to the Timesheet Management System/i);
  expect(headerElement).toBeInTheDocument();
});
