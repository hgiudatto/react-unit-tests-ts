import Home from "@/app/page";
import {
  render,
  screen,
  queryBy,
  getByRole,
  getByDisplayValue,
} from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    expect(screen.getByText("Hello NextJS 13!!!")).toBeInTheDocument();
    expect(screen.queryByText("I love TypeScript")).not.toBeInTheDocument();
  });

  it("should have button with text Click Me", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
  });

  it("should have input field with label Enter Random Text", () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });

  it("should have input field with label Enter Specific Text", () => {
    render(<Home />);
    expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
  });

  it("should find input field by placeholder text Search", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should find input field by display value", () => {
    render(<Home />);
    screen.getByDisplayValue(/AUDI/);
  });

  it("should not find element with text: This is the text!", () => {
    render(<Home />);
    screen.queryByText("This is the text!");
  });
});
