let TURTLES = [
    { id: 1, name: "Wood Turtle", description: "Cute turtle", speed: 10, weight: 100, age: 19, len: 32 },
    { id: 2, name: "Sideneck Turtle", description: "Cute turtle", speed: 9, weight: 50, age: 8, len: 14 },
    { id: 3, name: "Spotted Turtle", description: "Cute turtle", speed: 25, weight: 47, age: 15, len: 47 },
    { id: 4, name: "Yellow-Bellied Turtle", description: "Cute turtle", speed: 100, weight: 134, age: 35, len: 76 },
    { id: 5, name: "Sea Turtle", description: "Cute turtle", speed: 17, weight: 73, age: 100, len: 23 }
]

export const getTurtles = () => {
    return TURTLES;
};

export const pushTurtle = (body) => {
    TURTLES.push(body);
}

export const updateTurtle = (id, body) => {
    let idx = TURTLES.findIndex(x => x.id == id);
    TURTLES[idx] = {id};
    TURTLES[idx].id = parseInt(id);
    TURTLES[idx].name = body.name;
    TURTLES[idx].description = body.description;
    TURTLES[idx].speed = body.speed;
    TURTLES[idx].weight = body.weight;
    TURTLES[idx].age = body.age;
    TURTLES[idx].len = body.len;
}