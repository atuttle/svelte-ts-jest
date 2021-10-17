import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("should render", () => {
  const { getByText } = render(App, { props: { name: "world" } });

  expect(() => getByText("Hello world!")).not.toThrow();
});

