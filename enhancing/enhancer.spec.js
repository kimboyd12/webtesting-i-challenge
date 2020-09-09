const enhancer = require('./enhancer.js');
// test away!

test("runs our first test", () => {
    expect(1 + 1).toBe(2)
})

test("repair function", () => {
    expect(enhancer.repair({
        name: "Sword",
        enhancement: 5,
        durability: 14
    })).toEqual({
        name: "Sword",
        enhancement: 5,
        durability: 100
    })
})


// Success Fn

test("success function", () => {
    expect(enhancer.success({
        name: "Sword",
        enhancement: 5,
        durability: 14
    })).toEqual({
        name: "Sword",
        enhancement: 6,
        durability: 14
    })
})

test("success function with 20 enchancement", () => {
    expect(enhancer.success({
        name: "Magic Sword",
        enhancement: 20,
        durability: 99
    })).toEqual({
        name: "Magic Sword",
        enhancement: 20,
        durability: 99
    })
})

// Fail Fn

test("fail fn -enhancement is less than 15, the durability of the item is decreased by 5", () => {
    expect(enhancer.fail({
        name: "Magic Sword",
        enhancement: 14,
        durability: 90
    })).toEqual({
        name: "Magic Sword",
        enhancement: 14,
        durability: 85
    })
})

test("fail fn -enhancement is 15 or more, the durability of the item is decreased by 10", () => {
    expect(enhancer.fail({
        name: "Magic Sword",
        enhancement: 15,
        durability: 90
    })).toEqual({
        name: "Magic Sword",
        enhancement: 15,
        durability: 80
    })
})

test("fail fn -enhancement level is greater than 16, the enhancement level decreases by 1", () => {
    expect(enhancer.fail({
        name: "Magic Sword",
        enhancement: 18,
        durability: 90
    })).toEqual({
        name: "Magic Sword",
        enhancement: 17,
        durability: 80
    })
})
