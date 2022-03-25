import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<App name="hello world"/>);
    expect(getByText("hello world")).toMatchSnapshot();
  });
});
