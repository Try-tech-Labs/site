import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import SiteFooter from "../../components/SiteFooter";

const setup = () => {
  const wrapper = render(<SiteFooter />);
  return { wrapper };
};

describe("Website footer", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", () => {
    const { wrapper } = setup();
    const { getByText, getByTestId } = wrapper;
    getByTestId("footer-text");
    getByText("Back to home");
  });
});
