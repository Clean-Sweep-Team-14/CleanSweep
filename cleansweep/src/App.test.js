import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.get(
      "http://https://clean-sweep-team-14-herokuapp.com/chores/easy/"
    );
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).not.to.be.encoded.with.gzip;
    return chakram.wait();
  });
});
