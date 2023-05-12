import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "../src/components/TodoItem";

test("renders TodoItem with correct title and items", () => {
  const items = [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }];
  render(<TodoItem title="Test Todo" items={items} />);
  const todoTitle = screen.getByDisplayValue("Test Todo");
  expect(todoTitle).toBeInTheDocument();
});