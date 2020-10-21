import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import * as api from './getNames';
import { NameList } from './NameList';

describe('NameList component specs', () => {
    // Test Case 1
    it('display user list with one item', async () => {
      // Arrange
      const getStub = jest
        .spyOn(api, 'getNames')
        .mockResolvedValue(['John Doe']);
  
      // Act
      const { getAllByTestId, queryByText  } = render(<NameList />);
  
      const elementBeforeWait = queryByText('John Doe');
      expect(elementBeforeWait).not.toBeInTheDocument();
  
      const elements = await waitFor(() => getAllByTestId('name'));
  
      // Assert
      expect(getStub).toHaveBeenCalled();
      expect(elements.length).toEqual(1);
      expect(elements[0].textContent).toEqual('John Doe');
    });
  
    // Test Case 2
    it('display a list of users with two items', async () => {
      // Arrange
      const getStub = jest
        .spyOn(api, 'getNames')
        .mockResolvedValue(['John Doe', 'Jane Doe']);
  
      // Act
      const { getAllByTestId } = render(<NameList />);
  
      const elements = await waitFor(() => getAllByTestId('name'));
  
      // Assert
      expect(getStub).toHaveBeenCalled();
      expect(elements.length).toEqual(2);
      expect(elements[0].textContent).toEqual('John Doe');
      expect(elements[1].textContent).toEqual('Jane Doe');
    });
  });