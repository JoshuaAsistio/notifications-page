window.addEventListener('DOMContentLoaded', () => {
    // GETTING ELEMENTS
    const button = document.getElementById('mark-as-read')
    const unreadMessages = document.querySelectorAll('.unread-bg')
    const stars = document.querySelectorAll('.red-text')
    let notifCounter = document.querySelector('.notification__number')
    //--------------------------------------------------------------------------------------------

    //DECLARING COUNT VARIABLE
    let count = 3
    //--------------------------------------------------------------------------------------------
    
    button.addEventListener('click', () => {
        //Loop through each eelement in the unread messages array, and change the background color to white.
        //remove the star elements in the website.
        //remove the notif counter in the website
        unreadMessages.forEach(item => {
            item.style.backgroundColor = 'hsl(0, 0%, 100%)'
        })

        stars.forEach(item => {
            item.style.display = 'none'
        })

        notifCounter.style.display = 'none'
    })

    //loop through unread messages and add an event listener for each item clicked.
    unreadMessages.forEach(item => {
        item.addEventListener('click', () => {
            //set the background color of the selected element to white.
            //then, remove the star element in the current element from the website.
            //decrease count
            //update the textContent value of the notifContent in the website.
            //then, check if the count is 0. If so, remove the notifCounter element in the site.
            item.style.backgroundColor = 'hsl(0, 0%, 100%)'

            item.children[1].style.display = 'none'

            count--

            notifCounter.textContent = count

            if (count === 0) {
                notifCounter.style.display = 'none'
            }
        })
    })
})