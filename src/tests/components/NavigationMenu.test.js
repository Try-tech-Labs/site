import React from "react";
import "@testing-library/jest-dom/extend-expect";

import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import NavigationMenu from "../../components/NavigationMenu";

const setup = () => {
  const props = {
    useLogo: true,
  };

  const wrapper = render(<NavigationMenu {...props} />);
  return { wrapper, props };
};

describe("DeveloperCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("displays the navigation links", () => {
    const { wrapper } = setup();
    const { getByText } = wrapper;
    getByText("Home");
    getByText("About us");
    getByText("Our tries");
    getByText("Contribute");
  });

  it("not displays the site logo when on home", () => {
    const { wrapper } = setup();
    const { queryByTestId } = wrapper;
    const logo = queryByTestId("logo");
    expect(logo).toBeNull();
  });

  it("displays the site logo when out of the home", async () => {
    const { wrapper } = setup();
    const { getByAltText, getByText } = wrapper;
    const about_us_button = getByText("About us");
    fireEvent.click(about_us_button);
    await waitFor(() => screen.findByAltText("Web site logo image"));
    const logo = getByAltText("Web site logo image");
    expect(logo.getAttribute("width")).toEqual("162");
    expect(logo.getAttribute("height")).toEqual("70");
    expect(logo.classList.contains("site_menu")).toBe(true);
  });

  it("changes the style of the menu item when its the current page", async () => {
    const { wrapper } = setup();
    const { getByText } = wrapper;
    const about_us_button = getByText("About us");
    fireEvent.click(about_us_button);
    await waitFor(() => screen.findByAltText("Web site logo image"));
    expect(about_us_button.classList.contains("active")).toBeTruthy();
    expect(getByText("Home").classList.contains("active")).toBeFalsy();
    expect(getByText("Our tries").classList.contains("active")).toBeFalsy();
    expect(getByText("Contribute").classList.contains("active")).toBeFalsy();
  });

  it("doesnt breaks when renders without site logo", () => {
    const props = {
      useLogo: false,
    };
    const wrapper = render(<NavigationMenu {...{ props }} />);
    const { getByText, queryByTestId } = wrapper;
    getByText("Home");
    getByText("About us");
    getByText("Our tries");
    getByText("Contribute");
    expect(queryByTestId("logo")).toBeNull();
  });
});
