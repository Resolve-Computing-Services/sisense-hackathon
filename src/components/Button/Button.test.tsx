import { vi, describe, it, expect, beforeEach, afterEach } from "vitest"
import { render, cleanup, fireEvent } from "@testing-library/react"
import Button from "."

const text = "Sample Button Text"
const onClick = vi.fn()
let button: HTMLElement

describe("Test Button", () => {
  beforeEach(() => {
    const { getByRole } = render(<Button onClick={onClick}>{text}</Button>)
    button = getByRole("button")
  })
  afterEach(() => cleanup())
  it("should render button correctly", () => {
    expect(button).toBeDefined()
    expect(button.textContent).toMatch(text)
  })
  it("should handle onClick event correctly", () => {
    fireEvent.click(button)
    expect(onClick).toBeCalledTimes(1)
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(onClick).toBeCalledTimes(4)
  })
})
