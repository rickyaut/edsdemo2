export default async function decorate(block) {
    const resp = await fetch(`/products.json`);
    const json = await resp.json();
    json.data.forEach((product) => {
      console.log(prouct.Name);
    });
}