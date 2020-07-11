import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

it("finds sign in", () => {
  const { getByText } = render(<Modal></Modal>);
  const linkElement = getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
