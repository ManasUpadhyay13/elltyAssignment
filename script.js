const checkAllItems = () => {
    var firstCheckbox = document.getElementsByTagName('input')[0];
    if (firstCheckbox.checked) {
        for (let i = 0; i < 5; i++) {
            document.getElementsByTagName('input')[i].checked = true
        }
    } else {
        for (let i = 0; i < 5; i++) {
            document.getElementsByTagName('input')[i].checked = false
        }
    }
}