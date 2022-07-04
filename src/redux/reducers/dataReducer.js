import { Value } from 'react-native-reanimated';
import { ADD_NAME, EDIT_NAME, DELETE_NAME, ADD_FOOD, EDIT_FOOD, DELETE_FOOD, SET_FOOD_PRICE, SET_NEW_PRICE, SET_MEMBER_VALUE, CALCULATE } from '../types'

const initialState = {
    nameList: [],
    foodList: [],
    namecalculate: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
            // เพิ่มชื่อ
            let addNameTemp = [...state.nameList, action.payload]


            // เพิ่มชื่อในรายการอาหาร
            let foodListTemp = state.foodList;
            for (let num = 0; num < state.foodList.length; num++) {
                let addMemberTemp = state.foodList[num].member
                let memberTemp = Object.keys(state.foodList[num].member);
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
            let editNameTemp = []
            return {
                data: action.payload,
            }
        case DELETE_NAME:
            // ลบชื่อ
            let deleteNameTemp = [...state.nameList.filter(word => word !== action.payload)]
            let editMemberTemp = state.foodList;

            // ลบชื่อในรายการอาหาร
            for (let num = 0; num < state.foodList.length; num++) {
                let delMemberTemp = state.foodList[num].member
                let memberTemp = {}
                for (const [key, value] of Object.entries(delMemberTemp)) {
                    deleteNameTemp.forEach(val => {
                        if (key === val) {
                            memberTemp[key] = value
                        }
                    })
                };
                editMemberTemp[num].member = memberTemp;
            }
            return {
                ...state,
                foodList: editMemberTemp,
                nameList: deleteNameTemp
            }
        case ADD_FOOD:
            // เพิ่มรายการอาหาร
            let setNameTemp = {}
            state.nameList.forEach(e => {
                setNameTemp[e] = 0
            });
            let addFoodTeme = [...state.foodList, { 'foodname': action.payload.food, 'foodtype': action.payload.foodType, 'price': 0, 'id': action.payload.id, 'member': { ...setNameTemp } }]
            return {
                ...state,
                foodList: [...addFoodTeme],
            }
        case EDIT_FOOD:
            return {
                data: action.payload,
            }
        case DELETE_FOOD:

            let deleteFoodTemp = [...state.foodList.filter(word => word.id !== action.payload)]

            return {
                ...state,
                foodList: deleteFoodTemp,
            }
        case SET_FOOD_PRICE:
            // ใส่จำนวนเงินของอาหาร
            let idx = state.foodList.findIndex((data) => data.id === action.payload.id)
            let foodPriceTemp = state.foodList;
            foodPriceTemp[idx].price = action.payload.price

            return {
                ...state,
                foodList: [...foodPriceTemp],
            }

        case SET_MEMBER_VALUE:
            // เลือกคนที่กินอาหาร
            let index = state.foodList.findIndex((data) => data.id === action.payload.id)
            let setValueTemp = state.foodList.filter((data) => data.id === action.payload.id);
            let setValueTemp1 = setValueTemp.pop()
            setValueTemp1.member[action.payload.name] = setValueTemp1.member[action.payload.name] === 0 ? 1 : 0;
            let listTemp = [...state.foodList]
            listTemp.splice(index, 1, setValueTemp1)
            return {
                ...state,
                foodList: listTemp,
            }
        case CALCULATE:
            let calculateTemp = [];
            state.foodList.forEach((data) => {
                let nameTemp = []

                for (const [key, value] of Object.entries(data.member)) {
                    if (value === 1) {
                        nameTemp.push(key)
                    }
                }
                let calculatePrice = data.price / nameTemp.length;
                if (calculateTemp.length === 0) {
                    // ใส่ชื่อและเงินตอนเริ่มต้น
                    for (let idx = 0; idx < state.nameList.length; idx++) {
                        if (nameTemp.indexOf(state.nameList[idx]) !== -1) {
                            calculateTemp.push([state.nameList[idx], calculatePrice])
                        } else {
                            calculateTemp.push([state.nameList[idx], 0])
                        }

                    }
                } else {
                    //บวกเงินทั้งหมด
                    for (let idx = 0; idx < nameTemp.length; idx++) {
                        for (let num = 0; num < calculateTemp.length; num++) {
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