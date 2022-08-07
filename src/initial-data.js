const initialData = {
    tasks: {
        '1': {id:'1', content: 'Helpdesk Call AA999'},
        '2': {id:'2', content: 'Helpdesk Call BB999'},
        '3': {id:'3', content: 'Helpdesk Call CC999'},
        '4': {id:'4', content: 'Helpdesk Call DD999'},
        '5': {id:'5', content: 'Helpdesk Call EE999'},
        '6': {id:'6', content: 'Helpdesk Call FF999'},
        '7': {id:'7', content: 'Helpdesk Call GG999'},
    },
    columns: {
        '1': {
            id: '1',
            title: 'To Do',
            taskIds: ['1', '2'],
        },
        '2': {
            id: '2',
            title: 'Development',
            taskIds: ['3', '5'],
        },
        '3': {
            id: '3',
            title: 'Testing',
            taskIds: ['4'],
        },
        '4': {
            id: '4',
            title: 'Done',
            taskIds: ['7','6'],
        },
    },
    columnOrder: ['1','2','3','4'],
};

export default initialData;