function confirmEnding(str, target) {
  let regex = new RegExp(target + '$');
  let result = regex.test(str);
  return result;
}

confirmEnding("Bastian", "n");

/*use new RegExp() when it comes to checking for a specific given argument in a given object or string etc.

if we just did /target$/ it would have taken it literally as the word target.
 */
