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

### Step 2: Make Changes to the Code

1. Open the project in VS Code.
2. Edit any file (e.g., add a comment or modify a line of code).
3. Save the file (Cmd + S).

### Step 3: Stage the Changes

1. Check the status of your repository:
   `git status`
2. What I do here is click the source control on vs code to push my changes.

## Update Another Local Directory with the Changes. (Make sure local file is up to date)

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

## Summary of Commands

`

# Clone a repository

git clone <repo_url>
cd <repo_name>

# Make and commit changes

git status
git add <file_name>
git commit -m "Describe changes"
git push origin <branch_name>

# Sync changes to another directory

```bash
cd /path/to/original/directory
git init # (if not already a git repo)
git remote add origin <repo_url> # (if remote is not set)
git checkout <branch_name>
git pull origin <branch_name>
```
