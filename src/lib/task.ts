



const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

export const pickPalette = (name: string) => {
    const index = name.charCodeAt(0) % colorPalette.length
    return colorPalette[index]
}

export const getStatusColor = (status: 'todo' | 'in progress' | 'review' | 'done' | undefined) => {

    switch(status) {

    case 'in progress':
        return 'blue.500'
    
    case 'review':
        return 'yellow.500'

    case 'done':
        return 'green.500'

    default:
        return 'fg.muted'

    }

}

export const getPriorityColor = (status: 'low' | 'medium' | 'high' | 'urgent') => {

    switch(status) {

    case 'low':
        return 'green'
    
    case 'medium':
        return 'yellow'

    case 'high':
        return 'orange'

    case 'urgent':
        return 'red'

    default:
        return 'gray'

    }

}


