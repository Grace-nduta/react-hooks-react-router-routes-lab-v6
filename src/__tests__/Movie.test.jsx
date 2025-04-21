import { vi } from "vitest"; // Import Vitest's mocking utilities
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Movie from "../pages/Movie";

beforeEach(() => {
  // Mock the fetch API using Vitest's `vi.fn`
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          id: 1,
          title: "Doctor Strange",
          time: 115,
          genres: ["Action", "Adventure", "Fantasy"],
        }),
    })
  );
});

afterEach(() => {
  // Clear the mock after each test
  global.fetch.mockClear();
});

test("renders movie's title in an h1", async () => {
  const router = createMemoryRouter(
    [
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
    { initialEntries: ["/movie/1"] }
  );

  render(<RouterProvider router={router} />);

  const h1 = await screen.findByText(/Doctor Strange/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders movie's time within a p tag", async () => {
  const router = createMemoryRouter(
    [
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
    { initialEntries: ["/movie/1"] }
  );

  render(<RouterProvider router={router} />);

  const p = await screen.findByText(/115 minutes/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a span for each genre", async () => {
  const router = createMemoryRouter(
    [
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
    { initialEntries: ["/movie/1"] }
  );

  render(<RouterProvider router={router} />);

  const genres = ["Action", "Adventure", "Fantasy"];
  genres.forEach(async (genre) => {
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  });
});
