
const MatchContaier = document.querySelector('.all-matches');
const addButton = document.querySelector('.lws-addMatch');
const incrementInput =document.getElementsByClassName("lws-increment") 
const decrementInput =document.getElementsByClassName("lws-decrement") 

const initialState = {
    value: 0,
    id:1,
};
// Reducer Function
const CounterReducer = (state =initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}       
const stores =[]
const addMatch =()=>{
    const match = document.createElement('div');
    match.classList.add('match');
    const id = stores.length +1;
    
    match.innerHTML = `

    <div class="wrapper">
        <button class="lws-delete">
            <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${id}</h3>
    </div>
    <div class="inc-dec">
        <form class="incrementForm">
            <h4>Increment</h4>
            <input
                type="number"
                name="increment"
                class="lws-increment"
            />
        </form>
        <form class="decrementForm">
            <h4>Decrement</h4>
            <input
                type="number"
                name="decrement"
                class="lws-decrement"
            />
        </form>
    </div>
    <div class="numbers">
        <h2 class="lws-singleResult">120</h2>
    </div>

    `;

    MatchContaier.appendChild(match);
    const valueContaner = document.getElementsByClassName('.lws-singleResult')
    const store = Redux.createStore(CounterReducer);
    stores.push(store)

    const render =()=>{
       const state = store.getState()
       valueContaner.innerText =state.value
    }

    store.subscribe(render)
  

} 

addButton.addEventListener('click',(e)=>{
    e.preventDefault();
    addMatch();
})

incrementInput.addEventListener('blur' , store.dispatch({}))