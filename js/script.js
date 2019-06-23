const tshirtThemeToColorOptions = {
    "Theme - JS Puns": `
        <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
        <option value="gold">Gold (JS Puns shirt only)</option> 
    `,
    "Theme - I &#9829; JS": `
        <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
        <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
        <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
    `
}

$(document).ready( () => {

    const $otherJobTitleInput = $('#other-title')
    const $jobTitleSelector = $('#title')
    const $tshirtThemeSelector = $('#design')
    const $tshirtColorSelector = $('#color')

    $('input[type="text"]').first().focus()
    
    // the other job role text input field should be hidden by default
    $otherJobTitleInput.hide();

    // if the user selects option 'other' in job role, display the text input
    $('#title').on("change", () => {    
        if ($jobTitleSelector.val() === "other") {
            $otherJobTitleInput.fadeIn(500)
        } else {
            $otherJobTitleInput.fadeOut(500)
        }
    })

    // when users changes theme, update available colors
    $tshirtThemeSelector.on("change", () => {
        const selectedTheme = $tshirtThemeSelector.val()
        const jsPunsColorOptions = tshirtThemeToColorOptions["Theme - JS Puns"]
        const heartJsColorOptions = tshirtThemeToColorOptions["Theme - I &#9829; JS"]
        const allColorOptions = `${jsPunsColorOptions}${heartJsColorOptions}`

        let colorOptionsToDisplay = ""

        if (selectedTheme === 'js puns') {
            colorOptionsToDisplay = jsPunsColorOptions
        } else if (selectedTheme === 'heart js') {
            colorOptionsToDisplay = heartJsColorOptions
        } else {
            colorOptionsToDisplay = allColorOptions
        }

        $tshirtColorSelector.html(colorOptionsToDisplay)
        
    })
}) 