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
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}
const trie = new Trie();
["apple", "app", "apt"].forEach(w => trie.insert(w));
document.getElementById("out").textContent =
  "startsWith app => " + trie.startsWith("app") + "\nstartsWith apx => " + trie.startsWith("apx");
