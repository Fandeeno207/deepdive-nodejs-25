import inquirer from 'inquirer';
async function mainLoop() {
    while (true) {
        try {
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'username',
                    message: 'Enter your GitHub username:(.exit If You Want To Stop)',
                    validate: function(value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please enter a valid GitHub username.';
                        }
                    }
                }
            ]);
            let username = answers.username;
            if (username === ".exit") {
                break;
            }
            let apiPath = `https://api.github.com/users/${username}/repos`;
            const response = await fetch(apiPath);
            const data = await response.json();
            if (data && data.length > 0) {
                console.log(data[0].name);
                console.log(data[0].html_url);
            } else {
                console.log("No repositories found.");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

mainLoop();
