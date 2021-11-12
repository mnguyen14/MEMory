const submitEntryHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#entry-title').value.trim();
    const text = document.querySelector('#text-area').value.trim();

    if (title && text) {
        const response = await fetch('/api/user/entry', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to make journal entry.');
        }
    }
};

document
    .querySelector('.submitEntry-form')
    .addEventListener('submit', submitEntryHandler);