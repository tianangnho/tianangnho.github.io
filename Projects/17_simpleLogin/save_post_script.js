export async function save(data) {
	const obj = {
		version: Date.now(),
		data: data
	};

    const token = localStorage.getItem("github_token");

    const api =
        "https://api.github.com/repos/" +
        "tianangnho/tianangnho.github.io/" +
        "contents/Projects/17_simpleLogin/Data.json";

    const r = await fetch(api, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const file = await r.json();

    const content = btoa(
    Array.from(
        new TextEncoder().encode(
            JSON.stringify(obj, null, 2)
        ),
        byte => String.fromCharCode(byte)).join(""));

    await fetch(api, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "Update checklist status",
            content,
            sha: file.sha
        })
    });
}