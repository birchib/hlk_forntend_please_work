import shutil
import os

def handle_permission_error(func, path, exc_info):
    # Change permissions and retry
    os.chmod(path, 0o777)
    func(path)

def deinitialize_git(repo_path):
    git_dir = os.path.join(repo_path, '.git')
    if os.path.exists(git_dir):
        shutil.rmtree(git_dir, onerror=handle_permission_error)
        print(f"Successfully de-initialized Git in '{repo_path}'")
    else:
        print(f"No Git repository found in '{repo_path}'")

# Example usage
repo_path = r"C:\Users\Ian\Documents\Python_"
deinitialize_git(repo_path)