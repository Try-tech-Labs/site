import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, waitFor } from "@testing-library/react";

import Developers from "../../pages/Developers";

import getDevelopers from "../../services/DeveloperService";
import developers from "./mocks/developers";

const setup = () => {
  const wrapper = render(<Developers />);
  return { wrapper };
};

jest.mock("../../services/DeveloperService", () => jest.fn());

describe("Developers page", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  beforeEach(() => {
    cleanup();
  });

  it("displays the correct developer information", async () => {
    getDevelopers.mockImplementation(() => Promise.resolve(developers));
    const { wrapper } = setup();
    const { findByText, getByText, getByTestId } = wrapper;

    await waitFor(() => {
      findByText("Rod");
    });
    getByText("Oldschool guy that loves to be fast.");
    getByText("Delphi, XGH");
    expect(getByTestId("avatar").getAttribute("src")).toEqual(
      "https://revistahotrods.com.br/wp-content/uploads/2017/04/01.jpg"
    );
    expect(getByTestId("twitter-link").getAttribute("href")).toEqual(
      "https://twitter.com/roddeveloper"
    );
    expect(getByTestId("linkedin-link").getAttribute("href")).toEqual(
      "https://linkedin.com/roddeveloper"
    );
    expect(getByTestId("github-link").getAttribute("href")).toEqual(
      "https://github.com/roddeveloper"
    );
  });

  it("doesnt fails when not received all information", async () => {
    getDevelopers.mockImplementation(() =>
      Promise.resolve([
        {
          name: "Rod",
          avatar_image:
            "https://revistahotrods.com.br/wp-content/uploads/2017/04/01.jpg",
          github_url: "https://github.com/roddeveloper",
          development_skills: ["Delphi", "XGH"],
        },
      ])
    );
    const { wrapper } = setup();
    const { findByText, getByTestId } = wrapper;

    await waitFor(() => {
      expect(getByTestId("avatar").getAttribute("src")).toEqual(
        "https://revistahotrods.com.br/wp-content/uploads/2017/04/01.jpg"
      );
    });
    findByText("Rod");
    findByText("Nothing to say about me :)");
    findByText("Delphi, XGH");
    expect(getByTestId("github-link").getAttribute("href")).toEqual(
      "https://github.com/roddeveloper"
    );
    expect(getByTestId("twitter-link").getAttribute("href")).toEqual(
      "https://twitter.com/"
    );
    expect(getByTestId("linkedin-link").getAttribute("href")).toEqual(
      "https://linkedin.com/"
    );
  });
});
