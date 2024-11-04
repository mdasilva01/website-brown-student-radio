const API_READ_KEY = "DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY";
const API_WRITE_KEY = "H07cHdkwrLhtLFdibEr1z56U5PBuXkNExxETzF1DSt3SZv4Lyp";

export async function queryObjects(query) {
    const response = await fetch(`https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?read_key=${API_READ_KEY}&query=${encodeURIComponent(JSON.stringify(query))}&limit=100`);

    const result = await response.json();
    if (result.objects) return result.objects;
    else return [];
}

export async function postObject(object) {
    await fetch(
        `https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?write_key=${API_WRITE_KEY}`,
        {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_WRITE_KEY}`
            }
        }
    );
}