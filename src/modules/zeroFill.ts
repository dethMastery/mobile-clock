function ZeroFill(input: string | number) {
  const parse = String(input)

  return (parse.length < 2) ? `0${parse}` : parse
}

export default ZeroFill