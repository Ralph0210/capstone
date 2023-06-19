import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CTA from './components/cta/CTA';

test('Renders the BookingForm heading', () => {
  render(
    <Router basename="/">
      <CTA />
    </Router>
  );

  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

