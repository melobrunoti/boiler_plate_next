export function getSegments() {
  return fetch(
    `http://localhost:81/cdc_contadigital_api_php/contadigital/produto-segmento`
  );
}
