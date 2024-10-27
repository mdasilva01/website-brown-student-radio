const API_READ_KEY = "DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY";

export async function queryObjects(query) {
    const response = await fetch(`https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?read_key=${API_READ_KEY}&query=${encodeURIComponent(JSON.stringify(query))}&limit=100`);
    return (await response.json()).objects;
}