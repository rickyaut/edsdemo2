export default async function decorate(block) {
    const productsURL = block.querySelector('a[href$=".json"]');
    if (!productsURL) return;
      const resp = await fetch(productsURL);
    const json = await resp.json();
    block.innerHTML = ''
    json.data.forEach((product) => {
      var productArea = document.createElement('div')
      block.append(productArea)
      productArea.setAttribute("class", "product")
      var productName = document.createElement('div')
      productName.setAttribute('class', 'product-name')
      productName.innerHTML = product.Name
      productArea.append(productName)
    });
}