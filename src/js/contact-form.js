document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action = form.action;

    try {
        const response = await fetch(action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("✅ Message sent successfully!");
            form.reset();
        } else {
            alert("❌ Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("⚠️ Network error. Please check your connection.");
    }
});