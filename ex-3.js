async function getUserData(userId) {
    try {
        const user = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!user.ok) {
            throw new Error(`HTTP error! Status: ${user.status}`);
        }
        let userData;
        try {
            userData = await user.json();
        } catch (err) {
            throw new Error('Failed to parse JSON' + err.message);
        }

        if (!userData || typeof userData.name !== 'string') {
            console.error('User data missing or does not have a name prop');
        } else {
            console.log(userData.name.toUpperCase());
        }
        return userData;
    } catch (newErr) {
        console.error('Was not able to deliver because of internet');
    }
}

getUserData('2')

