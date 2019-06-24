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

const actitivies = {
    "all": {
        name: "all",
        title: "Main Conference",
        costDollars: 200,
        html: '<label><input type="checkbox" name="all"> Main Conference — $200</label>',
        selected: false,
        disabled: false 
    },
    "js-frameworks": {
        name: "js-frameworks",
        title: "JavaScript Frameworks Workshop",
        time: "Tueday 9am-12pm",
        costDollars: 100,
        html: '<label><input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>',
        selected: false,
        disabled: false,
        mutuallyExclusive: ["express"]
    },
    "js-libs": {
        name: "js-libs",
        title: "JavaScript Libraries Workshop",
        time: "Tuesday 1pm-4pm",
        costDollars: 100,
        html: '<label><input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>',
        selected: false,
        disabled: false,
        mutuallyExclusive: ["node"]
    },
    "express": {
        name: "express",
        title: "Express Workshop",
        time: "Tuesday 9am-12pm",
        costDollars: 100,
        html: '<label><input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100</label>',
        selected: false,
        disabled: false,
        mutuallyExclusive: ["js-frameworks"]
    },
    "node": {
        name: "node",
        title: "Node.js Workshop",
        time: "Tuesday 1pm-4pm",
        costDollars: 100,
        html: '<label><input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100</label>',
        selected: false,
        disabled: false,
        mutuallyExclusive: ["js-libs"]
    },
    "build-tools": {
        name: "build-tools",
        title: "Build tools Workshop",
        time: "Wednesday 9am-12pm",
        costDollars: 100,
        html: '<label><input type="checkbox" name="build-tools"> Build tools Workshop — Wednesday 9am-12pm, $100</label>',
        selected: false,
        disabled: false
    },
    "npm": {
        name: "npm",
        title: "npm Workshop",
        time: "Wednesday 1pm-4pm",
        costDollars: 100,
        html: '<label><input type="checkbox" name="npm"> npm Workshop — Wednesday 1pm-4pm, $100</label>',
        selected: false,
        disabled: false
    },
    
}

let $activityCheckboxes 

$(document).ready( () => {

    const $otherJobTitleInput = $('#other-title')
    const $jobTitleSelector = $('#title')
    const $tshirtThemeSelector = $('#design')
    const $tshirtColorSelector = $('#color')
    $activityCheckboxes = $('.activities input[type="checkbox"]')

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

    $('.activities').on("click", (e) => {
        if (e.target.type === "checkbox") {
            const selectedActivitiy = actitivies[e.target.name]
            selectedActivitiy.selected = e.target.checked

            // set all checkboxes to enabled by default
            $($activityCheckboxes).each((index, checkbox) => {
                checkbox.disabled = false
                actitivies[checkbox.name].disabled = checkbox.disabled
                $(checkbox).parent().removeClass('disabled')
            })

            // set any mutually exclusive activities to disabled in activities model
            $(Object.keys(actitivies)).each((index, activityKey) => {
                const activity = actitivies[activityKey]
                if(activity.selected) {
                    $(activity.mutuallyExclusive).each((index, nameOfActivityToDisable) => {
                        actitivies[nameOfActivityToDisable].disabled = true 
                    }) 
                }
            })

            // update disabled 
            $($activityCheckboxes).each((index, activity) => {
                activity.disabled = (actitivies[activity.name].disabled)
                if (activity.disabled) {
                    $(activity).parent().addClass('disabled')
                } 
            })

            // update price of activities
            let totalPrice = 0
            $(Object.values(actitivies)).each((index, activity) => {
                if(activity.selected) {
                    totalPrice += activity.costDollars
                }
            }) 
            const totalPriceText = (totalPrice === 0) ? "---" : `$${totalPrice}`
            $('#total-price').text(totalPriceText)
    
        }  
    })
}) 

function activityCheckboxSelectionHandler() {
    $activityCheckboxes.each((index, checkbox) => {
        // iterate over each checkbox and check which ones are selected
        if(checkbox.checked) {
            if (actitivies[checkbox.name]) {
                console.log(actitivies[checkbox.name])
                actitivies[e.target.name].selected = true 
            }
        }
    })
}

function disableMutuallyExclusiveCheckboxes(activityName) {
    for( let i = 0; i < mutuallyExclusiveActivitiesByName.length; i++) {
        const innerArray = mutuallyExclusiveActivitiesByName[i]
        if (innerArray.includes(firstName)) {
            checkboxesToDisable = innerArray.filter( item => item.name !== activityName )
            checkboxesToDisable.forEach( name => {
                
            })
            return true 
        }
    }
}

function checkIfMutuallyExclusive(firstName, secondName) {

    for( let i = 0; i < mutuallyExclusiveActivitiesByName.length; i++) {
        const innerArray = mutuallyExclusiveActivitiesByName[i]
        if (innerArray.includes(firstName) && innerArray.includes(secondName)) {
            return true 
        }
    }

    return false 
} 