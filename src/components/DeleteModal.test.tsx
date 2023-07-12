import { fireEvent, render } from '@testing-library/react';
import Theme from '../styles/themeProvider';
import { DeleteModal } from './DeleteModal';
import { vi } from 'vitest';

describe('DeleteModal', () => {
  it('renders with text', () => {
    const mockOnCancelClick = vi.fn()
    const mockOnDeleteClick = vi.fn()
    const { getByText } = render(
      <Theme>
        <DeleteModal 
            id={'asdf'} 
            handleDelete={mockOnDeleteClick} 
            handleCancel={mockOnCancelClick} 
        />
      </Theme>
    );
    const text = getByText('Are you sure you want to delete invoice #asdf? This action cannot be undone.');
    expect(text).toBeInTheDocument();
  });

  it('clicking cancel calls the handleCancel prop', () => {
    const mockOnCancelClick = vi.fn()
    const mockOnDeleteClick = vi.fn()
    const { getByText } = render(
      <Theme>
        <DeleteModal 
            id={'asdf'} 
            handleDelete={mockOnDeleteClick} 
            handleCancel={mockOnCancelClick} 
        />
      </Theme>
    );
    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(mockOnCancelClick).toHaveBeenCalledTimes(1);
  });

  it('clicking delete calls the handleDelete prop', () => {
    const mockOnCancelClick = vi.fn()
    const mockOnDeleteClick = vi.fn()
    const { getByText } = render(
      <Theme>
        <DeleteModal 
            id={'asdf'} 
            handleDelete={mockOnDeleteClick} 
            handleCancel={mockOnCancelClick} 
        />
      </Theme>
    );
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(mockOnDeleteClick).toHaveBeenCalledTimes(1);
  });
});
