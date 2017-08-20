var Node = function (value) {
  this.value = value;
  this.children = [];
}

// by implementing storage as an object, you can check if they exist in O(1).
var Graph = function () {
  this.nodes = {};
}

Graph.prototype.addNode = function (val) {
  this.nodes[val] = new Node(val);
}

Graph.prototype.addEdge = function (fromNode, toNode) {
  this.nodes[fromNode].children.push(toNode);
}

Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (!this.nodes[fromNode]) {
    return false;
  }
  var adjacent = this.nodes[fromNode].children;

  for (var i = 0; i < adjacent.length; i++) {
    if (adjacent[i] === toNode) {
      return true;
    }
  }
  return false;
}

//GRAPH TRAVERSAL
var dfs = function (root) {
  var visited = {};
  if(!root) {
    return;
  }
  visit(root);
  visited[root] = true;
  root.children.forEach(node => {
    if (!node.visted){
      dfs(node);
    }
  })
}

var bfs = function (root) {
  var queue = [];
  var visited = {};

  queue.push(root);

  while (queue.length > 0) {
    var node = queue.shift();
    visit(node);
    visited[node] = true;
    node.children.forEach(node => {
      if (!visited[node]) {
        queue.push(node);
      }
    })
  }
}


var BinarySearchTreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var BinarySearchTree = function (root) {
  this.root = root;
}

BinarySearchTree.prototype.addNode = function (value) {
  var node = this.root;
  var parent = this.root;

  while (node !== null) {
    if (value < node.value) {
      parent = node;
      node = node.left;
    } else {
      parent = node;
      node = node.right;
    }
  }

  if (value < parent.value) {
    parent.left = new BinarySearchTreeNode(value);
  } else {
    parent.right = new BinarySearchTreeNode(value);
  }
}

module.exports = {
  Graph: Graph,
  dfs: dfs,
  bfs: bfs,
  BinarySearchTreeNode: BinarySearchTreeNode,
  BinarySearchTree: BinarySearchTree
}
