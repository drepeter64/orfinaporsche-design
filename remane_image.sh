# Description: Rename image files in the current directory and its subdirectories by replacing '[' with '-'.
find . -depth -name "*[*" -execdir bash -c 'for f in "$@"; do mv -nv "$f" "${f//[/-}"; done' dummy {} +
