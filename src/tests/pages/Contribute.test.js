import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import Contribute from "../../pages/Contribute";

const setup = () => {
  const wrapper = render(<Contribute />);
  return { wrapper };
};

describe("Contribute page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", () => {
    const { wrapper } = setup();
    const { getByText, findByText, getByAltText } = wrapper;
    getByText("Do you want to join us");
    getByAltText("Question mark with green dot");
    getByAltText("Scientist in front some test tubes");
    findByText(
      "Suggest a change on any public project or start to code and open a pull request."
    );
    getByText("Access now our github page!");
  });
});
