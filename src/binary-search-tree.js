const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    _add(node, root) {
        if (!root) return node;

        if (node.data < root.data) {
            root.left = this._add(node, root.left);
        } else if (root.data < node.data) {
            root.right = this._add(node, root.right);
        }

        return root;
    }

    add(data) {
        this.rootNode = this._add(new Node(data), this.rootNode);
    }

    has(data) {
        return !!this.find(data);
    }

    _find(data, root) {
        if (!root) return root;

        if (data < root.data) {
            return this._find(data, root.left);
        } else if (root.data < data) {
            return this._find(data, root.right);
        }

        return root;
    }

    find(data) {
        return this._find(data, this.rootNode);
    }

    // https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/
    _remove(data, root) {
        if (!root) return root;

        if (data < root.data) {
            root.left = this._remove(data, root.left);
        } else if (root.data < data) {
            root.right = this._remove(data, root.right);
        } else {
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            root.data = this._min(root.right);
            root.right = this._remove(root.data, root.right);
        }

        return root;
    }

    remove(data) {
        this.rootNode = this._remove(data, this.rootNode);
    }

    _min(root) {
        if (!root) return root;

        if (root.left) {
            return this._min(root.left);
        }
        return root.data;
    }

    min() {
        return this._min(this.rootNode);
    }

    _max(root) {
        if (!root) return root;

        if (root.right) {
            return this._max(root.right);
        }
        return root.data;
    }

    max() {
        return this._max(this.rootNode);
    }
}

module.exports = {
    BinarySearchTree,
};
