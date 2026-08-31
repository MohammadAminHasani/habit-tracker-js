'use strict'

// =====================
// Configuration
// =====================

const APP_NAME = 'HABIT TRACKER v1.0'
const LINE = '=================='

// =====================
// Data
// =====================

const habits = []

// =====================
// Main Controller
// =====================

function mainMenu(){
    let isRunning = true
    while(isRunning){
            const choice = prompt(
                    APP_NAME + '\n'+
                    LINE + '\n\n'+
                    'PERSONAL CONTROL PANEL\n\n'+
                    '1. Create new objective\n' +
                    '2. Review progress\n' +
                    '3. Update completion\n' +
                    '4. Manage objectives\n' +
                    '5. Exit'
                    )

                    if (choice === null) {
                        isRunning = false
                     break
                    }

            switch(choice){
                case '1':
                    addObjective()
                    break
                case '2':
                    showObjectives()
                    break
                case '3':
                    updateCompletion()
                    break
                case '4':
                    deleteObjective()
                    break
                case '5':
                    const askExit = prompt('SESSION TERMINATION\n=============\n\n'+'End current session? (y/n): ')
                    if (askExit === 'y' || askExit === 'Y'){
                    isRunning = false
                    }
                    
                    break
                default :
                    console.log('Invalid command. Please select a valid option.')
            }
        }
}

// =====================
// Objective Management
// =====================

function deleteObjective() {


    const objectiveIndex = prompt('OBJECTIVE MANAGEMENT\n=============\n\n'+'Select an objective to remove: ')
    if (objectiveIndex > 0 && objectiveIndex <= habits.length) {

        const confirmRemoval = prompt('REMOVAL REQUEST\n=============\n\n'+'This action cannot be reversed.\n'+'Confirm removal(y/n): ')
    
        if (confirmRemoval === 'y'|| confirmRemoval === 'Y'){
            habits.splice(objectiveIndex - 1, 1)
            console.log('REMOVAL COMPLETE.\n\n'+
                'Objective deleted successfully.')
        } else {
            console.log('REMOVAL CANCELLED.\n\n'+
                'No changes were made.')
        }
    } else {
        console.log('INVALID SELECTION.\n\n'+'No matching objective found.')
    }
}

function addObjective(){

    const objectiveName = prompt('NEW OBJECTIVE\n=============\n'+
                'Define your next focus.\n\n'+
                'Objective name: ')

                const cleanName = objectiveName ? objectiveName.trim() : ''

                if (!cleanName) {
                    console.log('OBJECTIVE NAME REQUIRED.')
                    return
                }

    const newObjective = {
        id : habits.length +1,
        name : cleanName,
        completed : false
    }

    habits.push(newObjective)

    console.log('OBJECTIVE CREATED\n\n'+
                'Tracking is now active.')
}

function showObjectives() {
    if (habits.length === 0) {
        console.log('NO OBJECTIVES FOUND.\n\n'+'Create your first objective to begin tracking.')
        return
    }
      console.log('PROGRESS OVERVIEW\n================\n\n'+
                'Analyzing current performance...')

    for(let i = 0; i < habits.length; i++){
        const status = habits[i].completed ? 'COMPLETED' : 'ACTIVE'

        console.log(
            '[' + habits[i].id + '] ' +
            habits[i].name +
            ' | ' +
            'STATUS: '+status
        )
    }
}

// =====================
// Progress Management
// =====================

function updateCompletion(){

    const objectiveIndex = prompt('PROGRESS UPDATE\n=============\n\n'+
        'Select completed objective: ')

        if (objectiveIndex > 0 && objectiveIndex <= habits.length) {
        habits[objectiveIndex - 1].completed = true
          console.log(habits[objectiveIndex - 1].name +
        '  UPDATED.\n\n'+'Progress Recorded')

    } else {
        console.log('INVALID SELECTION.\n\n'+
            'No matching objective found.'
        )
    }
}

// =====================
// Start Application
// =====================

console.log(
    APP_NAME + '\n'+
    LINE + '\n\n'+
    'Welcome back.\n\n'+
    'Preparing your personal progress system...\n\n'+
    'Analyzing current state...\n\n'+
    'Ready.'
)

mainMenu()