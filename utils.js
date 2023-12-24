export async function storefront(query, variables = {}) {
  const response = await fetch(
    "https://ddp4.myshopify.com/api/2023-10/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": "82834f90416db208ff7e6c38e588b24d",
      },
      body: JSON.stringify({query, variables})
    }
  )
  console.log(await response.json());
  
}

export async function shopifyFetch({ query, variables = {} }) {
  const endpoint = "https://ddp4.myshopify.com"
  const key = "82834f90416db208ff7e6c38e588b24d"
  console.log(key);
  console.log(endpoint);

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: { query, variables } && JSON.stringify({ query, variables })
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}