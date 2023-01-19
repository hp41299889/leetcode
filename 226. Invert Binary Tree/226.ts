//Runtime: 97 ms

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};