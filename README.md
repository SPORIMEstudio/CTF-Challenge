## 🚩 Bandit CTF Challenge Tracker
A modular, web-based walkthrough for the **OverTheWire: Bandit wargame.** This project is designed to be easily forkable, allowing users to create their own challenge repositories or document their own CTF journeys.

## 🚀 Features
* **Modular Design:** Easily swap out challenge data by editing a single JavaScript file.

* **Step-by-Step Guidance:** Each level includes the goal, the specific commands used, and the expected output.

* **Educational Context:** Includes "Why?" sections and command explanations to help beginners understand Linux fundamentals (like why we use ./ for certain filenames).

* **Ready for GitHub Pages:** Deploy your own version of this tracker in seconds.

## 📂 Project Structure

```bash
├── index.html          # The main interface and frontend layout
└── src/                # Core application logic and data
    ├── app.js          # The engine that renders challenges and UI interactions
    └── solution.js     # The "Database" containing all level data and solutions
```
## 🛠️ Customization (Make it Yours)
Because the site is data-driven, you can adapt it for any CTF or tutorial series:
1. **Fork** this repository.
2. Open `src/solution.js`.
3. **Update** the banditSolutions array with your own walkthrough data using this schema:
```js
{
    id: "level-id",
    title: "Level Name",
    goal: "The mission objective",
    steps: [
        { 
            label: "Action Title", 
            description: "Context or explanation", 
            dir: "user@linux:~$", 
            command: "cat readme", 
            output: "password_here" 
        }
    ]
}
```
## 🎮 Current Progress: Bandit 0 ➞ 5
The current `solution.js` covers the following concepts:

* **Level 0:** SSH connection basics.
* **Level 1:** Handling files named with special characters (-).
* **Level 2:** Navigating files with spaces in the name.
* **Level 3:** Finding hidden files (ls -a).
* **Level 4:** Using the file command to identify human-readable data.
* **Level 5:** Advanced find command usage (filtering by size and properties)

> [!NOTE]
> I made this repository to save my data and also help others. If you find something wrong, you should Google it—the methods and commands I used can be applied in many different ways!
