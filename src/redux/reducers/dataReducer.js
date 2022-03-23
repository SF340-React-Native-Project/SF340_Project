import { Value } from 'react-native-reanimated';
import { ADD_NAME, EDIT_NAME, DELETE_NAME, ADD_FOOD, EDIT_FOOD, DELETE_FOOD, SET_FOOD_PRICE, SET_NEW_PRICE, SET_MEMBER_VALUE, CALCULATE } from '../types'

const initialState = {
    nameList: [],
    foodList: [],
    namecalculate: []

    // nameList: ["wonyus", "macdecade", "man", "poom"],
    // foodList: [{ 'foodname': 'beer', 'price': 30, 'id': 0, 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } },{ 'foodname': 'water', 'price': 30, 'id': 1, 'member': { "wonyus": 1, "macdecade": 1, "man": 1, "poom": 0 } }],
    // namecalculate: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
            // เพิ่มชื่อ
            var addNameTemp = [...state.nameList, action.payload]
            var foodListTemp = state.foodList;

            // เพิ่มชื่อในรายการอาหาร
            for (var num = 0; num < state.foodList.length; num++) {
                var addMemberTemp = state.foodList[num].member
                var memberTemp = Object.keys(state.foodList[num].member);
                addNameTemp.forEach(val => {
                    if (memberTemp.indexOf(val) == -1) {
                        addMemberTemp[val] = 0;
                    }
                });
                foodListTemp[num].member = addMemberTemp;
            }

            return {
                ...state,
                nameList: addNameTemp,
                // foodList: foodListTemp,
            }
        case EDIT_NAME:
            var editNameTemp = []
            return {
                data: action.payload,
            }
        case DELETE_NAME:
            // ลบชื่อ
            var deleteNameTemp = [...state.nameList.filter(word => word !== action.payload)]
            var editMemberTemp = state.foodList;

            // ลบชื่อในรายการอาหาร
            for (var num = 0; num < state.foodList.length; num++) {
                var delMemberTemp = state.foodList[num].member
                var memberTemp = {}
                for (const [key, value] of Object.entries(delMemberTemp)) {
                    deleteNameTemp.forEach(val => {
                        if (key === val) {
                            memberTemp[key] = value
                        }
                    })
                };
                editMemberTemp[num].member = memberTemp;
            }
            console.log(editMemberTemp)
            return {
                ...state,
                foodList: editMemberTemp,
                nameList: deleteNameTemp
            }
        case ADD_FOOD:
            // เพิ่มรายการอาหาร
            var setNameTemp = {}
            state.nameList.forEach(e => {
                setNameTemp[e] = 0
            });
            console.log(setNameTemp);
            var addFoodTeme = [...state.foodList, { 'foodname': action.payload, 'price': 0, 'id': state.foodList.length, 'member': { ...setNameTemp } }]

            return {
                ...state,
                foodList: addFoodTeme,
            }
        case EDIT_FOOD:
            return {
                data: action.payload,
            }
        case DELETE_FOOD:
            return {
                data: action.payload,
            }
        case SET_FOOD_PRICE:
            // ใส่จำนวนเงินของอาหาร

            console.log(action.payload, "reducer");
            var foodPriceTemp = state.foodList;
            foodPriceTemp[action.payload.id].price = action.payload.price

            return {
                ...state,
                foodList: [...foodPriceTemp],
            }

        case SET_MEMBER_VALUE:
            // เลือกคนที่กินอาหาร
            var listTemp = [...state.foodList.slice(0, action.payload.id), ...state.foodList.slice(action.payload.id + 1)]
            var setValueTemp = state.foodList[action.payload.id];
            setValueTemp.member[action.payload.name] = setValueTemp.member[action.payload.name] === 0 ? 1 : 0;
            listTemp = [...listTemp.slice(0, action.payload.id), setValueTemp, ...listTemp.slice(action.payload.id)]
            return {
                ...state,
                foodList: listTemp,
            }
        case CALCULATE:
            console.log(state.foodList, "reducer");
            var calculateTemp = [];
            state.foodList.forEach((data) => {
                var nameTemp = []

                for (const [key, value] of Object.entries(data.member)) {
                    if (value === 1) {
                        nameTemp.push(key)
                    }
                }
                var calculatePrice = data.price / nameTemp.length;
                if (calculateTemp.length === 0) {
                    // ใส่ชื่อและเงินตอนเริ่มต้น
                    for (var idx = 0; idx < state.nameList.length; idx++) {
                        if (nameTemp.indexOf(state.nameList[idx]) !== -1) {
                            calculateTemp.push([state.nameList[idx], calculatePrice])
                        } else {
                            calculateTemp.push([state.nameList[idx], 0])
                        }

                    }
                } else {
                    //บวกเงินทั้งหมด
                    for (var idx = 0; idx < nameTemp.length; idx++) {
                        for (var num = 0; num < calculateTemp.length; num++) {
                            if (calculateTemp[num][0] === nameTemp[idx]) {
                                calculateTemp.splice(num, 1, [calculateTemp[num][0], calculateTemp[num][1] + calculatePrice])
                            }
                        }
                    }
                }
            })
            return {
                ...state,
                namecalculate: calculateTemp,
            }

        default:
            return state;
    }
}