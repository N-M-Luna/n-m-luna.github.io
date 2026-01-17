function displayPhoneNumbah() {
    const phoneSpantag = document.getElementById('phoneLink')
    phoneSpantag.setAttribute('onclick', '')
    phoneSpantag.classList.remove('underlined')
    phoneSpantag.classList.add('used')
    const contentSpan = document.getElementById('phoneContent')
    contentSpan.classList.remove('hidden')
}
function displayEmail() {
    const emailSpanTag = document.getElementById('emailLink')
    emailSpanTag.setAttribute('onclick', '')
    emailSpanTag.classList.remove('underlined')
    emailSpanTag.classList.add('used')
    const contentSpan = document.getElementById('emailContent')
    contentSpan.classList.remove('hidden')
}