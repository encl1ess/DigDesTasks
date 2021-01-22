// Дана коллекция представляющая собой массив записей в блоге, необходимо реализовать метод группировки элементов по пользователям

var model = [{
    id: 0,
    title: 'Title text 1',
    text: 'Some text 1',
    user: {
        id: 0,
        name: 'user 1',
    },
}, {
    id: 1,
    title: 'Title text 2',
    text: 'Some text 2',
    user: {
        id: 1,
        name: 'user 2',
    },
}, {
    id: 2,
    title: 'Title text 3',
    text: 'Some text 3',
    user: {
        id: 0,
        name: 'user 1',
    },
}, {
    id: 3,
    title: 'Title text 4',
    text: 'Some text 4',
    user: {
        id: 2,
        name: 'user 3',
    },
}, {
    id: 4,
    title: 'Title text 5',
    text: 'Some text 5',
    user: {
        id: 0,
        name: 'user 1',
    },
}]

var newModel = [];


for (let element of model) {
    var userGroups = newModel.filter(group => group.id == element.user.id);

    if (userGroups.length > 0) {
        userGroups[0].posts.push({ id: element.id, title: element.title, text: element.text });
    } else {
        var newGroup = {
            id: element.user.id,
            name: element.user.name,
            posts: [{
                id: element.id,
                title: element.title,
                text: element.text,
            }]
        };

        newModel.push(newGroup);
    }
}

console.log(newModel);