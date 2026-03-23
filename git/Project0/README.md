# GitHub-Pracatice

Step 1: 
Make a GitHub Repository and add a Collaborator.

Step 2:
Suppose two Person working on a same project-
Shikhar - main
Ansh -  collaborator

Ansh will clone the whole Repo and pass the following commands~

-git clone https://github.com/TheShikharr/GitHub-Pracatice.git
-cd .\GitHub-Pracatice\             [move to the GitHub Repo]
-git switch -C feature/Frontend     [make its own branch first]
-git branch                         [to view in which branch he is]
-git add .   ----important----      [after adding changes in the new branch i.e feature/Frontend]
-git commit -m "Frontend Added"
-git push -u origin feature/Frontend

After this the code will be saved in the branch-feature/Frontend.

Step 3:
Shikhar will see the whole code in the branch-feature/Frontend and verify it, if it is right or wrong. Then he can merge the branch code with the main code.

Shikhar will use the following git commands~

-git fetch
-git branch
-git switch feature/Frontend         [code in that branch will be visible in vscode editor]
-git switch main
-git merge feature/Frontend
-git push origin main

After this we will reload the GitHub and the merged code will be visible in the main branch.

Step 4:
Now, Ansh will fetch the whole code in the main branch, so he can work further with the project.

-git switch main
-git fetch
-git pull
