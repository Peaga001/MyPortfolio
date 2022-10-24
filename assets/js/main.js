const SelectLanguages  = {

    handleCheckbox: () => {


        const projects = document.getElementsByClassName('div-project')
        const checkboxs = document.getElementsByName('checkbox-languages')
        const max = checkboxs.length

        SelectLanguages.hiddenProjects(projects)

        if(SelectLanguages.checkMarked(checkboxs)){

            for(let i = 0; i < max; i++){
                SelectLanguages.handleLanguage(checkboxs[i])
            }
        }else{
            SelectLanguages.displayProjects(projects)
        }
    },

    handleLanguage: (object) => {

        const valueCheckbox = object.value
        const checked = object.checked === true
        const divProjects = document.getElementsByClassName('div-project')
        const max = divProjects.length

        for (let i = 0; i < max ; i++){

            const idDiv = divProjects[i].id
            const dataLanguages = idDiv.split( ' ')
            const index = dataLanguages.indexOf(valueCheckbox)

            SelectLanguages.displayFilter(idDiv, checked, index)

        }
    },

    checkMarked:(checkboxs) => {

        const max = checkboxs.length

        for (let i = 0; i < max ; i++){
            if(checkboxs[i].checked === true){
                return true
            }
        }

        return false
    },

    displayFilter: (idDiv, checked, index) => {

        const valid = index !== -1

        if(valid && checked){
            SelectLanguages.displayProject(idDiv)
        }
    },

    displayProject: (id) => {
        const object = document.getElementById(id)
        object.style.display = "block"
    },

    displayProjects: (projects) => {

        const max = projects.length

        for (let i = 0; i < max ; i++){
            projects[i].style.display = "block"
        }
    },

    hiddenProjects: (projects) => {

        const max = projects.length

        for (let i = 0; i < max ; i++){
            projects[i].style.display = "none"
        }
    }


}