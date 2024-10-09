# A Quick Guide to Git Commands for Collaboration

### 1. Initialize the Project
`git clone <repository_url>`
> Clone the repository to your local machine.

### 2. Create a feature branch
`git checkout -b <feature_branch>`
> Create a new branch to avoid code conflicts.

#### 2.1 Check all branch
`git branch -a`
> Confirm that the branch has been created.

### 3. Sync your work
#### 3.1 Add Files to Staging
`git add <file_name>`
> Add updated files to staging. Use `git add .` to stage all files that are not marked in ***.gitignore***.

#### 3.2 Commit Your Changes
`git commit -m "<your_message>"`
> Commit the changes in the staging area to the local repository. Use *your_message* to describe what you did.

#### 3.3 Push to your branch
`git push -u origin <feature_branch>`
> Push your changes to the remote branch. You can check your current branch with `git status`.

### 4 Submit a Pull Request (PR)
`git request-pull <base_branch> <repository_url>`
> Send a **PR** to the administrator to integrate your code. If you don't know your repository_url, check it using `git remote -v`.

---
<div align="right">

###### *Last Modified by [SeeChen](https://github.com/SeeChen/) @ 09-OCT-2024 16:50 UTC +08:00*
</div>