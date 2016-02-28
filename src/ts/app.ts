function test(a: string) {
    console.log(a + "toto" + 1)
}
test("ba")

interface yoyo {
  yo: number,
  yi: string
}

let b: yoyo = {
  yo: 2,
  yi: "5"
}

let c:yoyo = <yoyo>{}

document.write("hello glicko2")
