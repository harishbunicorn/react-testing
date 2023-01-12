import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Greet renders correctly', ()=>{
  render(<Greet/>)
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
})

test('Greet renders with name', ()=>{
  render(<Greet name='harish'/>)
  const textElement = screen.getByText(/hello harish/i);
  expect(textElement).toBeInTheDocument();
});