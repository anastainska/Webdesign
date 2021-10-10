const TURTLES = [
    { id:1, scientific_name: "Wood Turtle", speed: 10, weight: 100, age: 19, length: 32},
    { id:2, scientific_name: "Sideneck Turtle", speed: 9, weight: 50, age: 8, length: 14},
    { id:3, scientific_name: "Spotted Turtle", speed: 25, weight: 47, age: 15, length: 47},
    { id:4, scientific_name: "Yellow-Bellied Turtle", speed: 100, weight: 134, age: 35, length: 76},
    { id:5, scientific_name: "Sea Turtle", speed: 17, weight: 73, age: 100, length: 23}
]

export const getAllTurtles = () => {
    return TURTLES;
};