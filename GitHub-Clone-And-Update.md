# Complete Git Workflow for GitHub

### Scenario:

You want to clone a GitHub repository, make updates, push them to GitHub, and sync those updates with another local working directory.

Lets say you are working on multiple machines. I want to make sure I can clone a project and update those files to make sure I am working on the most recent version.

## Clone Repo to Your Machine

### Step 1: Clone the Repository

1. Open the terminal in VS Code.
2. Navigate to the folder where you want to clone the repository:
   `cd /path/to/your/desired/location` - on your machine
3. Clone the repository - url of repository:
   `git clone https://github.com/[your-user-name]/[repo-name].git`
4. Move into the newly cloned directory:
   `cd [your-file]`(on your machine)

   ** Note: To download dependencies: `npm install`**

### Step 2: Make Changes to the Code

1. Open the project in VS Code.
2. Edit any file (e.g., add a comment or modify a line of code).
3. Save the file (Cmd + S).

### Step 3: Stage the Changes

1. Check the status of your repository:
   `git status`
2. What I do here is click the source control on vs code to push my changes.

## Update Another Local Directory with the Changes. IF NEVER CONNECTED TO REPO (Make sure local file is up to date)

### Step 1. Navigate to the Directory

1. Open the terminal in VS Code.
2. Navigate to your original working directory:
   `cd /path/to/your/original/working/directory`

### Step 2. Initialize Git (If Needed)

1. If this directory isn’t already a Git repository, initialize Git:
   `git init`
2. Link it to the GitHub repository:
   `git remote add origin https://github.com/[user-name]/[repo-name].git`
3. Verify the remote connection:
   `git remote -v`

### Step 3. Pull Changes from GitHub

1. Ensure you’re on the correct branch:
   `git checkout main`
2. Pull the latest changes:
   `git pull origin main`

## Update Another Local Directory with the Changes. **_If the Repository Connection is Already Made_** (Make sure local file is up to date)

### Step 1. Verify Existing Remote:

`git remote -v`

### Step 2. Update Remote (if needed): If the current remote is incorrect or needs to be changed:

`git remote set-url origin <repo_url>`

### Step 3. Fetch Updates from the Remote:

`git fetch origin`

### Step 4. Merge Updates into Your Local Branch:

`git merge origin/main` (Replace main with your branch name if different.)

### Step 5. Alternatively, Use git pull to Fetch and Merge in One Step:

`git pull origin main`

# TL;DR Summary of Commands

### Clone a repository

Use these commands when you want to clone a repository and start working on it locally for the first time:

```bash
# Navigate to the desired folder
cd /path/to/your/desired/location

# Clone the repository
git clone <repo_url>

# Move into the cloned repository folder
cd <repo_name>
```

** Note: To download dependencies: `npm install`**

### Pull Changes and Update Local Files (No Existing Connection to Repo)

```bash
# Navigate to the local folder with your files
cd /path/to/your/local/folder

# Initialize Git in this folder
git init

# Add the remote repository connection
git remote add origin <repo_url>

# Pull the latest changes from the repository
git pull origin main
```

### Update Files Where Connection to Repo Already Exists

```bash
# Navigate to the local folder
cd /path/to/your/local/folder

# Fetch changes from the remote repository
git fetch origin

# Merge changes into your current branch
git merge origin/main

# Alternatively, use git pull to fetch and merge in one step
git pull origin main
```

## Save changes to a branch other than the main branch

### Step 1: Check the Current Branch

1. Run the following command to see which branch you're on:

```bash
git branch
```

### Step 2: Create a New Branch

1. Create a new branch (e.g., feature-branch):

```bash
git branch feature-branch
```

2. Switch to the new branch:

```bash
git checkout feature-branch
```

Or create and switch in one step:

```bash
git checkout -b feature-branch
```

### Step 3: Make Your Changes

1. Edit your files as needed.
2. Stage the changes:

```bash
git add .
```

3. Commit the changes:

```bash
git commit -m "Describe your changes"
```

### Step 4: Push the New Branch to GitHub

1. Push the branch to the remote repository:

```bash
git push origin feature-branch
```

### Switching Between Branches

1. To switch back to the main branch:

```bash
git checkout main
```

2. To switch back to your feature branch:

```bash
git checkout feature-branch
```

### Common Commands for Branch Management

- List all branches:

```bash
git branch -d branch-name
```

- Delete a branch locally:

```bash
git branch
```

- Merge a branch into main:

```bash
git checkout main
git merge feature-branch
```
