const API_READ_KEY = "DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY";
const API_WRITE_KEY = "H07cHdkwrLhtLFdibEr1z56U5PBuXkNExxETzF1DSt3SZv4Lyp";

export async function queryObjects(query) {
    const response = await fetch(`https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?read_key=${API_READ_KEY}&query=${encodeURIComponent(JSON.stringify(query))}&limit=100`);

    const result = await response.json();
    return result.objects || [];
}

export async function postObject(object) {
    await fetch(
        `https://api.cosmicjs.com/v3/buckets/bsr-production/objects/`,
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

export async function deleteObject(id) {
    await fetch(
        `https://api.cosmicjs.com/v3/buckets/bsr-production/objects/${id}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${API_WRITE_KEY}`
            }
        }
    );
}