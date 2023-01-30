const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

const shareContact = document.querySelector('.share-contact')
console.log(shareContact)


async function copyText(e) {
// prevent button going to site:

    e.preventDefault() // 
    const link = this.getAttribute('link') // grabbing attribute of 'link' data
    console.log(link)

    // adding link string to clip board:
    try {
        await navigator.clipboard.writeText(link)
        alert('Copied the text: ' + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButtons => shareButtons.addEventListener('click', copyText))
shareContact.addEventListener('click', copyText)