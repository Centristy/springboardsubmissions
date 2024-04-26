class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val)  {
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // Otherwise, find the correct spot for the new node.
    var curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new Node(val);
          return this;
        } else {
          curr = curr.left;
        }
      } else if (val > curr.val) {
        if (curr.right === null) {
          curr.right = new Node(val);
          return this;
        } else {
          // value is equal
          curr = curr.right;
        }
      }
    }
  }


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val = 0, curr = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < curr.val) {
      if (curr.left === null) {
        curr.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, curr.left);
    } else {
      if (curr.right === null) {
        curr.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, curr.right);
    }



  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) { 

    // current node + boolean search value
    
    let currNode = this.root;
    let found = false;

    if (val === currNode.val) return currNode;

    while (currNode && !found) {
      if (val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return 
    return currNode;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {

    if (this.root === null) return ;

    if (val < curr.val) {
      if (curr.left === null) return ;
      return this.findRecursively(val, curr.left);
    } else if (val > curr.val) {
      if (curr.right === null) return ;
      return this.findRecursively(val, curr.right);
    }
    return curr;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let curr = this.root;

    function traverse(node) {
      arr.push(node.val); // visit
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(curr);
    return arr;
  }

  

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      data.push(node.val); // visit
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return data;
  }

  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
      data.push(node.val); // visit
    }

    traverse(current);
    return data;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let que = [];
    let data = [];

    que.push(node);

    while (que.length) {
      node = que.shift();
      data.push(node.val);
      if (node.left) {
        que.push(node.left);
      }
      if (node.right) {
        que.push(node.right);
      }
    }

    return data;

  }

}

module.exports = BinarySearchTree;
