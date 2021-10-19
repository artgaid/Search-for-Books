import { render } from "@testing-library/react";
import HeaderTitle from "./headerTitle";

describe("HeaderTitle component", () => {
  it("render title", () => {
    const { getByText } = render(<HeaderTitle titleText="test" />);
    expect(getByText(/test/)).toBeInTheDocument();
  });
});
