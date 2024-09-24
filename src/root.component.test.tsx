import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Root from "./root.component";

describe("Root Component", () => {
  test("renders investment options", () => {
    render(<Root />);
    const investmentOptions = screen.getByText(/Investment Options/i);
    expect(investmentOptions).toBeInTheDocument();
  });

  test("renders investment cards", () => {
    render(<Root />);
    const investmentCards = screen.getAllByRole("listitem");
    expect(investmentCards.length).toBe(8); // Assuming there are 8 investments
  });

  test("opens modal on card click", () => {
    render(<Root />);
    const firstCard = screen.getAllByRole("listitem")[0];
    fireEvent.click(firstCard);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  test("closes modal on close button click", () => {
    render(<Root />);
    const firstCard = screen.getAllByRole("listitem")[0];
    fireEvent.click(firstCard);
    const closeButton = screen.getByText(/×/);
    fireEvent.click(closeButton);
    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });

  test("renders pagination buttons", () => {
    render(<Root />);
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons.length).toBe(5); // Assuming there are 5 pagination buttons
  });
});
