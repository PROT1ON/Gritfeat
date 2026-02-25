import {createSlice} from "@reduxjs/toolkit";
const demoRecords = [
{
id: 1,
name: "John Doe",
email: "john@example.com",
phone: "123-456-7890",
position: "Developer",
},


{
id: 2,
name: "Jane Smith",
email: "jane@example.com",
phone: "098-765-4321",
position: "Designer",
},

{
id: 3,
name: "Bob Johnson",
email: "bob@example.com",
phone: "555-123-4567",
position: "Manager",
}
];
// Load records from localStorage if available
const loadRecordsFromLocalStorage = () => {
    try{
        const saved = localStorage.getItem("EmployeeRecords");
        return saved ? JSON.parse(saved) : demoRecords;
    }
    catch(error){
        console.error("Error loading records from localStorage:", error);
    }
}
// calculate nextId based on demoRecords
const calculateNextId = (records) => {
    if(!records || records.length === 0) return 1;
    return Math.max(...records.map(record => record.id)) + 1;
};

const recordSlice = createSlice({
    name: 'record',
    initialState: {
        items: loadRecordsFromLocalStorage(),
        searchTerm:"",
        nextId:calculateNextId(loadRecordsFromLocalStorage())
    },
    //function crete inside reducers
    reducers: {
        //Add New record
        addRecord: (state, action) => {
            const newRecord = {id: state.nextId, ...action.payload};
            state.items.push(newRecord);
            localStorage.setItem("EmployeeRecords",JSON.stringify(state.items));
            state.nextId = calculateNextId(state.items);
        }
        //add updateRecord
        updateRecord: (state, action) => {
            const {id , data} = action.payload;
            const index = state.items.findIndex(record => record.id === id);
});

export const {addRecord} = recordSlice.actions;
    export default recordSlice.reducer;