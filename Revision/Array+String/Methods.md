# Array ki jitne methods yahan likhe hai All are mutable like array mein hi change krnege koi nyi array return nhi krenge

1. .push(x) -> element 'x' ko array ke last mein daal dega aur Array length return krgea 
2. .pop() -> last se elment nikal dega aur usi ko return 
3. .shift() -> shuru se elemnt htana ho to aur usi ko return 
4. .unshift() -> shuru mein element add krna ho aur yeh length return krta hai 
5. .splice() -> yeh apne ko woh array deti hai jo removed items ki hai 



# Below method are non-mutating - kuch to nya return krte hai like Array yaa String

1. .slice()  -> new Array() 
2. .concat() -> new Array()
3. .flat() -> new Array()
4. .flatMap() -> new Array();
5. .join() -> string chaiye kya array se lag do join
6. .sort() -> same array refrence -> mutates Array



<!-- String -->


| slice()         |
| `substring()`   | **new string**          |
| `substr()`      | **new string (legacy)** |
| `replace()`     | **new string**          |
| `replaceAll()`  | **new string**          |
| `toUpperCase()` | **new string**          |
| `toLowerCase()` | **new string**          |
| `trim()`        | **new string**          |




