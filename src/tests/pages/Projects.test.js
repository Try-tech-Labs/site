import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import Projects from "../../pages/Projects";

const setup = () => {
  const wrapper = render(<Projects />);
  return { wrapper };
};

describe("Projects page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with correct information", async () => {
    const { wrapper } = setup();
    const { getByAltText, getByText, findAllByText } = wrapper;
    getByAltText("background bottom left detail");
    getByAltText("background bottom right detail");
    getByText("Our tries");
    getByText("BR.TRENDS");
    getByText("A tool to get Brazilian trending topics");
    getByText("D.I.A.N.A");
    getByText("A new way to consume online content");
    const soon_cards = await findAllByText("Soon");
    expect(soon_cards).toHaveLength(1);
  });

  it("displays in progress badge correctly", async () => {
    const { wrapper } = setup();
    const { findAllByText } = wrapper;
    const in_progress_badges = await findAllByText("In progress");
    expect(in_progress_badges).toHaveLength(2);
  });
});
