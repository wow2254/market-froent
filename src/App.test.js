import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i); // i	대소문자를 구분하지 않음.
    expect(linkElement).toBeInTheDocument();
});
