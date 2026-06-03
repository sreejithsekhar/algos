'''Build a query string parser. This problem should be presented in 4 stages. Move on to the next stage after completing the previous one without breaking any functionality.

1. Build a query string parser.
2. If there is no value for a key specified in the query string, we should treat that value as a boolean true.
3. Keys can be used multiple times. The resulting value for that key should be an array of all of the values in order they appear.
4. Build the inverse function. Given an object with keys and values, produce the query string.

Use built-in functions from Python's urllib or Javascript's decodeURIComponent and encodeURIComponent to simplify interpreting the strings.
 
EXAMPLE(S)
Input: ?foo=hello&bar=world
Output: { foo: "hello", bar: "world" }
 
FUNCTION SIGNATURE
function parseQueryString(query) { /* returns object */ }
def parse_query_string(query: str) -> dict: