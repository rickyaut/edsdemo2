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
      var productName = document.createElement('a')
      productName.setAttribute('class', 'product-name')
      productName.setAttribute('href', '/product-detail?id='+product.id)
      productName.innerHTML = product.Name
      productArea.append(productName)
    });
}