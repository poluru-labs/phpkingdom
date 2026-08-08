class TrieNode { constructor() { this.children = {}; this.end = false; } }
class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.end = true;
  }
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.end;
  }
}
const trie = new Trie();
["cat", "car", "dog"].forEach(w => trie.insert(w));
document.getElementById("out").textContent =
  "search cat => " + trie.search("cat") + "\nsearch ca => " + trie.search("ca") + "\nsearch car => " + trie.search("car");
