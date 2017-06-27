async function getLiquidHtml({ filename }) {
  return await (await fetch(`/${filename}.html`)).text()
}

export default getLiquidHtml
