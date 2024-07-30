export default async function decorate(block) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get('id');
    const productsURL = block.querySelector('a[href$=".json"]');
    if (!productsURL) return;
      const resp = await fetch(productsURL);
    const json = await resp.json();
    block.innerHTML = ''
    selectedProduct = json.data.filter(product => product.id = id);
    if(selectedProduct) {
      block.innerHTML = selectedProduct[0].Name + "<br>" + selectedProduct[0].Description
    }
  }