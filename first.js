const languages = ['Hello', 'নমস্কার', 'नमस्ते', 'Hola', 'Bonjour', 'こんにちは', '你好'];
function changeLanguage() 
{
  const greetingElement = document.getElementById('greeting');
  const currentLanguage = greetingElement.textContent.split(" ")[1];
  const currentIndex = languages.indexOf(currentLanguage);
  const nextIndex = (currentIndex + 1) % languages.length;
  const newGreeting = `<span class="Say">${greetingElement.textContent.split(" ")[0]}</span> <span class="Hello">${languages[nextIndex]}</span>`;
  greetingElement.innerHTML = newGreeting;
  setTimeout(changeLanguage, 2000);
}
changeLanguage();
let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname)
{
  for(var tablink of tablinks)
  {
    tablink.classList.remove("activelink")
  }
  for(var tabcontent of tabcontents)
  {
    tabcontent.classList.remove("activetab")
  }
  event.target.classList.add("activelink")
  document.getElementById(tabname).classList.add("activetab")
}