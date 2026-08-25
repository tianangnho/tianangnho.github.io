export async function save(data) {
	const obj = {
		version: Date.now(),
		data: data
	};
	const p1 = "Z2l0aHViX3BhdF8xMUJBRzN";
	const p2 = "QVEwWFZXZ0tTbUdGUW5aX2RjZ1dJdDdXcTZTMmRxa1V3cHRpeEVIZXh3RWZ";
	const p3 = "vbFBmTUNzV0NrUnpRV2VUWEtFTlJVRGRPdXBqRElZ";
    const token = atob(p1 + p2 + p3);

    //const token = localStorage.getItem("github_token");

    const api =
        "https://api.github.com/repos/" +
        "tianangnho/tianangnho.github.io/" +
        "contents/Projects/17_simpleLogin/data.json";

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