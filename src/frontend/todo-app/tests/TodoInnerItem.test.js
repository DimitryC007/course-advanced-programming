import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoInnerItem from '../src/components/TodoInnerItem';
import "@testing-library/jest-dom/extend-expect";

jest.mock('../src/services/TodoService');

describe('TodoInnerItem', () => {
    const todoItem = {
        id: '1',
        text: 'Do the laundry',
        completed: false,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render todo item correctly', () => {
        render(<TodoInnerItem id={todoItem.id} text={todoItem.text} completed={todoItem.completed} />);

        const todoText = screen.getByText(todoItem.text);
        expect(todoText).toBeInTheDocument();
    });

    it('should disable text field if todo item is completed', () => {
        render(<TodoInnerItem id={todoItem.id} text={todoItem.text} completed={true} />);
        const textField = screen.getByRole('textbox');
        expect(textField).toBeDisabled();
    });

    it('should not disable text field if todo item is not completed', () => {
        render(<TodoInnerItem id={todoItem.id} text={todoItem.text} completed={false} />);
        const textField = screen.getByRole('textbox');
        expect(textField).not.toBeDisabled();
    });

    it('should not apply line-through style to text field if todo item is not completed', () => {
        render(<TodoInnerItem id={todoItem.id} text={todoItem.text} completed={false} />);
        const textField = screen.getByRole('textbox');
        expect(textField).not.toHaveStyle('text-decoration: line-through');
    });
});