import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders App component", () => {
  render(<App />);
  const appComponent = screen.getByTestId("app-component");
  expect(appComponent).toBeInTheDocument();
});

test("renders header with correct text", () => {
  render(<App />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toHaveTextContent("Welcome to Sarom Logistics");
});

test("renders footer with correct text", () => {
  render(<App />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toHaveTextContent(
    "© 2022 Sarom Logistics. All rights reserved."
  );
});
