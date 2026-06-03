// Implement a context-aware autocomplete engine for a product search box.
// You are given historical search data. Each entry has:
// query text (string)
// frequency (integer)
// category (string), e.g. "electronics"
// Build a class ProductSearch with these operations:
// Initialization
// ProductSearch(queries, frequencies, categories)
// Precondition: all three arrays are the same length.
// The initial data may contain duplicate query strings. In that case:
// sum their frequencies
// keep the category from the first occurrence
// Context
// Python: set_context(category); JavaScript: setContext(category)
// Sets the user’s current context category.
// Passing None (Python) / null (JS) clears the context.
// Changing context affects ranking immediately but does NOT reset the currently-typed prefix.
// Typing
// input(char) processes one character at a time.
// If char == '#', treat the current typed prefix as a completed query:
// If the query already exists, increment its frequency by 1 and keep its original category.
// If it does not exist, add it with frequency 1 and category = current context, or "uncategorized" if context is cleared.
// Then reset the session state (empty prefix) and return [].
// If char != '#', append it to the current prefix and return up to 3 suggestions that start with the prefix.
// Ranking rules for suggestions
// Each query has a base frequency.
// Compute an effective frequency:
// if query.category == current context: effective = base × 2
// else: effective = base
// Higher effective frequency ranks earlier.
// Ties are broken lexicographically (alphabetical order).
// Additional behavior
// If the user types a prefix that matches no queries, return [] for that keystroke and keep returning [] for subsequent characters until '#' is entered (which resets the session).
// If '#' is pressed when the current prefix is empty, do not record an empty query; simply return [] and remain/reset to the empty state.
// Assume queries may contain spaces and punctuation; only '#' is reserved as the end-of-query marker.
// Example(s)
// Example 1: Basic suggestions + context boost

// queries      = ["laptop", "laptop stand", "lamp", "leather bag"]
// frequencies  = [10, 5, 8, 3]
// categories   = ["electronics", "electronics", "home", "fashion"]

// ps = ProductSearch(queries, frequencies, categories)

// ps.input('l')
// # Prefix: "l"
// # Effective freqs (no context): laptop 10, lamp 8, laptop stand 5, leather bag 3
// # => ["laptop", "lamp", "laptop stand"]

// ps.input('#')
// # Records "l" as a query (category = "uncategorized" because context is cleared)
// # Resets prefix

// ps.set_context("electronics")
// ps.input('l')
// # Prefix: "l"
// # Effective freqs: laptop 20, laptop stand 10, lamp 8, leather bag 3
// # => ["laptop", "laptop stand", "lamp"]


// Example 2: Switching context mid-search does not reset the prefix

// ps2 = ProductSearch(["mouse", "monitor", "mop"], [5, 4, 6], ["electronics", "electronics", "home"])

// ps2.set_context("home")
// ps2.input('m')
// # Prefix: "m"
// # Effective freqs: mop 12, mouse 5, monitor 4
// # => ["mop", "mouse", "monitor"]

// ps2.set_context("electronics")
// ps2.input('o')
// # Prefix: "mo" (NOT reset)
// # Effective freqs: mouse 10, monitor 8, mop 6
// # => ["mouse", "monitor", "mop"]

// ps2.input('#')
// # Records "mo" and resets


// Example 3: '#' with an empty prefix

// ps.input('#')
// # => []
// # Does not record an empty query

/*

explore:
    handle:
        set context -- change context or set null (default - uncategorized)
        input:
            #
                if exist
                doesnot exist
                empty
            not #
                find matching elemtns for category or all
                calculate effective ranking
                retrieve top 3 if tied return alph asorting

    
    open questions:
        can there be new categories
        do we update the frequency with effective frequency or is effective freq only used for ranking and will be cleared after each search

brain storm:
    use a map:
        map of categories:
            nested map of keywords : base frequency
        map of just all the keywords for handling uncategorized
     problem is prefix search

     best algorithm for prefix search is a trie

        prefix search finds the keywords
            which points to the ctegory
                find the ranking and show to user
        on hash enter that keyword
            and point to the category  or add new category



*/


class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.frequency = 0;
    this.category = null;
  }
}

class ProductSearch {
  constructor(queries, frequencies, categories) {
    this.root = new TrieNode();
    this.context = null;
    this.prefix = "";

    // Handle duplicates: sum frequencies, keep first category
    const seen = new Map();
    for (let i = 0; i < queries.length; i++) {
      if (seen.has(queries[i])) {
        const entry = seen.get(queries[i]);
        entry.frequency += frequencies[i];
      } else {
        seen.set(queries[i], { frequency: frequencies[i], category: categories[i] });
      }
    }

    for (const [query, data] of seen) {
      this._insert(query, data.frequency, data.category);
    }
  }

  _insert(query, frequency, category) {
    let node = this.root;
    for (const ch of query) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
    node.frequency = frequency;
    node.category = category;
  }

  _findNode(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }

  _collect(node, path, results) {
    if (node.isEnd) {
      results.push({ query: path, frequency: node.frequency, category: node.category });
    }
    for (const ch in node.children) {
      this._collect(node.children[ch], path + ch, results);
    }
  }

  setContext(category) {
    this.context = category;
  }

  input(char) {
    if (char === '#') {
      if (this.prefix.length > 0) {
        const node = this._findNode(this.prefix);
        if (node && node.isEnd) {
          node.frequency += 1;
        } else {
          const category = this.context || "uncategorized";
          this._insert(this.prefix, 1, category);
        }
      }
      this.prefix = "";
      return [];
    }

    this.prefix += char;
    const node = this._findNode(this.prefix);
    if (!node) return [];

    const results = [];
    this._collect(node, this.prefix, results);

    results.sort((a, b) => {
      const effA = a.category === this.context ? a.frequency * 2 : a.frequency;
      const effB = b.category === this.context ? b.frequency * 2 : b.frequency;
      if (effB !== effA) return effB - effA;
      return a.query.localeCompare(b.query);
    });

    return results.slice(0, 3).map(r => r.query);
  }
}

// Example 1
console.log("--- Example 1 ---");
const ps = new ProductSearch(
  ["laptop", "laptop stand", "lamp", "leather bag"],
  [10, 5, 8, 3],
  ["electronics", "electronics", "home", "fashion"]
);

console.log(ps.input('l'));  // ["laptop", "lamp", "laptop stand"]
console.log(ps.input('#')); // Records "l", returns []

ps.setContext("electronics");
console.log(ps.input('l')); // ["laptop", "laptop stand", "lamp"]

// Example 2
console.log("\n--- Example 2 ---");
const ps2 = new ProductSearch(["mouse", "monitor", "mop"], [5, 4, 6], ["electronics", "electronics", "home"]);

ps2.setContext("home");
console.log(ps2.input('m'));  // ["mop", "mouse", "monitor"]

ps2.setContext("electronics");
console.log(ps2.input('o')); // ["mouse", "monitor", "mop"]
console.log(ps2.input('#')); // Records "mo", returns []

// Example 3
console.log("\n--- Example 3 ---");
console.log(ps.input('#')); // [] — empty prefix, nothing recorded
