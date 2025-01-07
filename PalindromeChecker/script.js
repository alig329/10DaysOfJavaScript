

function isPalindrome(str) {
  let input = str.toLowerCase().replace(/[\W_]/g, '');
  let reversed = input.split('').reverse().join('');
  return input === reversed;
}

function palindromeChecker() {
  let input = document.getElementById("inputText").value;
  let isInputPalindrome = isPalindrome(input);
  let result = document.getElementById("result");

  if (input.length === 0) {
    result.innerHTML = "Please enter a word or phrase.";
  } else if (isInputPalindrome) {
    result.innerHTML = "Yes, it's a palindrome!";
  } else {
    result.innerHTML = "No, it's not a palindrome.";
  }

  result.classList.add("fadeIn");
    setTimeout(() => {
        result.classList.remove("fadeIn");
    }, 1000); 
}

document.getElementById("checkButton").addEventListener("click", palindromeChecker);
