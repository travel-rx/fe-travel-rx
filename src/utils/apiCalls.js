 export const getDrug = async (drug) => {
  const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${drug}&api_key=n5fe5G1BTGmOwMglgvku6uQpa67LURmUEiMpv2VV`)
  const generic = await response.json();
  return generic.results[0].openfda.generic_name[0]
}