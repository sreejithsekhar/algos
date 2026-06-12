
// # Problem Prompt
// # You are given:
// # • A string s consisting only of lowercase English letters (it may be empty).
// # • An array (or list) of lowercase strings called dictionary (it may be empty).
// # A word appears in s through deleting if you can remove some (possibly zero) characters from s without re-ordering the remaining characters and obtain exactly that word.
// # Among all dictionary words that can appear in s through deleting, return the single word that:
// # Has the greatest length, and
// # Is smallest in lexicographical (dictionary) order if multiple words share that maximum length.
// # If no dictionary word can be obtained from s this way, return the empty string.
// # Example(s)
// # Example 1
// # Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// # Output: "apple"
// # Example 2
// # Input: s = "abpcplea", dictionary = ["a","b","c"]
// # Output: "a"
// # Signature/Prototype
// # def findLongestWord(s: str, dictionary: List[str]) -> str
// # function findLongestWord(s: string, dictionary: string[]): string