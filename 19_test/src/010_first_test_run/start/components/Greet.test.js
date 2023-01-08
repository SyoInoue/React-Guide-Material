import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// testはjestの関数。第一引数にターミナルに出力される文字を入力。

test("h1が存在するかどうか", () => {
  render(<Greet />); //コンポーネントレンダリング。
  const h1El = screen.getByText("こんにちは"); //screenはレンダリングされたコンポーネントの中に要素があるかのチェックができる。
  expect(h1El).toBeInTheDocument();
  //expectは英語で期待する。expectの引数にちゃんと要素があるかどうかを確認する。
});
